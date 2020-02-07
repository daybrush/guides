import Guides from "./Guides.svelte";
import { METHODS } from "@scena/guides";

export default /*#__PURE__*/ (() => {
    const prototype = Guides.prototype;

    METHODS.forEach(name => {
        prototype[name] = function (...args) {
            const self = this.getInstance();
            const result = self[name](...args);

            if (result === self) {
                return this;
            } else {
                return result;
            }
        };
    });
    return Guides;
})();
