import { prefix } from "./utils";
import { prefixCSS } from "framework-utils";
import { GuidesOptions } from "./types";
import { PROPERTIES as RULER_PROPERTIES } from "@scena/react-ruler";

export const ADDER = prefix("guide", "adder");
export const GUIDES = prefix("guides");
export const GUIDE = prefix("guide");
export const DRAGGING = prefix("dragging");
export const DISPLAY_DRAG = prefix("display-drag");
export const GUIDES_CSS = prefixCSS("scena-guides-", `
{
    position: relative;
    width: 100%;
    height: 100%;
}
canvas {
    position: relative;
}
.guide-origin {
    position: absolute;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    opacity: 0;
}
.guides {
    position: absolute;
    bottom: 0;
    right: 0;
    will-change: transform;
    z-index: 2000;
}
.guide-pos {
    position: absolute;
    font-weight: bold;
    font-size: 12px;
    color: #f33;
}
.horizontal .guide-pos {
    bottom: 100%;
    left: 50%;
    transform: translate(-50%);
}
.vertical .guide-pos {
    left: calc(100% + 2px);
    top: 50%;
    transform: translateY(-50%);
}
.display-drag {
    position: absolute;
    will-change: transform;
    z-index: 2000;
    font-weight: bold;
    font-size: 12px;
    display: none;
    left: 20px;
    top: -20px;
    color: #f33;
}
:host.horizontal .guides {
    width: 100%;
    height: 0;
}
:host.vertical .guides {
    height: 100%;
    width: 0;
}
:host.horizontal canvas {
    cursor: ns-resize;
}
:host.vertical canvas {
    cursor: ew-resize;
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
`);

export const PROPERTIES: Array<keyof GuidesOptions> = [
    "className",
    "rulerStyle",
    'snapThreshold',
    "snaps",
    "displayDragPos",
    "cspNonce",
    'dragPosFormat',
    "defaultGuides",
    "showGuides",
    "scrollOptions",
    "guideStyle",
    "guidesOffset",
    "digit",
    "defaultGuidesPos",
    "dragGuideStyle",
    "displayGuidePos",
    "guidePosFormat",
    "guidePosStyle",
    "lockGuides",
    "guidesZoom",
    ...RULER_PROPERTIES,
];

export const METHODS = [
    "getGuides",
    "loadGuides",
    "scroll",
    "scrollGuides",
    "resize",
    "getElement",
    "getRulerElement",
    "forceUpdate",
    "getRulerScrollPos",
    "getGuideScrollPos",
    "zoomTo",
    "drawRuler",
] as const;

export const EVENTS = [
    "changeGuides",
    "requestScroll",
    "dragStart",
    "drag",
    "dragEnd",
    "clickRuler",
] as const;
