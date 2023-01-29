import {sum} from "./stats";
import {average} from "./stats";

let result, expected;
result = sum([1,2,3]);
expected = 6;
expect(expected).toBe(result);

result = average([1,2,3]);
expected = 2;
expect(expected).toBe(result);

function expect(expected){
    return {
        toBe(result){
            if(result === expected)
                console.log("OK ");
            else
                throw new Error("NOK ${result} is not equal to ${expected}");
        }
    }
}