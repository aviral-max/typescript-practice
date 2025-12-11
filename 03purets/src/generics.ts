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

function getSearchProducts<T>(products: T[]): T {
  //do some database operations
  const myIndex = 3;
  if(products[myIndex] === undefined){
    throw new Error("Product not found at index " + myIndex);
  }
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 4;
  if(products[myIndex] === undefined){
    throw new Error("Product not found at index " + myIndex);
  }
  return products[myIndex];
};
