import React, { useState } from "react";
import Guides from "../react-guides";
import InfiniteViewer from "react-infinite-viewer";

import "./InfiniteViewer.css";

export default function App() {
    const [horizontalZoom, setHorizontalZoom] = React.useState(1);
    const [verticalZoom, setVerticalZoom] = React.useState(1);
    const horizontalUnit = Math.round(Math.floor(1 / horizontalZoom) * 50) || 50;
    const verticalUnit = Math.round(Math.floor(1 / verticalZoom) * 50) || 50;
    const viewerRef = React.useRef<InfiniteViewer>(null);
    const horizontalGuidesRef = React.useRef<Guides>(null);
    const verticalGuidesRef = React.useRef<Guides>(null);
    const [horizontalGuidelines, setHorizontalGuidelines] = useState<number[]>([]);
    const [verticalGuidelines, setVerticalGuidelines] = useState<number[]>([]);

    React.useEffect(() => {
        viewerRef.current!.scrollCenter();
    }, []);

    return (
        <div className="App">
            <div className="guides horizontal">
                <Guides
                    ref={horizontalGuidesRef}
                    type="horizontal"
                    useResizeObserver={true}
                    displayDragPos={true}
                    displayGuidePos={true}
                    zoom={horizontalZoom}
                    guidesZoom={verticalZoom}
                    unit={horizontalUnit}
                    marks={verticalGuidelines}
                    onChangeGuides={({ guides }) => {
                        console.log("horizontal", guides);
                        setHorizontalGuidelines(guides);
                    }}
                />
            </div>
            <div className="guides vertical">
                <Guides
                    ref={verticalGuidesRef}
                    type="vertical"
                    useResizeObserver={true}
                    displayDragPos={true}
                    displayGuidePos={true}
                    zoom={verticalZoom}
                    guidesZoom={horizontalZoom}
                    unit={verticalUnit}
                    marks={horizontalGuidelines}
                    onChangeGuides={({ guides }) => {
                        console.log("vertical", guides);
                        setVerticalGuidelines(guides);
                    }}
                />
            </div>
            <InfiniteViewer
                ref={viewerRef}
                className="viewer"
                useAutoZoom={true}
                useWheelScroll={true}
                onScroll={(e) => {
                    horizontalGuidesRef.current!.scroll(e.scrollLeft);
                    horizontalGuidesRef.current!.scrollGuides(e.scrollTop);

                    verticalGuidesRef.current!.scroll(e.scrollTop);
                    verticalGuidesRef.current!.scrollGuides(e.scrollLeft);
                }}
                onPinch={(e) => {
                    const zoom = e.zoom;
                    horizontalGuidesRef.current!.zoomTo(e.zoomX,);
                    // verticalGuidesRef.current!.zoomTo(e.zoomY);
                    setHorizontalZoom(e.zoomX);
                }}
            >
                <div className="viewport">Viewport</div>
            </InfiniteViewer>
        </div>
    );
}
