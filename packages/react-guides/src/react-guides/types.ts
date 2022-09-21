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
 * @property - Whether to show the guide pos text (default: false)
 * @property - Format of displayed guide pos (default: dragPosFormat)
 * @property - CSS style objects for displayed guide element (default: {})
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
    /**
     * pos digit of guidelines (default: 0)
     */
    digit?: number;
    guideStyle?: Record<string, any>;
    dragGuideStyle?: Record<string, any>;
    displayGuidePos?: boolean;
    guidePosFormat?: (value: number) => string | number;
    guidePosStyle?: IObject<any>;
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
    distX: number;
    distY: number;
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
    clickRuler: OnClickRuler;
}
