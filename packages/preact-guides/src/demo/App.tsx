import { Component, h } from "preact";
import Scene from "scenejs";
import "./App.css";
import Guides from "../preact-guides/Guides";
import { ref } from "framework-utils";
import Gesto from "gesto";

export default class App extends Component<{}> {
    private scene: Scene = new Scene();
    // private editor!: Editor;
    private guides1: Guides;
    private guides2: Guides;
    private scrollX: number = 0;
    private scrollY: number = 0;
    public render() {
        return (<div className="page">
            <div className="box" onClick={this.restore}></div>
            <div className="ruler horizontal">
                <Guides ref={ref(this, "guides1")}
                    type="horizontal"
                    rulerStyle={{ left: "30px", width: "calc(100% - 30px)", height: "100%" }}
                    setGuides={(guides) => {
                        console.log("horizontal", guides);
                    }}
                />
            </div>
            <div className="ruler vertical">
                <Guides ref={ref(this, "guides2")}
                    type="vertical"
                    rulerStyle={{ top: "30px", height: "calc(100% - 30px)", width: "100%" }}
                    setGuides={(guides) => {
                        console.log("vertical", guides);
                    }}
                />
            </div>
            <div className="container">
                <img src="https://daybrush.com/guides/images/guides.png" width="200" alt="guides" />
                <p className="dragit">Drag Screen & Rulers!</p>
                <p className="badges">
                    <a href="https://www.npmjs.com/package/svelte-guides" target="_blank">
                        <img src="https://img.shields.io/npm/v/svelte-guides.svg?style=flat-square&color=007acc&label=version"
                            alt="npm version" /></a>
                    <a href="https://github.com/daybrush/guides" target="_blank">
                        <img src="https://img.shields.io/github/stars/daybrush/guides.svg?color=42b883&style=flat-square" /></a>
                    <a href="https://github.com/daybrush/guides" target="_blank">
                        <img src="https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square" />
                    </a>
                    <a href="https://github.com/daybrush/guides/blob/master/LICENSE" target="_blank">
                        <img
                            src="https://img.shields.io/github/license/daybrush/guides.svg?style=flat-square&label=license&color=08CE5D" />
                    </a>
                    <a href="https://github.com/daybrush/guides/tree/master/packages/react-guides" target="_blank"><img alt="React"
                        src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&color=61daeb" /></a>
                    <a href="https://github.com/daybrush/guides/tree/master/packages/preact-guides" target="_blank"><img alt="Preact"
                        src="https://img.shields.io/static/v1.svg?label=&message=Preact&style=flat-square&color=673ab8" /></a>
                    <a href="https://github.com/daybrush/guides/tree/master/packages/ngx-guides" target="_blank"><img alt="Angular"
                        src="https://img.shields.io/static/v1.svg?label=&message=Angular&style=flat-square&color=C82B38" /></a>
                    <a href="https://github.com/daybrush/guides/tree/master/packages/vue-guides" target="_blank"><img alt="Vue"
                        src="https://img.shields.io/static/v1.svg?label=&message=Vue&style=flat-square&color=3fb984" /></a>
                    <a href="https://github.com/daybrush/guides/tree/master/packages/svelte-guides" target="_blank"><img alt="Svelte"
                        src="https://img.shields.io/static/v1.svg?label=&message=Svelte&style=flat-square&color=C82B38" /></a>
                </p>
                <p className="description">A Preact Guides component that can draw ruler and manage guidelines.</p>
                <div className="buttons">
                    <a href="https://github.com/daybrush/guides/tree/master/packages/svelte-guides" target="_blank">Download</a>
                </div>
            </div>
        </div>
        );
    }
    public componentDidMount() {
        new Gesto(document.body, {
            drag: e => {
                this.scrollX -= e.deltaX;
                this.scrollY -= e.deltaY;

                this.guides1.scrollGuides(this.scrollY);
                this.guides1.scroll(this.scrollX);

                this.guides2.scrollGuides(this.scrollX);
                this.guides2.scroll(this.scrollY);
            },
        });
        window.addEventListener("resize", () => {
            this.guides1.resize();
            this.guides2.resize();
        });
    }
    public restore = () => {
        this.scrollX = 0;
        this.scrollY = 0;
        this.guides1.scroll(0);
        this.guides1.scrollGuides(0);
        this.guides2.scroll(0);
        this.guides2.scrollGuides(0);
    }
}
