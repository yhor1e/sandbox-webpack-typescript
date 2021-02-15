function component() {
  const element = document.createElement('div');

  // String
  const helloWorld: string = 'Hello World';

  element.innerHTML = helloWorld;
  return element;
}

document.body.appendChild(component());

// Defining Types

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: 'Hayes',
  id: 0,
};

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user2: User = new UserAccount('Murphy', 1);
console.log('user1: ', user);
console.log('user2: ', user2);

// Composing Types
type MyBool = true | false | 'sss';
const a: MyBool = true;
const b: MyBool = 'sss';

function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return [obj];
    //          ^ = (parameter) obj: string
  } else {
    return obj;
  }
}

// Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;
//const object = backpack.get();
//backpack.add('dd');
//console.log('backpack ', object);

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { hex: '#187ABF' };
//logPoint(color);

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
