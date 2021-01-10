import {
    PROPERTIES as GUIDES_PROPERTIES,
    METHODS as GUIDES_METHODS,
    EVENTS as GUIDES_EVENTS,
} from "@scena/react-guides";
import {
    GuidesOptions,
} from "@scena/react-guides/declaration/types";
export const PROPERTIES: Array<keyof GuidesOptions> = GUIDES_PROPERTIES;

export const METHODS = GUIDES_METHODS as readonly string[];

export const EVENTS = GUIDES_EVENTS as readonly string[];
