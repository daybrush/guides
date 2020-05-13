import Guides from "../../src/Guides";
import Dragger from "@daybrush/drag";
import "./index.css";

const guides1 = new Guides(document.querySelector(".ruler.horizontal"), {
    type: "horizontal",
    displayDragPos: true,
    rulerStyle: { left: "30px", width: "calc(100% - 30px)", height: "100%" },
});
const guides2 = new Guides(document.querySelector(".ruler.vertical"), {
    type: "vertical",
    displayDragPos: true,
    rulerStyle: { top: "30px", height: "calc(100% - 30px)", width: "100%" },
});

window.addEventListener("resize", () => {
    guides1.resize();
    guides2.resize();
});

let scrollX = 0;
let scrollY = 0;

const box = document.querySelector(".box");

new Dragger(document.body, {
    dragstart: e => {
        if (e.inputEvent.target === box || e.inputEvent.target.nodeName === "A") {
            return false;
        }
    },
    drag: e => {
        scrollX -= e.deltaX;
        scrollY -= e.deltaY;

        guides1.scroll(scrollX);
        guides1.scrollGuides(scrollY);
        guides2.scroll(scrollY);
        guides2.scrollGuides(scrollX);
    },
});
box.addEventListener("click", () => {
    scrollX = 0;
    scrollY = 0;
    guides1.scroll(0);
    guides1.scrollGuides(0);
    guides2.scroll(0);
    guides2.scrollGuides(0);
});
