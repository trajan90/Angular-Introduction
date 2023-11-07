// Basic types

const ten: number = 10;
let username: string = "Traian"; // You can add type with |
let stringOrNumber: string | number = 10; // or '10'
let isAbove20: boolean = true;
let novalueundefined: undefined = undefined;
let novaluenull: null = null;
let anyvalue: any = 10;
let age: number = 20;
age = 10;

let numbers: number[] = [1, 2, 3, 4, 5];

let numbers2: Array<number | string> = [1, 2, 3, "a"]; // You can add only numbers and strings

let fn: () => void = () => {};
fn = () => {
  return "t";
};

// Nu putem atribui alt tip de valoare
// username = 10; // erorr of type
// numbers.push('abc') // eroare (pt ca trebuie sa fie numar)
function add2Numbers(a: number, b: number): number {
  return a + b;
}

const addedNumbers: number = add2Numbers(10, 10);

function logValue(): void {
  console.log("No value returned");
}

// More complex types

enum Colors {
  Rosu = "rosu",
  Galben = "galben",
  Albastru = "albastru",
}
// Alta valoare ne da eroare
const redBackground: Colors = Colors.Rosu;
console.log(redBackground);

enum CalendarMonths {
  jan = "Ianuarie",
  feb = "februarie",
}

logValue();

type MyFirstType = [string, number];

let tupleArr: MyFirstType = ["Traian", 10]; // se asteapta la formatul decalarat si respectarea ordinii

tupleArr.push("null"); // poti adauga doar cu null

console.log(tupleArr);

//type

type StringValue = string;
let lastName: StringValue = "ssda";

type NumberTypes = string | number;
let userAge: NumberTypes = 10;

type Person = {
  name: string;
};

type Human = Person | User; /// Mai multe type-uri combinate

type User = {
  username: String;
  age: number;
  getAge: () => number;
};

const userAlex: Human = {
  username: "Alex",
  age: 10,
  getAge() {
    return age;
  },
};

// Interfete
type Continent = "Europa" | "Asia" | "Africa" | "America";
interface Animal {
  gender?: string; //you can include or not include with '?'
  continent: "Europa" | "Asia" | "Africa" | "America";
  varsta: number;
  printDetails: () => void;
}

interface Fiinta {
  isInExistance: boolean;
}

const zebra: Animal = {
  gender: "M",
  continent: "Africa",
  varsta: 10,
  printDetails: function () {
    console.log(
      `Zebra este de pe continentul ${this.continent} si are farsta de ${this.varsta} ani`
    );
  },
};

class Feline implements Animal {
  tipDeFelina: "Leopard" | "Tigru" | "Leu" = "Leopard";
  gender: string;
  continent: Continent;
  varsta: number;
  constructor(gender: string, continent: Continent, varsta: number) {
    this.gender = gender;
    this.continent = continent;
    this.varsta = varsta;
  }
  printDetails() {}
}

function getPerson(): Person {
  const obj: Person = {} as Person;
  return obj;
}

const persoana: Person = {name: "Andrei"};

const personList: Person[] = [];
const personList2: Array<Person> = [];
personList.push({name: "Traian"});
