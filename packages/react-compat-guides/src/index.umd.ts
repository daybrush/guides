import Guides, * as others from "./index";

for (const name in others) {
    (Guides as any)[name] = (others as any)[name];
}

export default Guides;
