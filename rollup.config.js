
import builder from "@daybrush/builder";
import compat from "rollup-plugin-react-compat";


const reactCompat = compat({
    useReactCompat: true,
    aliasModules: {
        "@scena/react-guides": "react-compat-guides",
    },
});
const resolveReactCompat = compat({
    useReactCompat: true,
    resolveCompat: true,
});

const external = {
    "react-simple-compat": "react-simple-compat",
    "react-compat-guides": "react-compat-guides",
    "@egjs/component": "@egjs/component",
    "@daybrush/utils": "@daybrush/utils",
    "@daybrush/drag": "@daybrush/drag",
    "framework-utils": "framework-utils",
    "@egjs/agent": "eg.Agent",
    "@egjs/children-differ": "eg.ChildrenDiffer",
};
export default builder([
    {
        name: "Guides",
        input: "src/index.umd.ts",
        output: "./dist/guides.js",
        plugins: [resolveReactCompat],

    },
    {
        name: "Guides",
        input: "src/index.umd.ts",
        output: "./dist/guides.min.js",
        plugins: [resolveReactCompat],
        uglify: true,
    },
    {
        input: "src/index.esm.ts",
        output: "./dist/guides.esm.js",
        exports: "named",
        format: "es",
        plugins: [reactCompat],
        external,
    },
    {
        input: "src/index.umd.ts",
        output: "./dist/guides.cjs.js",
        exports: "default",
        format: "cjs",
        plugins: [reactCompat],
        external,
    },
]);
