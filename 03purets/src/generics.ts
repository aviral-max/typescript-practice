const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(value: any): any {
  return value;
}

function idenetityTwo<Type>(value: Type): Type {
  return value;
}

function identityThree<T>(value: T): T {
  return value;
}

idenetityTwo<string>("Aviral");
identityThree<number>(100);

interface Bottle {
  brand: string;
  type: number;
}

identityThree<Bottle>({ brand: "CocaCola", type: 1 });