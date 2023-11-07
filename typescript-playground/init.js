"use strict";
// Basic types
const ten = 10;
let username = "Traian"; // You can add type with |
let stringOrNumber = 10; // or '10'
let isAbove20 = true;
let novalueundefined = undefined;
let novaluenull = null;
let anyvalue = 10;
let age = 20;
age = 10;
let numbers = [1, 2, 3, 4, 5];
let numbers2 = [1, 2, 3, "a"]; // You can add only numbers and strings
let fn = () => {};
fn = () => {
  return "t";
};
// Nu putem atribui alt tip de valoare
// username = 10; // erorr of type
// numbers.push('abc') // eroare (pt ca trebuie sa fie numar)
function add2Numbers(a, b) {
  return a + b;
}
const addedNumbers = add2Numbers(10, 10);
function logValue() {
  console.log("No value returned");
}
// More complex types
var Colors;
(function (Colors) {
  Colors["Rosu"] = "rosu";
  Colors["Galben"] = "galben";
  Colors["Albastru"] = "albastru";
})(Colors || (Colors = {}));

// Alta valoare ne da eroare
const redBackground = Colors.Rosu;
console.log(redBackground);
var CalendarMonths;
(function (CalendarMonths) {
  CalendarMonths["jan"] = "Ianuarie";
  CalendarMonths["feb"] = "februarie";
})(CalendarMonths || (CalendarMonths = {}));
logValue();
let tupleArr = ["Traian", 10]; // se asteapta la formatul decalarat si respectarea ordinii
tupleArr.push("null"); // poti adauga doar cu null
console.log(tupleArr);
