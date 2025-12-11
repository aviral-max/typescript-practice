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
