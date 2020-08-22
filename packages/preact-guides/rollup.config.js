import builder from "@daybrush/builder";
const preact = require("rollup-plugin-preact");


const defaultOptions = {
    tsconfig: "tsconfig.build.json",
    external: {
        "@daybrush/utils": "utils",
        "@daybrush/drag": "Dragger",
        "preact": "Preact",
        "preact/compat": "preact/compat",
        "preact-compat": "preact-compat",
        "preact-css-styled": "preact-css-styled",
        "preact-ruler": "preact-ruler",
        "framework-utils": "framework-utils",
        "@egjs/agent": "eg.Agent",
        "@egjs/children-differ": "eg.ChildrenDiffer",
        "css-to-mat": "CssToMat",
    },
    exports: "named",
    plugins: [
        preact({
            noPropTypes: false,
            noEnv: false,
            noReactIs: false,
            usePreactX: true,
            aliasModules: {
                "react-css-styled": "preact-css-styled",
                "@scena/react-ruler": "preact-ruler",
            },
        }),
    ],
    sourcemap: false,
};

export default builder([
    {
        ...defaultOptions,
        input: "src/preact-guides/index.esm.ts",
        output: "./dist/guides.esm.js",
        format: "es",
    },
    {
        ...defaultOptions,
        input: "src/preact-guides/index.umd.ts",
        output: "./dist/guides.cjs.js",
        format: "cjs",
        exports: "default",
    },
]);
