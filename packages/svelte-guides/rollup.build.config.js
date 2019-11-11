import buildHelper from "@daybrush/builder";
import svelte from 'rollup-plugin-svelte';
import { preprocess } from "@pyoner/svelte-ts-preprocess";

const defaultOptions = {
    tsconfig: "",
    input: './src/Guides.svelte',
    commonjs: true,
    external: {
        "svelte": "svelte",
    },
    plugins: [
        svelte({
            preprocess: preprocess(),
        }),
    ],
}
export default buildHelper([
    {
        ...defaultOptions,
        output: "dist/guides.cjs.js",
        format: "cjs",
    },
    {
        ...defaultOptions,
        output: "dist/guides.esm.js",
        format: "es",
    },
]);
