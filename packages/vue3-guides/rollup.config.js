const buildHelper = require("@daybrush/builder");
const vuePlugin = require("rollup-plugin-vue");

const defaultOptions = {
    sourcemap: true,
    input: "./src/index.ts",
    exports: "named",
    plugins: [
        vuePlugin(),
    ],
    external: {
        "vue": "Vue",
    },
};
export default buildHelper([
    {
        ...defaultOptions,
        format: "es",
        output: "./dist/guides.esm.js",
    },
    {
        ...defaultOptions,
        format: "cjs",
        // input: "./src/index.umd.ts",
        exports: "default",
        output: "./dist/guides.cjs.js",
    },
]);
