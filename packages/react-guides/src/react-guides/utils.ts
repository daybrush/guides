import { prefixNames } from "framework-utils";
import { splitBracket, splitComma } from "@daybrush/utils";
import { mat4 } from "gl-matrix";

export function prefix(...classNames: string[]) {
    return prefixNames("scena-", ...classNames);
}
