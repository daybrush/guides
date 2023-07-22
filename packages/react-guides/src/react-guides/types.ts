import { DrawRulerOptions, RulerProps } from "@scena/react-ruler/declaration/types";
import { IObject } from "@daybrush/utils";
import {
    OnDragStart as OnGestoDragStart,
    OnDrag as OnGestoDrag,
    OnDragEnd as OnGestoDragEnd,
} from "gesto";
import { DragScrollOptions } from "@scena/dragscroll";


export interface GuidesState {
    guides: number[];
}

/**
 * @typedef
 * @memberof Guides
 * @extends Ruler.RulerProps
 */
export interface GuidesOptions extends RulerProps {
    /**
     * guides' class name
     * @default ""
     */
    className?: string;
    /**
     * ruler's css style
     * @default "width 100%, height: 100%"
     */
    rulerStyle?: IObject<any>;
    /**
     * Interval to snap
     * @default 5
     */
    snapThreshold?: number;
    /**
     * Positions to snap
     * @default []
     */
    snaps?: number[];
    /**
     * Whether to show the moving pos when dragging
     * @default false
     */
    displayDragPos?: boolean;
    /**
     * guides zoom(side zoom). If not set, it is the same as `zoom`.
     * @default zoom
     * @since 0.29.0
     */
    guidesZoom?: number;
    /**
     * csp nonce
     */
    cspNonce?: string;
    /**
     * Format of drag pos
     * @default self
     */
    dragPosFormat?: (value: number) => string | number;
    /**
     * default guidelines
     * @default []
     */
    defaultGuides?: number[];
    /**
     * default guide pos for init
     * @default 0
     */
    defaultGuidesPos?: number
    /**
     * Whether to show guidelines
     * @default true
     */
    showGuides?: boolean;
    /**
     * Whether to lock add/remove/change functions via drag/click of guides
     * @default false
     */
    lockGuides?: boolean | Array<"add" | "change" | "remove">;
    /**
     * pos digit of guidelines
     * @default 0
     */
    digit?: number;
    /**
     * CSS style objects for guide elements
     * @default "{}"
     */
    guideStyle?: Record<string, any>;
    /**
     * CSS style objects for drag guide element
     * @default "{}"
     */
    dragGuideStyle?: Record<string, any>;
    /**
     * Whether to show the guide pos text
     * @default false
     */
    displayGuidePos?: boolean;
    /**
     * Format of displayed guide pos
     * @default dragPosFormat
     */
    guidePosFormat?: (value: number) => string | number;
    /**
     * CSS style objects for displayed guide pos text element
     * @default: "{}"
     */
    guidePosStyle?: IObject<any>;
    /**
     * Set the scroll options, time, etc. to automatically scroll by dragging.
     * @default null
     */
    scrollOptions?: DragScrollOptions | null;
    /**
     * Numerical value of how far away from the guideline position
     * @since 0.22.0
     * @default 0
     */
    guidesOffset?: number;
}

/**
 * @typedef
 * @memberof Guides
 * @extends Guides.GuidesOptions
 */
export interface GuideOptions extends GuidesOptions {
}

/**
 * @typedef
 * @memberof Guides
 * @extends Guides.GuidesOptions
 */
export interface GuidesProps extends GuidesOptions {
    onChangeGuides?: (e: OnChangeGuides) => any;
    onRequestScroll?: (e: OnRequestScroll) => any;
    onDragStart?: (e: OnDragStart) => any;
    onDrag?: (e: OnDrag) => any;
    onDragEnd?: (e: OnDragEnd) => any;
    onClickRuler?: (e: OnClickRuler) => any;
}
/**
 * @typedef
 * @memberof Guides
 */
export interface OnChangeGuides {
    guides: number[];
    isAdd: boolean;
    isRemove: boolean;
    isChange: boolean;
    index: number;
    distX: number;
    distY: number;
}
/**
 * @typedef
 * @memberof Guides
 */
export interface OnRequestScroll {
    container: HTMLElement | SVGElement;
    direction: number[];
}

/**
 * @typedef
 * @memberof Guides
 * @extends Gesto.OnDragStart
 */
export interface OnDragStart extends OnGestoDragStart {
    dragElement: HTMLElement;
}
/**
 * @typedef
 * @memberof Guides
 * @extends Gesto.OnDrag
 */
export interface OnDrag extends OnGestoDrag {
    dragElement: HTMLElement;
}
/**
 * @typedef
 * @memberof Guides
 * @extends Gesto.OnDragEnd
 */
export interface OnDragEnd extends OnGestoDragEnd {
    dragElement: HTMLElement;
}
/**
 * @typedef
 * @memberof Guides
 * @extends Gesto.OnDragEnd
 */
export interface OnClickRuler extends OnGestoDragEnd {
    pos: number;
}
/**
 * @typedef
 * @memberof Guides
 */
export interface GuidesInterface {
    getGuides(): number[];
    scroll(pos: number): void;
    scrollGuides(pos: number): void;
    drawRuler(options: DrawRulerOptions): void;
    loadGuides(guides: number[]): void;
    resize(): void;
    getElement(): HTMLElement;
    getRulerElement(): HTMLCanvasElement;
}

/**
 * @typedef
 * @memberof Guides
 */
export interface GuidesEvents {
    changeGuides: OnChangeGuides;
    requestScroll: OnRequestScroll;
    dragStart: OnDragStart;
    drag: OnDrag;
    dragEnd: OnDragEnd;
    clickRuler: OnClickRuler;
}
