"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello, World!";
greetings = 6; // Error: Type 'number' is not assignable to type 'string'
var myNum = 4;
myNum.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'
greetings.toLowerCase();
console.log(greetings);
