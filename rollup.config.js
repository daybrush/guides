
import builder from "@daybrush/builder";
import preact from "rollup-plugin-preact";

const preactPlugin = preact({
    noPropTypes: true,
    usePreactX: true,
});

const external = {
    "@egjs/component": "@egjs/component",
    "@daybrush/utils": "@daybrush/utils",
    "@daybrush/drag": "@daybrush/drag",
    "framework-utils": "framework-utils",
    "@egjs/agent": "eg.Agent",
    "@egjs/children-differ": "eg.ChildrenDiffer",
    "preact": "preact",
    "preact/compat": "preact/compat",
    "preact-guides": "preact-guides",
    "preact-ruler": "preact-ruler",
};
export default builder([
    {
        name: "Guides",
        input: "src/index.umd.ts",
        output: "./dist/guides.js",
        plugins: [preactPlugin],
    },
    {
        name: "Guides",
        input: "src/index.umd.ts",
        output: "./dist/guides.min.js",
        plugins: [preactPlugin],
        uglify: true,
    },
    {
        input: "src/index.esm.ts",
        output: "./dist/guides.esm.js",
        exports: "named",
        format: "es",
        plugins: [preactPlugin],
        external,
    },
    {
        input: "src/index.umd.ts",
        output: "./dist/guides.cjs.js",
        exports: "default",
        format: "cjs",
        plugins: [preactPlugin],
        external,
    },
]);
