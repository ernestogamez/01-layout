// 3. Clone Merge

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

// Clone

function clone(source) {
    return {...source};
}

console.log(clone(a));

// Merge

function merge(source, target) {
    return {...source, ...target};
}

console.log(merge(a, b));
