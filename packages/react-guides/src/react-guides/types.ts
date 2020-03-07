import { RulerProps } from "@scena/react-ruler/declaration/types";
import { IObject } from "@daybrush/utils";

export interface GuidesState {
    guides: number[];
}
export interface GuidesProps extends RulerProps {
    className?: string;
    setGuides?: (guides: number[]) => any;
    rulerStyle?: IObject<any>;
    snapThreshold?: number;
    snaps?: number[];
}
export interface GuidesInterface {
    getGuides(): number[];
    scroll(pos: number): void;
    scrollGuides(pos: number): void;
    loadGuides(guides: number[]): void;
    resize(): void;
}
