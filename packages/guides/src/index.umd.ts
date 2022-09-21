import Guides, * as others from "./index.esm";

for (const name in others) {
    (Guides as any)[name] = others[name];
}

export default Guides;
