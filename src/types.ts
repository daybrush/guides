import { GuideOptions, OnChangeGuides } from "@scena/react-guides/declaration/types";

export interface GuidesOptions extends GuideOptions {
    container?: HTMLElement;
}

export interface GuidesEvents {
    changeGuides: OnChangeGuides;
}
