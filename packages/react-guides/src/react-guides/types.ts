import { RulerProps } from "@scena/react-ruler/declaration/types";
import { IObject } from "@daybrush/utils";

export interface GuidesState {
    guides: number[];
}
export interface GuidesProps extends RulerProps {
    setGuides?: (guides: number[]) => any;
    rulerStyle?: IObject<any>;
}
export interface GuidesInterface {
    getGuides(): number[];
    scroll(pos: number): void;
    scrollGuides(pos: number): void;
    resize(): void;
}
