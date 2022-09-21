const path = require("path");
const { convertProperties } = require("@daybrush/release/angular");
const { PROPERTIES, EVENTS } = require("../packages/react-guides/dist/guides.cjs.js");

convertProperties(
    {
        ANGULAR_GUIDES_INPUTS: PROPERTIES,
        ANGULAR_GUIDES_OUTPUTS: EVENTS,
    },
    [
        path.resolve(__dirname, "../packages/ngx-guides/projects/ngx-guides/src/public-api.ts"),
    ],
);
