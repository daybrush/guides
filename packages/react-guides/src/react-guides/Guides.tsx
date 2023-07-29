import * as React from "react";
import Ruler, { DrawRulerOptions, PROPERTIES as RULER_PROPERTIES, RulerProps } from "@scena/react-ruler";
import { ref, refs } from "framework-utils";
import DragScroll from "@scena/dragscroll";
import Gesto, { OnDrag, OnDragEnd, OnDragStart } from "gesto";
import { styled } from "react-css-styled";
import { GUIDES, GUIDE, DRAGGING, ADDER, DISPLAY_DRAG, GUIDES_CSS } from "./consts";
import { prefix } from "./utils";
import { hasClass, addClass, removeClass } from "@daybrush/utils";
import { GuidesState, GuidesProps, GuidesInterface } from "./types";
import { getDistElementMatrix, calculateMatrixDist } from "css-to-mat";

const GuidesElement = styled("div", GUIDES_CSS);

export default class Guides extends React.PureComponent<GuidesProps, GuidesState> implements GuidesInterface {
    public static defaultProps: GuidesProps = {
        className: "",
        type: "horizontal",
        zoom: 1,
        guidesZoom: 0,
        style: {},
        snapThreshold: 5,
        snaps: [],
        digit: 0,
        onClickRuler: () => { },
        onChangeGuides: () => { },
        onRequestScroll: () => { },
        onDragStart: () => { },
        onDrag: () => { },
        onDragEnd: () => { },
        displayDragPos: false,
        dragPosFormat: v => v,
        defaultGuides: [],
        lockGuides: false,
        showGuides: true,
        guideStyle: {},
        dragGuideStyle: {},
        guidePosStyle: {},
        defaultGuidesPos: 0,
    };
    public state: GuidesState = {
        guides: [],
    };
    public adderElement!: HTMLElement;
    public scrollPos: number = 0;
    public ruler!: Ruler;
    private managerRef = React.createRef<HTMLElement>();
    private guidesElement!: HTMLElement;
    private displayElement!: HTMLElement;
    private originElement!: HTMLElement;
    private gesto!: Gesto;
    private guideElements: HTMLElement[] = [];
    private _isFirstMove = false;
    private _zoom = 1;
    private _guidesZoom = 1;
    private _observer: ResizeObserver | null = null;

