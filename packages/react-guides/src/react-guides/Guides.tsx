import * as React from "react";
import Ruler from "@scena/react-ruler";
import { ref, refs } from "framework-utils";
import Dragger from "@daybrush/drag";
import styled, { StyledInterface } from "react-css-styled";
import { GUIDES, GUIDE, DRAGGING, ADDER, DISPLAY_DRAG, GUIDES_CSS } from "./consts";
import { prefix } from "./utils";
import { hasClass, addClass, removeClass } from "@daybrush/utils";
import { GuidesState, GuidesProps, GuidesInterface } from "./types";

const GuidesElement = styled("div", GUIDES_CSS);

export default class Guides extends React.PureComponent<GuidesProps, GuidesState> implements GuidesInterface {
    public static defaultProps: GuidesProps = {
        className: "",
        type: "horizontal",
        setGuides: () => { },
        zoom: 1,
        style: { width: "100%", height: "100%" },
        snapThreshold: 5,
        snaps: [],
        onChangeGuides: () => {},
        displayDragPos: false,
        dragPosFormat: v => v,
    };
    public state: GuidesState = {
        guides: [],
    };
    public adderElement!: HTMLElement;
    public scrollPos: number = 0;
    public ruler!: Ruler;
    private manager!: StyledInterface;
    private guidesElement!: HTMLElement;
    private displayElement!: HTMLElement;
    private dragger!: Dragger;
    private guideElements: HTMLElement[] = [];

    public render() {
        const {
            className,
            type,
            width,
            height,
            unit,
            zoom,
            style,
            rulerStyle,
            backgroundColor,
            lineColor,
            textColor,
            direction,
            displayDragPos,
        } = this.props as Required<GuidesProps>;
        return <GuidesElement
            ref={ref(this, "manager")}
            className={`${prefix("manager", type)} ${className}`}
            style={style}
        >
            <Ruler
                ref={ref(this, "ruler")}
                type={type}
                width={width}
                height={height}
                unit={unit}
                zoom={zoom}
                backgroundColor={backgroundColor}
                lineColor={lineColor}
                style={rulerStyle}
                textColor={textColor}
                direction={direction}
            />
            <div className={GUIDES} ref={ref(this, "guidesElement")}>
                {displayDragPos && <div className={DISPLAY_DRAG} ref={ref(this, "displayElement")} />}
                <div className={ADDER} ref={ref(this, "adderElement")} />
                {this.renderGuides()}
            </div>
        </GuidesElement>;
    }
    public renderGuides() {
        const { type, zoom } = this.props as Required<GuidesProps>;
        const translateName = type === "horizontal" ? "translateY" : "translateX";
        const guides = this.state.guides;

        this.guideElements = [];
        return guides.map((pos, i) => {
            return (<div className={prefix("guide", type)}
                ref={refs(this, "guideElements", i)}
                key={i}
                data-index={i}
                style={{
                    transform: `${translateName}(${pos * zoom}px)`,
                }}></div>);
        });
    }
    public componentDidMount() {
        this.dragger = new Dragger(
            this.manager.getElement(), {
            container: document.body,
            dragstart: e => {
                const target = e.inputEvent.target;
                const datas = e.datas;

                if (target === this.ruler.canvasElement) {
                    e.datas.fromRuler = true;
                    datas.target = this.adderElement;
                } else if (!hasClass(target, GUIDE)) {
                    return false;
                } else {
                    datas.target = target;
                }
                this.onDragStart(e);
            },
            drag: this.onDrag,
            dragend: this.onDragEnd,
        },
        );
    }
    public componentWillUnmount() {
        this.dragger.unset();
    }
    public loadGuides(guides: number[]) {
        this.setState({
            guides,
        });
    }
    public getGuides() {
        return this.state.guides;
    }
    public scrollGuides(pos: number) {
        const { zoom } = this.props as Required<GuidesProps>;
        const guidesElement = this.guidesElement;

        this.scrollPos = pos;
        guidesElement.style.transform = `${this.getTranslateName()}(${-pos * zoom}px)`;

        const guides = this.state.guides;
        this.guideElements.forEach((el, i) => {
            if (!el) {
                return;
            }
            el.style.display = -pos + guides[i] < 0 ? "none" : "block";
        });
    }
    public resize() {
        this.ruler.resize();
    }
    public scroll(pos: number) {
        this.ruler.scroll(pos);
    }
    private onDragStart = ({ datas, clientX, clientY, inputEvent }: any) => {
        const isHorizontal = this.props.type === "horizontal";
        const rect = this.guidesElement.getBoundingClientRect();
        datas.rect = rect;
        datas.offset = isHorizontal ? rect.top : rect.left;

        addClass(datas.target, DRAGGING);
        this.onDrag({ datas, clientX, clientY });

        inputEvent.stopPropagation();
        inputEvent.preventDefault();
    }
    private onDrag = ({ datas, clientX, clientY }: any) => {
        const { type, zoom, snaps, snapThreshold, displayDragPos, dragPosFormat } = this.props;
        const isHorizontal = type === "horizontal";
        let nextPos = Math.round((isHorizontal ? clientY : clientX) - datas.offset);
        const guidePos = Math.round(nextPos / zoom!);
        const guideSnaps = snaps!.slice().sort((a, b) => {
            return Math.abs(guidePos - a) - Math.abs(guidePos - b);
        });

        if (guideSnaps.length && Math.abs(guideSnaps[0] - guidePos) < snapThreshold!) {
            nextPos = guideSnaps[0] * zoom!;
        }
        if (displayDragPos) {
            const rect = datas.rect;
            const displayPos = type === "horizontal"
                ? [clientX - rect.left, guidePos]
                : [guidePos, clientY - rect.top];
            this.displayElement.style.cssText += `display: block;transform: translate(-50%, -50%) translate(${
                displayPos.map(v => `${v}px`).join(", ")
            })`;
            this.displayElement.innerHTML = `${dragPosFormat!(guidePos)}`;
        }
        datas.target.style.transform = `${this.getTranslateName()}(${nextPos}px)`;

        return nextPos;
    }
    private onDragEnd = ({ datas, clientX, clientY }: any) => {
        const pos = this.onDrag({ datas, clientX, clientY });
        const guides = this.state.guides;
        const { setGuides, onChangeGuides, zoom, displayDragPos } = this.props;
        const guidePos = Math.round(pos / zoom!);

        if (displayDragPos) {
            this.displayElement.style.cssText += `display: none;`;
        }
        removeClass(datas.target, DRAGGING);

        if (datas.fromRuler) {
            if (pos >= this.scrollPos && guides.indexOf(guidePos) < 0) {
                this.setState({
                    guides: [...guides, guidePos],
                }, () => {
                    onChangeGuides!({
                        guides: this.state.guides,
                    });
                    setGuides!(this.state.guides);
                });
            }
        } else {
            const index = datas.target.getAttribute("data-index");

            if (pos < this.scrollPos) {
                guides.splice(index, 1);
            } else if (guides.indexOf(guidePos) > -1) {
                return;
            } else {
                guides[index] = guidePos;
            }
            this.setState({
                guides: [...guides],
            }, () => {
                setGuides!(this.state.guides);
            });
        }
    }
    private getTranslateName() {
        return this.props.type === "horizontal" ? "translateY" : "translateX";
    }
}
