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
 */
export interface GuideOptions extends RulerProps {
    className?: string;
    setGuides?: (guides: number[]) => any;
    rulerStyle?: IObject<any>;
    snapThreshold?: number;
    snaps?: number[];
    displayDragPos?: boolean;
    cspNonce?: string;
    dragPosFormat?: (value: number) => string | number;
    defaultGuides?: number[];
    showGuides?: boolean;

}

/**
 * @typedef
 * @extends GuideOptions
 */
export interface GuidesProps extends GuideOptions {
    onChangeGuides?: (e: OnChangeGuides) => any;
    onDragStart?: (e: OnDragStart) => any;
    onDrag?: (e: OnDrag) => any;
    onDragEnd?: (e: OnDragEnd) => any;
}
/**
 * @typedef
 */
export interface OnChangeGuides {
    guides: number[];
    distX: number;
    distY: number;
}
/**
 * @typedef
 */
export interface OnDragStart extends OnGestoDragStart {
    dragElement: HTMLElement;
}
/**
 * @typedef
 */
export interface OnDrag extends OnGestoDrag {
    dragElement: HTMLElement;
}
/**
 * @typedef
 */
export interface OnDragEnd extends OnGestoDragEnd {
    dragElement: HTMLElement;
}
export interface GuidesInterface {
    getGuides(): number[];
    scroll(pos: number): void;
    scrollGuides(pos: number): void;
    loadGuides(guides: number[]): void;
    resize(): void;
}
