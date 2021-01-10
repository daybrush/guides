import builder from "@daybrush/builder";

const defaultOptions = {
    tsconfig: "tsconfig.build.json",
    external: {
        "@daybrush/utils": "utils",
        "gesto": "Gesto",
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
        input: "src/react-guides/index.esm.ts",
        output: "./dist/guides.esm.js",
        format: "es",
        exports: "named",
    },
    {
        ...defaultOptions,
        input: "src/react-guides/index.umd.ts",
        output: "./dist/guides.cjs.js",
        format: "cjs",
        exports: "default",
    },
]);
