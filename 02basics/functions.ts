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

export {};
