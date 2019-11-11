import { Component, Prop, Vue } from "vue-property-decorator";
import VanillaGuides, { GuidesInterface, GuidesProps, PROPERTIES } from "@scena/guides";
import { IObject } from "@daybrush/utils";

@Component({
})
export default class Guides extends Vue implements GuidesInterface, GuidesProps {

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
    private guides!: VanillaGuides;
    private options!: Partial<GuidesProps>;

    public scroll(scrollPos: number) {
        this.guides.scroll(scrollPos);
    }
    public resize() {
        this.guides.resize();
    }
    public getGuides(): number[] {
        return this.guides.getGuides();
    }
    public scrollGuides(pos: number): void {
        this.guides.scrollGuides(pos);
    }
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
