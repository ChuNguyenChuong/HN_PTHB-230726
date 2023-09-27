// Object
// .innerText
// .innerHTML
//

// {} , new Object(), class

const car = {
  color: "red",
  isRunning: false,
  stepNumber: [1, 2, 3, 0],
  running: function () {
    console.log(this);
  },
  stop: () => {
    console.log(this);
  },
  "older-year": 3,
};

car["older-year"];

// const color = [{} , true]
const bike = new Object();
console.log("🚀 ~ file: app.js:17 ~ bike:", bike);

car.running();
car.stop();

class Person {
  constructor(tall) {
    this.tall = tall;
  }
  Running() {
    console.log(this.tall);
  }
}

const person1 = new Person(170);

console.log("🚀 ~ file: app.js:34 ~ person1:", person1);
person1.Running();

// "id" - id1
let obj1 = {
  name: "cnchuong",
};
// "id" - id2
const obj2 = {
  name: "cnchuong",
};

const obj3 = obj1;

obj1.name = "dbben"; // update property
obj1.age = 18;

delete obj1.age;

console.log(obj1, obj3);

const addBtn = document.getElementById("add");
const input = document.getElementById("input");

const todoList = {
  value: [
    {
      title: "adsadas",
      id: 0,
      isDone: false,
    },
  ],
  get: function () {
    return this.value;
  },
  add: function () {
    // // laay ra the input
    // // tao ra the li
    // const li = document.createElement("li");
    // // them gia tri cua input lam noi dung cua the li
    // li.innerText = input.value;
    // // tap ra the btn
    // const button = document.createElement("button");
    // // them noi dung cho the
    // button.textContent = "update";
    // button.addEventListener("click", () => {
    //   li.remove();
    // });
    // // them the nay lam the con cua li
    // li.appendChild(button);
    // // them the li vao lam the con cua ul
    // ul.appendChild(li);
    // const task = {
    //   title: input.value,
    //   id: this.value.length,
    // };
    // this.value = this.value.push(task);
  },
  update: function () {},
  delete: function () {},
};
