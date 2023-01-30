import {sum, average} from "../stats";

describe("Stats should", ()=>{
    it("calculate the sum of all elements of the array", ()=>{
        const result = sum([1,2,3]);
        const expected = 6;
        expect(result).toBe(expected);
    });
    
    it("calculate the average of all elements of the array", ()=>{
        const result = average([1,2,3]);
        const expected = 2;
        expect(expected).toBe(result);
    });
});