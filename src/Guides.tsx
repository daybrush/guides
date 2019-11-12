import { ref, Properties } from "framework-utils";
import { h, render } from "preact";
import { PROPERTIES } from "./consts";
import { GuidesInterface, GuidesProps } from "@scena/react-guides/declaration/types";
import InnerGuides from "./InnerGuides";

@Properties(PROPERTIES, (prototype, property) => {
    Object.defineProperty(prototype, property, {
        get() {
            return this.getPreactGuides().props[property];
        },
        set(value) {
            this.innerGuides.setState({
                [property]: value,
            });
        },
        enumerable: true,
        configurable: true,
    });
})
class Guides implements GuidesInterface {
    private tempElement = document.createElement("div");
    private innerGuides!: InnerGuides;

    constructor(container: HTMLElement, options: Partial<GuidesProps> = {}) {
        render(
            <InnerGuides ref={ref(this, "innerGuides")}
                {...options} container={container} />,
            this.tempElement,
        );
    }
    public scroll(scrollPos: number) {
        this.getPreactGuides().scroll(scrollPos);
    }
    public scrollGuides(scrollPos: number) {
        this.getPreactGuides().scrollGuides(scrollPos);
    }
    public resize() {
        this.getPreactGuides().resize();
    }
    public getGuides() {
        return this.getPreactGuides().getGuides();
    }
    public setState(state: any, callback: () => void) {
        this.innerGuides.setState(state, callback);
    }
    public destroy() {
        render("", this.tempElement);
        this.tempElement = null;
        this.innerGuides = null;
    }
    private getPreactGuides() {
        return this.innerGuides.preactGuides;
    }
}

export default Guides;
