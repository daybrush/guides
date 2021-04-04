
import builder from "@daybrush/builder";
import vuePlugin from "rollup-plugin-vue";

export default builder([
    {
        input: "src/components/index.ts",
        output: "./dist/guides.esm.js",
        exports: "named",
        format: "es",
        plugins: [
            vuePlugin(),
        ],
    },
    {
        input: "src/components/index.ts",
        output: "./dist/guides.cjs.js",
        exports: "default",
        format: "cjs",
        plugins: [
            vuePlugin(),
        ],
    },
]);
