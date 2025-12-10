const User = {
  name: "Aviral",
  email: "aviral@example.com",
  isActive: true,
};

function createUser({
  name: string,
  isPaid: boolean,
}: {
  name: string;
  isPaid: boolean;
}) {}

let newUser = { name: "aviral", isPaid: false, email: "h@h.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

//Types and Interfaces
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser1(user: User): User {
  return { name: user.name, email: user.email, isActive: user.isActive };
}

const finalUser = createUser1({
  name: "Aviral",
  email: "aviral@example.com",
  isActive: true,
});
console.log("finalUser val is: ", finalUser);

type User2 = {
  readonly _id: string; // readonly property
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // optional property
};

let myUser: User2 = {
    _id: "12345",
    name: "Aviral",
    email: "aviral@example.com",
    isActive: true
}

type CardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = CardNumber & cardDate & {
    cvv: number;
}

myUser.email = "h@gmail.com";
// myUser._id = "67890"; // Error: Cannot assign to '_id' because it is a read-only property.
export {};
