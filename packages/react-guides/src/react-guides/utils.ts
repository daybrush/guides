import { prefixNames } from "framework-utils";
import { splitBracket, splitComma } from "@daybrush/utils";
import { mat4 } from "gl-matrix";

export function prefix(...classNames: string[]) {
    return prefixNames("scena-", ...classNames);
}

export function getMatrix(el: HTMLElement) {
    let target: HTMLElement | null = el;
    const matrix = mat4.create();


    while (target) {
        const transform = getComputedStyle(target).transform!;

        target = target.parentElement;

        if (transform.indexOf("matrix") !== 0) {
            continue;
        }
        const { prefix: name, value } = splitBracket(transform);

        let nums = splitComma(value!).map(v => parseFloat(v));
        if (name === "matrix") {
            nums = [
                nums[0], nums[1], 0, 0,
                nums[2], nums[3], 0, 0,
                0, 0, 1, 0,
                nums[4], nums[5], 0, 1,
            ];
        }
        mat4.multiply(matrix, nums as mat4, matrix);
    }
    mat4.invert(matrix, matrix);

    matrix[12] = 0;
    matrix[13] = 0;
    matrix[14] = 0;

    return matrix;
}
