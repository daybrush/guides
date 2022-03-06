import { MethodInterface } from "framework-utils";
import VanillaGuides, { GuideOptions, GuidesInterface } from "@scena/guides";

export interface VueGuidesInterface
    extends MethodInterface<GuidesInterface, VanillaGuides, VueGuidesInterface> {
    name: string;
    $el: HTMLElement;
    $props: GuideOptions & { vueStyle: Record<string, any> };
    $refs: any;
    $emit(name: string, e: any): void;
    $_guides: VanillaGuides;
}

