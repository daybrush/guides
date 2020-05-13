import { Component, Prop, Vue } from "vue-property-decorator";
import VanillaGuides, { GuidesInterface, GuidesProps, PROPERTIES, METHODS, GuidesOptions, EVENTS } from "@scena/guides";
import { withMethods, Properties } from "framework-utils";
import { IObject } from "@daybrush/utils";

const watches: IObject<any> = {};

PROPERTIES.forEach(name => {
    watches[name] = function(this: Guides, val: any) {
        this.updateProperty(name, val);
    };
});

@Component({ watch: watches })
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
    public updateProperty(name: string, value: any) {
        if (name === "style") {
            this.setStyle();
            return;
        }
        const guides = this.guides;

        (guides as any)[name] = value;
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

        const guides = this.guides;
        EVENTS.forEach((name, i) => {
            guides.on(name, e => {
                this.$emit(name, { ...e });
            });
        });
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
        });

        this.options = options;
        guides && this.setStyle();
    }
}

export default interface Guides extends GuidesInterface, GuidesOptions {}
