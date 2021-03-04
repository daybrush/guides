import { Component } from "react";
import * as React from "react";
import Scene from "scenejs";
import "./App.css";
import Guides from "../react-guides/Guides";
import { ref } from "framework-utils";
import Gesto from "gesto";

export default class App extends Component<{}> {
    public state = {
        zoom: 72,
        unit: 1,
        lockGuides: false,
    };
    private scene: Scene = new Scene();
    // private editor!: Editor;
    private guides1: Guides;
    private guides2: Guides;
    private scrollX: number = 0;
    private scrollY: number = 0;
    public render() {
        const lockText = this.state.lockGuides ? 'unlock' : 'lock';
        return (<div className="page">
            <div className="box" onClick={this.restore}></div>
            <div className="ruler horizontal" style={{ }}>
                <Guides ref={ref(this, "guides1")}
                    type="horizontal"
                    zoom={this.state.zoom}
                    unit={this.state.unit}
                    lockGuides={this.state.lockGuides}
                    snapThreshold={5}
                    textFormat={v => `${v}in`}
                    snaps={[1, 2, 3]}
                    digit={1}
                    style={{  height: "30px" }}
                    rulerStyle={{ left: "30px", width: "calc(100% - 30px)", height: "100%" }}
                    displayDragPos={true}
                    onChangeGuides={({ guides }) => {
                        console.log("horizontal", guides);
                    }}
                    onDragStart={e => {
                        console.log("dragStart", e);
                    }}
                    onDrag={e => {
                        console.log("drag", e);
                    }}
                    onDragEnd={e => {
                        console.log("dragEnd", e);
                    }}
                />
            </div>
            <div className="ruler vertical">
                <Guides ref={ref(this, "guides2")}
                    type="vertical"
                    lockGuides={this.state.lockGuides}
                    zoom={this.state.zoom}
                    unit={this.state.unit}
                    snaps={[100, 200, 400]}
                    rulerStyle={{ top: "30px", height: "calc(100% - 30px)", width: "100%" }}
                    displayDragPos={true}
                    onChangeGuides={({ guides }) => {
                        console.log("vertical", guides);
                    }}
                    onDragStart={e => {
                        console.log("dragStart", e);
                    }}
                    onDrag={e => {
                        console.log("drag", e);
                    }}
                    onDragEnd={e => {
                        console.log("dragEnd", e);
                    }}
                />
            </div>
            <div className="container">
                <img src="https://daybrush.com/guides/images/guides.png" width="200" alt="guides" />
                <p className="dragit">Drag Screen & Rulers!</p>
                <p><button onClick={() => {
                    this.setState({
                        zoom: this.state.zoom / 2,
                        unit: this.state.unit * 2,
                    });
                }}>-</button> / <button onClick={() => {
                    this.setState({
                        zoom: this.state.zoom * 2,
                        unit: this.state.unit / 2,
                    });
                }}>+</button></p>
                <div className="buttons">
                    <button onClick={() => this.setState({ lockGuides: !this.state.lockGuides })}>
                        <i className={`fa fa-${lockText}`}></i> 
                        {" " + lockText[0].toUpperCase() + lockText.slice(1)} Guides</button>
                </div>
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
                <p className="description">A React Guides component that can draw ruler and manage guidelines.</p>
                <div className="buttons">
                    <a href="https://github.com/daybrush/guides/tree/master/packages/svelte-guides" target="_blank">Download</a>
                </div>
            </div>
        </div>
        );
    }
    public componentDidMount() {
        new Gesto(document.body).on("drag", e => {
            this.scrollX -= e.deltaX;
            this.scrollY -= e.deltaY;

            this.guides1.scrollGuides(this.scrollY);
            this.guides1.scroll(this.scrollX);

            this.guides2.scrollGuides(this.scrollX);
            this.guides2.scroll(this.scrollY);
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