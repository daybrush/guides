/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";
import { GuidesInterface, GuidesOptions, GuidesEvents } from "@scena/guides";

export type SvelteGuidesEvents = {
    [key in keyof GuidesEvents]: CustomEvent<GuidesEvents[key]>;
}
export default class GuidesComponent extends SvelteComponentTyped<
    GuidesOptions,
    SvelteGuidesEvents
> { }

export default interface GuidesComponent extends GuidesInterface {
}

export * from "@scena/guides";
