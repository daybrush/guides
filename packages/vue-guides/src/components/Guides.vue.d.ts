import { MethodInterface } from "framework-utils";
import VanillaGuides, { GuideOptions, GuidesInterface } from "@scena/guides";

interface VueGuidesInterface
    extends MethodInterface<GuidesInterface, VanillaGuides, VueGuidesInterface> {
    $el: HTMLElement;
    $props: GuideOptions & { vueStyle: Record<string, any> };
    $refs: any;
    $emit(name: string, e: any): void;
    $_guides: VanillaGuides;
}


declare const VueGuides: VueGuidesInterface;
type VueGuides = VueGuidesInterface;

export default VueGuides;
