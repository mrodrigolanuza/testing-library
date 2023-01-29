import {sum} from "./stats";
import {average} from "./stats";
import {expect, test} from "./testLib";
import * as statsAsync from "./statsAsync";

test("calculate the sum of all elements of the array", ()=>{
    const result = sum([1,2,3]);
    const expected = 6;
    expect(result).toBe(expected);
});

test("calculate the average of all elements of the array", ()=>{
    const result = average([1,2,3]);
    const expected = 2;
    expect(expected).toBe(result);
});

test("calculate the sum of all elements of the array (async)", async ()=>{
    const result = await statsAsync.sum([1,2,3]);
    const expected = 6;
    expect(expected).toBe(result);
});

test("calculate the average of all elements of the array (async)", async ()=>{
    const result = await statsAsync.average([1,2,3]);
    const expected = 2;
    expect(expected).toBe(result);
});

