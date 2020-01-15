import * as React from "react";
import { createPortal } from "react-dom";
import { ref } from "framework-utils";
import ReactGuides from "@scena/react-guides";
import { GuidesOptions } from "./types";

export default class InnerGuides extends React.Component<GuidesOptions, GuidesOptions> {
    public state: GuidesOptions = {};
    public guides: ReactGuides;
    constructor(props: GuidesOptions) {
        super(props);
        this.state = this.props;
    }
    public render() {
        const { container, ...state } = this.state;
        return createPortal(<ReactGuides ref={ref(this, "guides")} {...state} />, container);
    }
}
