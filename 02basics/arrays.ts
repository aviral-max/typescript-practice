const superHeros: (string | number)[] = [];

superHeros.push("Spiderman");
superHeros.push(1);
superHeros.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

const heroPower: number[] = [];
//OR
const heroPower2: Array<number> = [];

type User = {
    name: string;
    isActive: boolean;
}

const allUsers: User[] = [];

const MLModels: number[][] = [
    [255, 255, 255],
    [0, 0, 0],
    [34, 34, 34]
];

allUsers.push({ name: "Bruce", isActive: true });
allUsers.push({ name: "Clark", isActive: false });