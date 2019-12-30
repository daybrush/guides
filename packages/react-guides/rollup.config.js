import builder from "@daybrush/builder";

const defaultOptions = {
    tsconfig: "tsconfig.build.json",
    external: {
        "@daybrush/utils": "utils",
        "@daybrush/drag": "utils",
        "@egjs/axes": "eg.Axes",
        "react": "React",
        "keycon": "KeyController",
        "react-dom": "ReactDOM",
        "react-css-styled": "styled"
    },
};

export default builder([
    {
        ...defaultOptions,
        input: "src/react-guides/index.ts",
        output: "./dist/guides.esm.js",
        format: "es",
    },
    {
        ...defaultOptions,
        input: "src/react-guides/index.ts",
        output: "./dist/guides.cjs.js",
        format: "cjs",
    },
]);
