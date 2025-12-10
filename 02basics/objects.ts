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

export {};
