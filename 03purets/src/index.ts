//Classes in Typescript

class User {
  email: string;
  name: string;
  city: string = "";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const aviral = new User("aviral@example.com", "Aviral");
aviral.city = "New Delhi";
