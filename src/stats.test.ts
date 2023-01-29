import {sum} from "./stats";
import {average} from "./stats";
import {expect, test} from "./testLib"

test("calculate the sum of all elements", ()=>{
    const result = sum([1,2,3]);
    const expected = 6;
    expect(result).toBe(expected);
});

test("calculate the average of all elements", ()=>{
    const result = average([1,2,3]);
    const expected = 2;
    expect(expected).toBe(result);
});



