import { RulerProps } from "@scena/react-ruler/declaration/types";
import { IObject } from "@daybrush/utils";
import {
    OnDragStart as OnDraggerDragStart,
    OnDrag as OnDraggerDrag,
    OnDragEnd as OnDraggerDragEnd,
} from "@daybrush/drag";
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
    guidePreset? :number[];
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
export interface OnDragStart extends OnDraggerDragStart {
    dragElement: HTMLElement;
}
/**
 * @typedef
 */
export interface OnDrag extends OnDraggerDrag {
    dragElement: HTMLElement;
}
/**
 * @typedef
 */
export interface OnDragEnd extends OnDraggerDragEnd {
    dragElement: HTMLElement;
}
export interface GuidesInterface {
    getGuides(): number[];
    scroll(pos: number): void;
    scrollGuides(pos: number): void;
    loadGuides(guides: number[]): void;
    resize(): void;
}
