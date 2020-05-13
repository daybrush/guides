import { ref, Properties } from "framework-utils";
import * as React from "react";
import { render } from "react-dom";
import { PROPERTIES, METHODS, EVENTS } from "./consts";
import { GuidesInterface } from "@scena/react-guides/declaration/types";
import InnerGuides from "./InnerGuides";
import { GuidesOptions, GuidesEvents } from "./types";
import Component from "@egjs/component";
import { camelize } from "@daybrush/utils";

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
class Guides extends Component {
    private tempElement = document.createElement("div");
    private innerGuides!: InnerGuides;

    constructor(container: HTMLElement, options: Partial<GuidesOptions> = {}) {
        super();
        const events: any = {};

        EVENTS.forEach(name => {
            events[camelize(`on ${name}`)] = (e: any) => this.trigger(name, e);
        });

        render(
            <InnerGuides  {...options} {...events} container={container} ref={ref(this, "innerGuides")} />,
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
interface Guides extends GuidesInterface {
    on<T extends keyof GuidesEvents>(eventName: T, handlerToAttach: (event: GuidesEvents[T]) => any): this;
    on(eventName: string, handlerToAttach: (event: { [key: string]: any }) => any): this;
    on(events: { [key: string]: (event: { [key: string]: any }) => any }): this;
}

export default Guides;
