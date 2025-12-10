//Classes in Typescript

// class User {
//   public email: string;
//   name: string;
//   private readonly city: string = "New Delhi";

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  readonly city: string = "New Delhi";
  constructor(public email: string, public name: string) {}
}

const aviral = new User("aviral@example.com", "Aviral");
