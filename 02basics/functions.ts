function addTwo(num: number) {
  //   num.toUpperCase(); // Error: 'toUpperCase' does not exist on type 'number'
  //   return num + 2;
  return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(3); // Returns 5
getUpper("aviral");
signUpUser("aviral", "aviral@example.com", true);
loginUser("a", "a@a.com");

// function getValue(myVal: number) {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map((hero) => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
export {};
