function detectType(val: string | number) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }

  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide an ID");
    return;
  }

  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  // return account.isAdmin; // Error: Property 'isAdmin' does not exist on type 'User'.
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//instance of class Date (instanceof narrowing)
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// 👉 Type Predicate (User-defined type guard)
type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};
// This function tells TypeScript:
// “If isFish(pet) returns true, then pet is guaranteed to be a Fish.”
// It helps TypeScript narrow the type from Fish | Bird into Fish inside the if-block.
function isFish(pet: Fish | Bird): pet is Fish {
  // type predicate
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; // ts is still confused whether pet is Fish or Bird here but it should be Fish
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

// 👉 Discriminated Union setup:
// Each shape has a `kind` property with a unique literal value.
// This allows TypeScript to automatically narrow the type based on `shape.kind`.
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
//   return shape.side ** 2;
}

// 👉 Exhaustive type checking using `never`:
// The `default` case assigns `shape` to a variable of type `never`.
// If a new shape type is added and not handled above,
// TypeScript will give an error here, ensuring all cases are covered.
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.length * shape.width;
    default:
      // If all cases are handled, shape should never reach here.
      // If TypeScript errors, it means a new shape type was added but not handled.
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