    constructor(props: GuidesProps) {
        super(props);
        this.state.guides = props.defaultGuides || [];
        this.scrollPos = props.defaultGuidesPos || 0;
    }
    public render() {
        const {
            className,
            type,
            zoom,
            guidesZoom,
            style,
            rulerStyle,
            displayDragPos,
            cspNonce,
            dragGuideStyle,
            guidePosStyle = {}
        } = this.props as Required<GuidesProps>;
        const props = this.props;
        const translateName = this.getTranslateName();
        const rulerProps: RulerProps = {};

        RULER_PROPERTIES.forEach(name => {
            if (name === "style" || name === "warpSelf" || name === "useResizeObserver") {
                return;
            }
            (rulerProps as any)[name] = props[name];
        });

        this._zoom = zoom;
        this._guidesZoom = guidesZoom || zoom;

        return <GuidesElement
            ref={this.managerRef}
            cspNonce={cspNonce}
            className={`${prefix("manager", type)} ${className}`}
            style={style}
        >
            <div className={prefix("guide-origin")} ref={ref(this, "originElement")}></div>
            <Ruler
                ref={ref(this, "ruler")}
                style={rulerStyle}
                {...rulerProps}
            />
            <div className={GUIDES} ref={ref(this, "guidesElement")} style={{
                transform: `${translateName}(${-this.scrollPos * this._guidesZoom}px)`,
            }}>
                {displayDragPos && <div className={DISPLAY_DRAG}
                    ref={ref(this, "displayElement")} style={guidePosStyle || {}} />}
                <div className={ADDER} ref={ref(this, "adderElement")} style={dragGuideStyle} />
                {this.renderGuides()}
            </div>
        </GuidesElement>;
    }
    /**
     * Draw ruler
     */
    public drawRuler(options: DrawRulerOptions) {
        this.ruler.draw(options);
    }
    public renderGuides() {
        const props = this.props;
        const {
            type,
            showGuides,
            guideStyle,
            displayGuidePos,
            guidePosStyle = {},
            guidesOffset,
        } = props as Required<GuidesProps>;

        const zoom = this._guidesZoom;
        const translateName = this.getTranslateName();
        const guides = this.state.guides;
        const guidePosFormat = props.guidePosFormat || props.dragPosFormat || (v => v);

        this.guideElements = [];
        if (showGuides) {
            return guides.map((pos, i) => {
                const guidePos = pos + (guidesOffset || 0);

                return (<div className={prefix("guide", type)}
                    ref={refs(this, "guideElements", i)}
                    key={i}
                    data-index={i}
                    data-pos={pos}
                    style={{
                        ...guideStyle,
                        transform: `${translateName}(${guidePos * zoom}px) translateZ(0px)`,
                    }}>
                    {displayGuidePos && <div className={prefix("guide-pos")} style={guidePosStyle || {}}>
                        {guidePosFormat!(pos)}
                    </div>}
                </div>);
            });
        }
        return;
    }
    public componentDidMount() {
        this.gesto = new Gesto(this.managerRef.current!, {
            container: document.body,
        }).on("dragStart", e => {
            const {
                type,
                lockGuides,
            } = this.props;
            const zoom = this._guidesZoom;

            if (lockGuides === true) {
                e.stop();
                return;
            }
            const inputEvent = e.inputEvent;
            const target = inputEvent.target;
            const datas = e.datas;
            const canvasElement = this.ruler.canvasElement;
            const guidesElement = this.guidesElement;
            const isHorizontal = type === "horizontal";
            const originRect = this.originElement.getBoundingClientRect();
            const matrix = getDistElementMatrix(this.managerRef.current!);
            const offsetPos = calculateMatrixDist(matrix, [
                e.clientX - originRect.left,
                e.clientY - originRect.top,
            ]);
            offsetPos[0] -= guidesElement.offsetLeft;
            offsetPos[1] -= guidesElement.offsetTop;
            offsetPos[isHorizontal ? 1 : 0] += this.scrollPos * zoom!;

            datas.offsetPos = offsetPos;
            datas.matrix = matrix;

            let isLockAdd = lockGuides && lockGuides.indexOf("add") > -1;
            let isLockRemove = lockGuides && lockGuides.indexOf("remove") > -1;
            let isLockChange = lockGuides && lockGuides.indexOf("change") > -1;

            if (target === canvasElement) {
                if (isLockAdd) {
                    e.stop();
                    return;
                }
                datas.fromRuler = true;
                datas.target = this.adderElement;
                // add
            } else if (hasClass(target, GUIDE)) {
                if (isLockRemove && isLockChange) {
                    e.stop();
                    return;
                }
                datas.target = target;
                // change
            } else {
                e.stop();
                return false;
            }
            this.onDragStart(e);
        }).on("drag", this._onDrag).on("dragEnd", this.onDragEnd);

        if (this.props.useResizeObserver) {
            this._observer = new ResizeObserver(this._onCheck);
            this._observer.observe(this.guidesElement, {
                box: "border-box",
            });
            this._observer.observe(this.getRulerElement(), {
                box: "border-box",
            });
        } else {
            this._onCheck();
        }
    }
    public componentWillUnmount() {
        this.gesto.unset();
        this._observer?.disconnect();
    }
    public componentDidUpdate(prevProps: any) {
        const nextGuides = this.props.defaultGuides;

        if (prevProps.defaultGuides !== nextGuides) {
            // to dynamically update guides from code rather than dragging guidelines
            this.setState({ guides: nextGuides || [] });
        }
    }
    /**
     * Load the current guidelines.
     * @memberof Guides
     * @instance
     */
    public loadGuides(guides: number[]) {
        this.setState({
            guides,
        });
    }
    /**
     * Get current guidelines.
     * @memberof Guides
     * @instance
     */
    public getGuides(): number[] {
        return this.state.guides;
    }
    /**
     * Scroll the positions of the guidelines opposite the ruler.
     * @memberof Guides
     * @instance
     */
    public scrollGuides(pos: number, nextZoom = this._guidesZoom) {
        this._setZoom({ guidesZoom: nextZoom });
        const translateName = this.getTranslateName();
        const guidesElement = this.guidesElement;

        this.scrollPos = pos;
        guidesElement.style.transform = `${translateName}(${-pos * nextZoom}px)`;

        const guides = this.state.guides;
        const guidesOffset = this.props.guidesOffset || 0;
        this.guideElements.forEach((el, i) => {
            if (!el) {
                return;
            }
            const guidePos = guides[i] + (guidesOffset || 0);

            el.style.transform = `${translateName}(${guidePos * nextZoom}px) translateZ(0px)`;
            el.style.display = -pos + guidePos < 0 ? "none" : "block";
        });
    }
    /**
     * Set to the next zoom.
     * @memberof Guides
     * @since 0.22.0
     * @param nextZoom - next zoom
     */
    public zoomTo(nextZoom: number, nextGuidesZoom = nextZoom) {
        this.scroll(this.getRulerScrollPos(), nextZoom);
        this.scrollGuides(this.getGuideScrollPos(), nextGuidesZoom);
    }
    /**
     * Get Guides DOM Element
     * @memberof Guides
     * @instance
     */
    public getElement() {
        return this.managerRef.current!;
    }
    /**
     * Get Ruler DOM Element
     * @memberof Guides
     * @instance
     */
    public getRulerElement() {
        return this.ruler.canvasElement;
    }
    /**
     * Scroll position of guides (horizontal: y, vertical: x)
     */
    public getGuideScrollPos() {
        return this.scrollPos;
    }
    /**
     * Scroll position of the ruler (horizontal: x, vertical: y)
     */
    public getRulerScrollPos() {
        return this.ruler.getScrollPos();
    }
    /**
     * Scroll the position of the ruler.
     * @memberof Guides
     * @instance
     */
    public scroll(pos: number, nextZoom = this._zoom) {
        this._setZoom({ zoom: nextZoom });
        this.ruler.scroll(pos, nextZoom);
    }
    /**
     * Recalculate the size of the ruler.
     * @memberof Guides
     * @instance
     */
    public resize(nextZoom = this._zoom) {
        this._setZoom({ zoom: nextZoom });
        this.ruler.resize(nextZoom);
    }
    private onDragStart = (e: any) => {
        const { datas, inputEvent } = e;

        this._isFirstMove = true;
        this.movePos(e);

        /**
         * When the drag starts, the dragStart event is called.
         * @memberof Guides
         * @event dragStart
         * @param {OnDragStart} - Parameters for the dragStart event
         */
        this.props.onDragStart!({
            ...e,
            dragElement: datas.target,
        });

        if (!this.gesto.isFlag()) {
            return;
        }
        inputEvent.stopPropagation();
        inputEvent.preventDefault();


        this._startDragScroll(e);
    }
    private _onDrag = (e: any) => {
        if (this._isFirstMove) {
            this._isFirstMove = false;
            addClass(e.datas.target, DRAGGING);
        }
        const nextPos = this.movePos(e);

        /**
         * When dragging, the drag event is called.
         * @memberof Guides
         * @event drag
         * @param {OnDrag} - Parameters for the drag event
         */
        this.props.onDrag!({
            ...e,
            dragElement: e.datas.target,
        });

        if (!this.gesto.isFlag()) {
            this._endDragScroll(e);
            return;
        }

        this._dragScroll(e);
        return nextPos;
    }
    private onDragEnd = (e: OnDragEnd) => {
        const { datas, isDouble, distX, distY } = e;
        const pos = this.movePos(e);
        let guides = this.state.guides;
        const { onChangeGuides, displayDragPos, digit, lockGuides, guidesOffset } = this.props;
        const zoom = this._guidesZoom;
        const guidePos = parseFloat((pos / zoom!).toFixed(digit || 0));
        const baseScrollPos = this.scrollPos - (guidesOffset || 0);

        if (displayDragPos) {
            this.displayElement.style.cssText += `display: none;`;
        }
        removeClass(datas.target, DRAGGING);
        /**
         * When the drag finishes, the dragEnd event is called.
         * @memberof Guides
         * @event dragEnd
         * @param {OnDragEnd} - Parameters for the dragEnd event
         */
        this.props.onDragEnd!({
            ...e,
            dragElement: datas.target,
        });

        this._endDragScroll(e);
        if (datas.fromRuler) {
            if (this._isFirstMove) {
                /**
                 * When click the ruler, the click ruler is called.
                 * @memberof Guides
                 * @event clickRuler
                 * @param {OnClickRuler} - Parameters for the clickRuler event
                 */
                this.props.onClickRuler!({
                    ...e,
                    pos: 0,
                });
            }
            if (guidePos >= baseScrollPos && guides.indexOf(guidePos) < 0) {
                this.setState({
                    guides: [...guides, guidePos],
                }, () => {
                    /**
                     * The `changeGuides` event occurs when the guideline is added / removed / changed.
                     * @memberof Guides
                     * @event changeGuides
                     * @param {OnChangeGuides} - Parameters for the changeGuides event
                     */
                    onChangeGuides!({
                        guides: this.state.guides,
                        distX,
                        distY,
                        index: guides.length,
                        isAdd: true,
                        isRemove: false,
                        isChange: false,
                    });
                });
            }
        } else {
            const index = parseFloat(datas.target.getAttribute("data-index"));
            let isRemove = false;
            let isChange = false;

            guides = [...guides];

            const guideIndex = guides.indexOf(guidePos);
            if (
                isDouble
                || guidePos < baseScrollPos
                || (guideIndex > -1 && guideIndex !== index)
            ) {
                if (lockGuides && (lockGuides === true || lockGuides.indexOf("remove") > -1)) {
                    return;
                }
                guides.splice(index, 1);
                isRemove = true;
            } else if (guideIndex > -1) {
                return;
            } else {
                if (lockGuides && (lockGuides === true || lockGuides.indexOf("change") > -1)) {
                    return;
                }
                guides[index] = guidePos;
                isChange = true;
            }
            this.setState({
                guides,
            }, () => {
                const nextGuides = this.state.guides;
                onChangeGuides!({
                    distX,
                    distY,
                    guides: nextGuides,
                    isAdd: false,
                    index,
                    isChange,
                    isRemove,
                });
            });
        }
    }
    private movePos(e: any) {
        const { datas, distX, distY } = e;
        const props = this.props;
        const {
            type, snaps, snapThreshold,
            displayDragPos,
            digit,
        } = props;
        const guidesOffset = props.guidesOffset || 0;
        const zoom = this._guidesZoom;
        const dragPosFormat = props.dragPosFormat || (v => v);
        const isHorizontal = type === "horizontal";
        const matrixPos = calculateMatrixDist(datas.matrix, [distX, distY]);
        const offsetPos = datas.offsetPos;
        const offsetX = matrixPos[0] + offsetPos[0];
        const offsetY = matrixPos[1] + offsetPos[1];
        const guidesZoomOffset = guidesOffset * zoom;
        let nextPos = Math.round(isHorizontal ? offsetY : offsetX) - guidesOffset;
        let guidePos = parseFloat((nextPos / zoom!).toFixed(digit || 0));
        const guideSnaps = snaps!.slice().sort((a, b) => {
            return Math.abs(guidePos - a) - Math.abs(guidePos - b);
        });

        if (guideSnaps.length && Math.abs(guideSnaps[0] * zoom! - nextPos) < snapThreshold!) {
            guidePos = guideSnaps[0];
            nextPos = guidePos * zoom!;
        }
        if (!datas.fromRuler || !this._isFirstMove) {
            if (displayDragPos) {
                const displayPos = type === "horizontal"
                    ? [offsetX, nextPos + guidesZoomOffset]
                    : [nextPos + guidesZoomOffset, offsetY];

                this.displayElement.style.cssText += `display: block;`
                    + `transform: translate(-50%, -50%) `
                    + `translate(${displayPos.map(v => `${v}px`).join(", ")})`;
                this.displayElement.innerHTML = `${dragPosFormat!(guidePos)}`;
            }
            const target = datas.target;


            target.setAttribute("data-pos", guidePos);
            target.style.transform = `${this.getTranslateName()}(${nextPos + guidesOffset * zoom}px)`;
        }

        return nextPos;
    }
    private getTranslateName() {
        return this.props.type === "horizontal" ? "translateY" : "translateX";
    }

