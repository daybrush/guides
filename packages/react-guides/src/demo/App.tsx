import { Component } from "react";
import * as React from "react";
import Scene from "scenejs";
import "./App.css";
import Guides from "../react-guides/Guides";
import { ref } from "framework-utils";

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

        </div>
        );
    }
    public componentDidMount() {
        window.addEventListener("wheel", e => {

            this.scrollX += e.deltaX;
            this.scrollY += e.deltaY;

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
