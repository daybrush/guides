import { Component, Prop, Vue } from "vue-property-decorator";
import VanillaGuides, { GuidesInterface, GuidesProps, PROPERTIES, METHODS, GuidesOptions } from "@scena/guides";
import { withMethods, Properties } from "framework-utils";
import { IObject } from "@daybrush/utils";

@Component({
})
@Properties(PROPERTIES as any, (prototype, name) => {
    Prop()(prototype, name);
})
export default class Guides extends Vue {
    @withMethods(METHODS as any)
    private guides!: VanillaGuides;
    private options!: Partial<GuidesOptions>;

    public setStyle() {
        const el = this.$refs.guidesElement as HTMLElement;
        const elStyle = el.style as any;
        const style = this.style || { width: "100%", height: "100%" };

        for (const name in style) {
            if (elStyle[name] === style[name]) {
                continue;
            }
            elStyle[name] = style[name];
        }
    }
    protected render(h: any) {
        return h("div", { ref: "guidesElement" });
      }
    protected updated() {
        this.updateOptions();
    }
    protected mounted() {
        this.updateOptions();
        this.guides = new VanillaGuides(this.$refs.guidesElement as HTMLElement, this.options);
        this.setStyle();
    }
    protected beforeDestroy() {
        this.guides.destroy();
    }
    private updateOptions() {
        const prevOptions: IObject<any> = this.options;
        const guides: any = this.guides;
        const options: IObject<any> = {};

        PROPERTIES.forEach(name => {
            if (name === "style") {
                return;
            }
            const value = this[name];
            options[name] = value;
            if (guides && prevOptions[name] !== value) {
                guides[name] = value;
            }
        });

        this.options = options;
        guides && this.setStyle();
    }
}

export default interface Guides extends GuidesInterface, GuidesOptions {}
