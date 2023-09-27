// const btn = document.getElementById("btn");
// const btnGetLocal = document.getElementById("btn-getLocal");
// const btnD = document.getElementById("btn-D-local");
// const btnClear = document.getElementById("btnClear");

// btn.addEventListener("click", () => {
//   const obj = {
//     sayHi: "hi",
//   };

//   localStorage.setItem("user", JSON.stringify(obj));
// });

// btnGetLocal.addEventListener("click", () => {
//   const user = localStorage.getItem("user");
//   console.log("🚀 ~ file: app.js:10 ~ btnGetLocal.addEventListener ~ user:", JSON.parse(user));
// });

// btnD.addEventListener("click", () => {
//   localStorage.removeItem("user");
// });

// btnClear.addEventListener("click", () => {
//   localStorage.clear();
// });

// const addSession = document.getElementById("addSession");

// addSession.addEventListener("click", () => {
//   sessionStorage.setItem("user", "text");
// });

// console.log(new Date("2023/09/10"));

// if (1 < 5) {
//   const a = 10;
// }

// function sum() {}
// console.log(a);

// const sum = (a, b = 5, ...res) => {
//   console.log("🚀 ~ file: app.js:43 ~ sum ~ res:", res);
//   return a + b;
// };

// function sum1() {
//   console.log(arguments);
// }
// console.log(sum1(1, 2, 3, 4, 5, 6, 7));
// console.log(sum(5, 7, 15, 6, 9, 4));

// [1, 2,3, 4, 5];

// const a = [1, 2, 3];

// const [b, c, d] = a;
// console.log("🚀 ~ file: app.js:58 ~ b, c:", b, c, d);

// const newArray = [...a, 4, 5];
// console.log("🚀 ~ file: app.js:58 ~ newArray:", newArray);

// const obje = {
//   name: "text",
//   age: 1,
// };

// const name1 = "text";

// const person = {
//   woking: true,
//   name1,
// };

// const { woking } = person;
// console.log("🚀 ~ file: app.js:77 ~ woking:", woking);

// console.log("🚀 ~ file: app.js:69 ~ person:", person);

import person, { car, car1 } from "./person.js";
import { BLUE_PURPLE_1, guidGenerator } from "./helper.js";
console.log("🚀 ~ file: app.js:82 ~ BLUE_PURPLE_1:", BLUE_PURPLE_1);
console.log("🚀 ~ file: app.js:81 ~ car, car1 :", car, car1);
console.log("🚀 ~ file: app.js:82 ~ person:", person);

console.log(guidGenerator());
