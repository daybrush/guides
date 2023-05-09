import { ref, Properties } from "framework-utils";
import * as React from "react";
import { PROPERTIES, METHODS, EVENTS } from "./consts";
import { GuidesInterface, GuidesEvents, GuidesOptions } from "@scena/react-guides/declaration/types";
import InnerGuides from "./InnerGuides";
import EventEmitter from "@scena/event-emitter";
import { camelize } from "@daybrush/utils";
import { ContainerProvider, renderSelf } from "croact";

@Properties(METHODS as any, (prototype, property) => {
    if (prototype[property]) {
        return;
    }
    prototype[property] = function(...args) {
        const self = this.getInnerGuides();

        if (!self || !self[property]) {
            return;
        }
        return self[property](...args);
    };
})
@Properties(PROPERTIES, (prototype, property) => {
    Object.defineProperty(prototype, property, {
        get() {
            return this.getInnerGuides().props[property];
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
/**
 * @sort 1
 * @extends EventEmitter
 */
class Guides extends EventEmitter<GuidesEvents> {
    private containerProvider: ContainerProvider | null = null;
    private selfElement: HTMLElement | null = null;
    private _warp = false;
    private innerGuides!: InnerGuides;
    /**
     * @sort 1
     * @param - guides' container
     * @param {$ts:Partial<Guides.GuidesOptions>} - guides' options
     */
    constructor(container: HTMLElement, options: Partial<GuidesOptions> = {}) {
        super();
        const events: any = {};

        EVENTS.forEach(name => {
            events[camelize(`on ${name}`)] = (e: any) => this.trigger(name as any, e);
        });
        let selfElement!: HTMLElement;

        if (options.warpSelf) {
            delete options.warpSelf;
            this._warp = true;
            selfElement = container;
        } else {
            selfElement = document.createElement("div");
            container.appendChild(selfElement);
        }
        this.containerProvider = renderSelf(
            <InnerGuides ref={ref(this, "innerGuides")}
                {...events}
                {...options} />,
            selfElement,
        );
    }
    /**
     * @param state
     * @param callback
     */
    public setState(state: Partial<GuidesOptions>, callback?: () => void) {
        this.innerGuides.setState(state, callback);
    }
    /**
     * @param callback
     */
    public forceUpdate(callback?: () => void) {
        this.innerGuides.forceUpdate(callback);
    }
    /**
     * destroy guides
     */
    public destroy() {
        const selfElement = this.selfElement!;

        renderSelf(
            null,
            selfElement!,
            this.containerProvider,
        );
        if (!this._warp) {
            selfElement?.parentElement?.removeChild(selfElement);
        }
        this.selfElement = null;
        this.innerGuides = null;
    }
    private getInnerGuides() {
        return this.innerGuides.guides;
    }
}
interface Guides extends GuidesInterface {}

export default Guides;
