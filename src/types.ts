import { GuideOptions, OnChangeGuides } from "@scena/react-guides/declaration/types";

export interface GuidesOptions extends GuideOptions {
    container?: HTMLElement;
}

export interface GuidesEvents {
    changeGuides: OnChangeGuides;
}

/**
 * @memberof Guides
 * @typedef GuidesOptions
 * @property {"horizontal" | "vertical"} [type] - guides and ruler shape, direction (default: "horizontal")
 * @property {number} [width] - Specify ruler's width (default: canvas.offsetWidth)
 * @property {number} [height] - Specify ruler's width (default: canvas.offsetWidth)
 * @property {number} [unit] - Numerical unit to display in one column (default: 50)
 * @property {"start" | "end"} [direction] - Where to display ruler values (default: end)
 * @property {object} [style] - guides' css style (default: width: 100%, height: 100%)
 * @property {object} [rulerStyle] - ruler's css style(default: width 100%, height: 100%)
 * @property {string} [backgroundColor] - ruler's background color (default: #333333)
 * @property {string} [lineColor] - ruler's line color (default: #777777)
 * @property {string} [textColor] - ruler's text color (default: #ffffff)
 * @property {string} [className] - guides' class name (default: "")
 * @property {number} [snapThreshold] - Interval to snap (default: 5)
 * @property {number[]} [snaps] - Positions to snap (default: [])
 * @property {boolean} [displayDragPos] - Whether to show the moving pos when dragging (default: false)
 * @property {function} [dragPosFormat] - Format of drag pos (default: v => v)
 */
