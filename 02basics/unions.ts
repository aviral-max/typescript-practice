let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let aviral: User | Admin = { name: "Aviral", id: 3004 };

aviral = { username: "aviral567", id: 4005 };

function getDbId(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    } 
    
}

getDbId(3);
getDbId("4");

//array

const data: (number | string)[] = [1, "two", 3, "four"];

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";