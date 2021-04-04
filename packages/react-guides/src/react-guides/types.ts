import { RulerProps } from "@scena/react-ruler/declaration/types";
import { IObject } from "@daybrush/utils";
import {
    OnDragStart as OnGestoDragStart,
    OnDrag as OnGestoDrag,
    OnDragEnd as OnGestoDragEnd,
} from "gesto";


export interface GuidesState {
    guides: number[];
}

/**
 * @typedef
 * @memberof Guides
 * @extends Ruler.RulerProps
 * @property - guides' class name (default: "")
 * @property - ruler's css style(default: width 100%, height: 100%)
 * @property - Interval to snap (default: 5)
 * @property - Positions to snap (default: [])
 * @property - Whether to show the moving pos when dragging (default: false)
 * @property - csp nonce
 * @property - Format of drag pos (default: v => v)
 * @property - default guidelines (default: [])
 * @property - Whether to show guidelines (default: true)
 * @property - Whether to lock add/remove/change functions via drag/click of guides (default: false)
 * @property - pos digit of guidelines (default: 0)
 * @property - CSS style objects for guide elements (default: {})
 * @property - CSS style objects for drag guide element (default: {})
 * @property - Guides Portal Container to support other frameworks. Don't set it. (default: null)
 */
export interface GuidesOptions extends RulerProps {
    className?: string;
    rulerStyle?: IObject<any>;
    snapThreshold?: number;
    snaps?: number[];
    displayDragPos?: boolean;
    cspNonce?: string;
    dragPosFormat?: (value: number) => string | number;
    defaultGuides?: number[];
    showGuides?: boolean;
    lockGuides?: boolean | Array<"add" | "change" | "remove">;
    digit?: number;
    guideStyle?: Record<string, any>;
    dragGuideStyle?: Record<string, any>;
    portalContainer?: HTMLElement | null;
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
    onDragStart?: (e: OnDragStart) => any;
    onDrag?: (e: OnDrag) => any;
    onDragEnd?: (e: OnDragEnd) => any;
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
    distX: number;
    distY: number;
}
/**
 * @typedef
 * @memberof Guides
 */
export interface OnDragStart extends OnGestoDragStart {
    dragElement: HTMLElement;
}
/**
 * @typedef
 * @memberof Guides
 */
export interface OnDrag extends OnGestoDrag {
    dragElement: HTMLElement;
}
/**
 * @typedef
 * @memberof Guides
 */
export interface OnDragEnd extends OnGestoDragEnd {
    dragElement: HTMLElement;
}
/**
 * @typedef
 * @memberof Guides
 */
export interface GuidesInterface {
    getGuides(): number[];
    scroll(pos: number): void;
    scrollGuides(pos: number): void;
    loadGuides(guides: number[]): void;
    resize(): void;
}

/**
 * @typedef
 * @memberof Guides
 */
export interface GuidesEvents {
    changeGuides: OnChangeGuides;
    dragStart: OnDragStart;
    drag: OnDrag;
    dragEnd: OnDragEnd;
}
