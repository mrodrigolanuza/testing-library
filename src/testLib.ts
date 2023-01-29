export function expect<T>(expected:T){
    return {
        toBe(result:T){
            if(result !== expected)
                throw new Error("NOK ${result} is not equal to ${expected}");
        }
    }
}

export function test(description:string, callback:()=>void){
    try{
        callback();
        console.log("OK! " + description);
    }
    catch(error)
    {
        console.log("NOK " + description);
        console.log(error);
    }
}