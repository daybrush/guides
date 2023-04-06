
import builder from "@daybrush/builder";
import compat from "rollup-plugin-react-compat";


const reactCompat = compat({
    useCroact: true,
    aliasModules: {
        "@scena/react-guides": "croact-guides",
    },
});
const resolveReactCompat = compat({
    useCroact: true,
    resolveCompat: true,
});

const external = {
    "croact": "croact",
    "croact-guides": "croact-guides",
    "@egjs/component": "@egjs/component",
    "@daybrush/utils": "@daybrush/utils",
    "gesto": "gesto",
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
        input: "src/index.cjs.ts",
        output: "./dist/guides.cjs.js",
        exports: "named",
        format: "cjs",
        plugins: [reactCompat],
        external,
    },
]);
