import * as React from "react";
import Ruler from "@scena/react-ruler";
import { ref, refs, prefixCSS } from "framework-utils";
import Dragger from "@daybrush/drag";
import styled, { StyledInterface } from "react-css-styled";
import { GUIDES, GUIDE, DRAGGING, ADDER } from "./consts";
import { prefix } from "./utils";
import { hasClass, addClass, removeClass } from "@daybrush/utils";
import { GuidesState, GuidesProps, GuidesInterface } from "./types";

const GuidesElement = styled("div", prefixCSS("scena-", `
{
    position: relative;
}
canvas {
    position: relative;
}
.guides {
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;
    z-index: 2000;
}
:host.horizontal .guides {
    width: 100%;
    height: 0;
    top: 30px;
}
:host.vertical .guides {
    height: 100%;
    width: 0;
    left: 30px;
}
.guide {
    position: absolute;
    background: #f33;
    z-index: 2;
}
.guide.dragging:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
:host.horizontal .guide {
    width: 100%;
    height: 1px;
    cursor: row-resize;
}
:host.vertical .guide {
    width: 1px;
    height: 100%;
    cursor: col-resize;
}
.mobile :host.horizontal .guide {
    transform: scale(1, 2);
}
.mobile :host.vertical .guide {
    transform: scale(2, 1);
}
:host.horizontal .guide:before {
    height: 20px;
}
:host.vertical .guide:before {
    width: 20px;
}
.adder {
    display: none;
}
.adder.dragging {
    display: block;
}
`));

export default class Guides extends React.PureComponent<GuidesProps, GuidesState> implements GuidesInterface {
    public static defaultProps = {
        className: "",
        type: "horizontal",
        setGuides: () => { },
        zoom: 1,
        style: { width: "100%", height: "100%" },
    };
    public state: GuidesState = {
        guides: [],
    };
    public adderElement!: HTMLElement;
    public scrollPos: number = 0;
    public ruler!: Ruler;
    private manager!: StyledInterface;
    private guidesElement!: HTMLElement;
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
            />
            <div className={GUIDES} ref={ref(this, "guidesElement")}>
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
        datas.offset = isHorizontal ? rect.top : rect.left;
        addClass(datas.target, DRAGGING);
        this.onDrag({ datas, clientX, clientY });

        inputEvent.stopPropagation();
        inputEvent.preventDefault();
    }
    private onDrag = ({ datas, clientX, clientY }: any) => {
        const type = this.props.type;
        const isHorizontal = type === "horizontal";
        const nextPos = Math.round((isHorizontal ? clientY : clientX) - datas.offset);

        datas.target.style.transform = `${this.getTranslateName()}(${nextPos}px)`;

        return nextPos;
    }
    private onDragEnd = ({ datas, clientX, clientY }: any) => {
        const pos = this.onDrag({ datas, clientX, clientY });
        const guides = this.state.guides;
        const setGuides = this.props.setGuides!;
        const guidePos = Math.round(pos / this.props.zoom!);

        removeClass(datas.target, DRAGGING);

        if (datas.fromRuler) {
            if (pos >= this.scrollPos && guides.indexOf(guidePos) < 0) {
                this.setState({
                    guides: [...guides, guidePos],
                }, () => {
                    setGuides(this.state.guides);
                });
            }
        } else {
            const index = datas.target.getAttribute("data-index");

            if (pos < this.scrollPos || guides.indexOf(guidePos) > -1) {
                guides.splice(index, 1);
            } else {
                guides[index] = guidePos;
            }
            this.setState({
                guides: [...guides],
            }, () => {
                setGuides(this.state.guides);
            });
        }
    }
    private getTranslateName() {
        return this.props.type === "horizontal" ? "translateY" : "translateX";
    }
}
