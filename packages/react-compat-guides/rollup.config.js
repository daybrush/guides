
import builder from "@daybrush/builder";
import reactCompat from "rollup-plugin-react-compat";

const external = {
    "react-simple-compat": "react-simple-compat",
    "react-compat-ruler": "react-compat-ruler",
    "react-compat-css-styled": "react-compat-css-styled",
    "@daybrush/utils": "utils",
    "css-styled": "css-styled",
    "framework-utils": "framework-utils",
    "gesto": "Gesto",
    "@egjs/agent": "eg.Agent",
    "@egjs/children-differ": "eg.ChildrenDiffer",
    "css-to-mat": "CssToMat",
};


const reactPlugin = reactCompat({
    useReactCompat: true,
    aliasModules: {
        "@scena/react-ruler": "react-compat-ruler",
        "react-css-styled": "react-compat-css-styled",
    }
})



export default builder([
    {
        sourcemap: false,
        input: "src/index.ts",
        output: "./dist/guides.esm.js",
        exports: "default",
        format: "es",
        plugins: [reactPlugin],
        external,
    },
    {
        sourcemap: false,
        input: "src/index.ts",
        output: "./dist/guides.cjs.js",
        exports: "default",
        plugins: [reactPlugin],
        format: "cjs",
        external,
    },
]);
