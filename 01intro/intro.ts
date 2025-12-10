let user = { name: "Aviral", age: 21 };

console.log(user.name);
console.log(user.email);
console.log("Aviral");

/* intro.ts:4:18 - error TS2339: Property 'email' does not exist on type '{ name: string; age: number; }' 4 console.log(user.email);*/