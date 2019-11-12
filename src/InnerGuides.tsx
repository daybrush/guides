import { Component, h } from "preact";
import { createPortal } from "preact/compat";
import { ref } from "framework-utils";
import PreactGuides from "preact-guides";
import { GuidesOptions } from "./types";

export default class InnerGuides extends Component<GuidesOptions, GuidesOptions> {
    public state: GuidesOptions = {};
    public preactGuides: PreactGuides;
    constructor(props: GuidesOptions) {
        super(props);
        this.state = this.props;
    }
    public render() {
        const { container, ...state } = this.state;
        return createPortal(<PreactGuides ref={ref(this, "preactGuides")} {...state} />, container);
    }
}
