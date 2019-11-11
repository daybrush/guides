import { Component, h } from "preact";
import { createPortal } from "preact/compat";
import { ref } from "framework-utils";
import PreactGuides from "preact-guides";
import { InnerGuidesProps } from "./types";

export default class InnerGuides extends Component<InnerGuidesProps, InnerGuidesProps> {
    public state: InnerGuidesProps = {};
    public preactGuides: PreactGuides;
    constructor(props: InnerGuidesProps) {
        super(props);
        this.state = this.props;
    }
    public render() {
        const { parentElement, ...state } = this.state;
        return createPortal(<PreactGuides ref={ref(this, "preactGuides")} {...state} />, parentElement);
    }
}
