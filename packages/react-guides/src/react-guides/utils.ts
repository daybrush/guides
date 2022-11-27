import { prefixNames } from "framework-utils";

export function prefix(...classNames: string[]) {
    return prefixNames("scena-guides-", ...classNames);
}
