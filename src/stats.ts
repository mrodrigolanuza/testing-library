export function sum(numbers:number[]){
    return numbers.reduce((previous, next)=> previous + next);
}

export function average(numbers:number[]){
    return sum(numbers) / numbers.length;
}