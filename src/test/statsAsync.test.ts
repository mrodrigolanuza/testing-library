import * as statsAsync from "../statsAsync";

describe("Stats async should", ()=>{
    it("calculate the sum of all elements of the array (async)", async ()=>{
        const result = await statsAsync.sum([1,2,3]);
        const expected = 6;
        expect(expected).toBe(result);
    });
    
    it("calculate the average of all elements of the array (async)", async ()=>{
        const result = await statsAsync.average([1,2,3]);
        const expected = 2;
        expect(expected).toBe(result);
    });
});

