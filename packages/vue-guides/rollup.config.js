
import builder from "@daybrush/builder";
import preact from "rollup-plugin-preact";

export default builder([
    {
        input: "src/components/Guides.ts",
        output: "./dist/guides.esm.js",
        exports: "named",
        format: "es",
        plugins: [],
    },
    {
        input: "src/components/Guides.ts",
        output: "./dist/guides.cjs.js",
        exports: "default",
        format: "cjs",
        plugins: [],
    },
]);
