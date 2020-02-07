import { ref, Properties } from "framework-utils";
import * as React from "react";
import { render } from "react-dom";
import { PROPERTIES, METHODS } from "./consts";
import { GuidesInterface } from "@scena/react-guides/declaration/types";
import InnerGuides from "./InnerGuides";
import { GuidesOptions } from "./types";

@Properties(METHODS as any, (prototype, property) => {
    if (prototype[property]) {
        return;
    }
    prototype[property] = function(...args) {
        const self = this.getPreactGuides();

        if (!self || !self[property]) {
            return;
        }
        return self[property](...args);
    };
})
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
class Guides {
    private tempElement = document.createElement("div");
    private innerGuides!: InnerGuides;

    constructor(container: HTMLElement, options: Partial<GuidesOptions> = {}) {
        render(
            <InnerGuides ref={ref(this, "innerGuides")}
                {...options} container={container} />,
            this.tempElement,
        );
    }
    public setState(state: any, callback?: () => void) {
        this.innerGuides.setState(state, callback);
    }
    public destroy() {
        render(null, this.tempElement);
        this.tempElement = null;
        this.innerGuides = null;
    }
    private getPreactGuides() {
        return this.innerGuides.guides;
    }
}
interface Guides extends GuidesInterface {}

export default Guides;
