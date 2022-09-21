import Guides, * as others from "./index.esm";

for (const name in others) {
    (Guides as any)[name] = others[name];
}
declare const module: any;

module.exports = Guides;
export * from "./index.esm";
export default Guides;
