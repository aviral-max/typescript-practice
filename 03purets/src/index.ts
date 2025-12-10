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
  protected _courseCount = 1;
  readonly city: string = "New Delhi";
  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  //getters and setters in ts
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  //also, you cannot set return type of setter functions in ts
  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const aviral = new User("aviral@example.com", "Aviral");

class SubUser extends User {

  //by default variables are public in ts
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}