    private _startDragScroll(e: OnDragStart) {
        const scrollOptions = this.props.scrollOptions;

        if (!scrollOptions) {
            return;
        }
        const datas = e.datas;
        const dragScroll = new DragScroll();

        datas.dragScroll = dragScroll;
        dragScroll.on("scroll", ({ container, direction }) => {
            /**
             * If scroll can be triggered through drag, the `requestScroll` event is fired.
             * @memberof Guides
             * @event requestScroll
             * @param {OnRequestScroll} - Parameters for the `requestScroll` event
             */
            this.props.onRequestScroll?.({ container, direction });
        }).on("move", ({ offsetX, offsetY, inputEvent }) => {
            this.gesto.scrollBy(offsetX, offsetY, inputEvent.inputEvent, true);
        });
        dragScroll.dragStart(e, {
            container: scrollOptions.container,
        });
    }
    private _dragScroll(e: OnDrag) {
        const scrollOptions = this.props.scrollOptions;

        if (!scrollOptions) {
            return;
        }
        const dragScroll = e.datas.dragScroll as DragScroll;

        dragScroll.drag(e, scrollOptions);
    }
    private _endDragScroll(e: OnDragEnd) {
        e.datas.dragScroll?.dragEnd();
        e.datas.dragScroll = null;
    }
    private _onCheck = () => {
        this.resize();
    }
    private _setZoom(zooms: { zoom?: number; guidesZoom?: number }) {
        const {
            zoom: nextZoom,
            guidesZoom: nextGuidesZoom,
        } = zooms;
        const hasZoom = !!this.props.zoom;
        const hasGuidesZoom = !!this.props.guidesZoom;

        if (hasGuidesZoom) {
            if (nextGuidesZoom) {
                this._guidesZoom = nextGuidesZoom;
            }
        } else {
            if (nextGuidesZoom) {
                this._zoom = nextGuidesZoom;
                this._guidesZoom = nextGuidesZoom;
            }
            if (nextZoom) {
                this._guidesZoom = nextZoom;
            }
        }
        if (nextZoom) {
            this._zoom  = nextZoom;
        }
    }
}
