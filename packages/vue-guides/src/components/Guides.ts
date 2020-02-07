import { Component, Prop, Vue } from "vue-property-decorator";
import VanillaGuides, { GuidesInterface, GuidesProps, PROPERTIES, METHODS } from "@scena/guides";
import { withMethods } from "framework-utils";
import { IObject } from "@daybrush/utils";

@Component({
})
export default class Guides extends Vue implements GuidesProps {
    @Prop() public className?: string;
    @Prop() public container?: HTMLElement;
    @Prop() public setGuides?: ((guides: number[]) => any) | undefined;
    @Prop() public rulerStyle?: IObject<any> | undefined;
    @Prop() public type?: "horizontal" | "vertical";
    @Prop() public width?: number;
    @Prop() public height?: number;
    @Prop() public unit?: number;
    @Prop() public zoom?: number;
    @Prop({ default: () => ({ width: "100%", height: "100%" }) }) public style?: IObject<any>;
    @Prop() public backgroundColor?: string;
    @Prop() public lineColor?: string;
    @Prop() public textColor?: string;
    @withMethods(METHODS as any)
    private guides!: VanillaGuides;
    private options!: Partial<GuidesProps>;

    public setStyle() {
        const el = this.$refs.guidesElement as HTMLElement;
        const elStyle = el.style as any;
        const style = this.style;

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
export default interface Guides extends GuidesInterface {}
