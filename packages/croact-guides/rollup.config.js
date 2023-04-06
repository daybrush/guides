
import builder from "@daybrush/builder";
import reactCompat from "rollup-plugin-react-compat";

const external = {
    "croact": "croact",
    "croact-ruler": "croact-ruler",
    "croact-css-styled": "croact-css-styled",
    "@daybrush/utils": "utils",
    "css-styled": "css-styled",
    "framework-utils": "framework-utils",
    "gesto": "Gesto",
    "@egjs/agent": "eg.Agent",
    "@egjs/children-differ": "eg.ChildrenDiffer",
    "css-to-mat": "CssToMat",
};


const reactPlugin = reactCompat({
    useCroact: true,
    aliasModules: {
        "@scena/react-ruler": "croact-ruler",
        "react-css-styled": "croact-css-styled",
    }
})



export default builder([
    {
        sourcemap: false,
        input: "src/index.ts",
        output: "./dist/guides.esm.js",
        exports: "named",
        format: "es",
        plugins: [reactPlugin],
        external,
    },
    {
        sourcemap: false,
        input: "src/index.umd.ts",
        output: "./dist/guides.cjs.js",
        exports: "default",
        plugins: [reactPlugin],
        format: "cjs",
        external,
    },
]);
