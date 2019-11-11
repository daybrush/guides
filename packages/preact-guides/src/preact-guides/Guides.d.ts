import { GuidesInterface, GuidesProps, GuidesState } from "@scena/react-guides/declaration/types";
import Preact, { Component } from "preact";

export default class PreactGuides extends Component<GuidesProps, GuidesState> {
    public render(): any;
}
export default interface PreactGuides extends Component<GuidesProps, GuidesState>, GuidesInterface {}
