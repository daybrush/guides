import builder from "@daybrush/builder";
import cssbundle from "rollup-plugin-css-bundle";
import compat from "rollup-plugin-react-compat";


const resolveReactCompat = compat({
    useReactCompat: true,
    resolveCompat: true,
});


export default builder([
    {
        input: "demo/src/index.ts",
        output: "./demo/dist/index.js",
        format: "iife",
        exports: "named",
        plugins: [cssbundle({output: "./demo/dist/index.css"}), resolveReactCompat],
        resolve: true,
        // uglify: true,
    },
]);
