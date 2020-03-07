import { GuidesOptions } from "./types";

export const PROPERTIES: Array<keyof GuidesOptions> = [
    "setGuides",
    "type", "width", "height", "rulerStyle",
    "unit", "zoom", "style", "backgroundColor", "lineColor",
    "snaps", "snapThreshold", "direction",
    "container",
    "className",
    "textColor",
];

export const METHODS = [
    "getGuides",
    "loadGuides",
    "scroll",
    "scrollGuides",
    "resize",
] as const;
