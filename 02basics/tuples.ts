// const user: string[] = ['Alice', 'Bob', 'Charlie'];

const user: [string, number, boolean] = ["Alice", 30, true];

user = ["Bob", 25, false]; // Valid assignment
// user = ['Charlie', '35', true]; // Error: Type 'string' is not assignable to type 'number'
// user = ['Dave', 40]; // Error: Source has 2 element(s) but target requires 3

type User = [number, string];

const newUser: User = [234, "Aviral"];

newUser[0] = 456; // Valid
newUser.push(true); // Valid, but not recommended as it breaks the tuple structure
