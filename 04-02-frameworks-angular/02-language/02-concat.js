// 2. Concat

let a = ["uno", "dos"];
let b = ["tres", "cuatro"];

let c = ["cinco", "seis"];

const concat = (a, ...b) => {
    return (b.length >= 1) ? [...a, ...concat(...b)] : a
};

console.log(concat(a, b));
console.log(concat(a, b, c));