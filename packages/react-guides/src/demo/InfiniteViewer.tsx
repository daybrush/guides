import React from "react";
import Guides from "../react-guides";
import InfiniteViewer from "react-infinite-viewer";

import "./InfiniteViewer.css";

export default function App() {
    const [zoom, setZoom] = React.useState(1);
    const unit = Math.round(Math.floor(1 / zoom) * 50) || 50;
    const viewerRef = React.useRef<InfiniteViewer>(null);
    const horizontalGuidesRef = React.useRef<Guides>(null);
    const verticalGuidesRef = React.useRef<Guides>(null);

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
                    zoom={zoom}
                    unit={unit}
                />
            </div>
            <div className="guides vertical">
                <Guides
                    ref={verticalGuidesRef}
                    type="vertical"
                    // useResizeObserver={true}
                    displayDragPos={true}
                    displayGuidePos={true}
                    zoom={zoom}
                    unit={unit}
                    onChangeGuides={({ guides }) => {
                        console.log("vertical", guides);
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
                    horizontalGuidesRef.current!.zoomTo(zoom);
                    verticalGuidesRef.current!.zoomTo(zoom);
                    setZoom(e.zoom);
                }}
            >
                <div className="viewport">Viewport</div>
            </InfiniteViewer>
        </div>
    );
}
