export function expect<T>(expected:T){
    return {
        toBe(result:T){
            if(result !== expected)
                throw new Error("NOK ${result} is not equal to ${expected}");
        }
    }
}

export async function test(description:string, callback:()=>void){
    try{
        await callback();
        console.log("OK! " + description);
    }
    catch(error)
    {
        console.log("NOK " + description);
        console.log(error);
    }
}

export const it = test; //Fisrt class function due to functions can be handle as variables.

export function describe(description:string, callback:()=>void){
    console.log(description);
    callback();
}