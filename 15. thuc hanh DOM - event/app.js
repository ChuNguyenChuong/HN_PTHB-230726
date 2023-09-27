// bài 1
// muốn thực hiện 1 action nào đó thì phải lấy được phần tử đó ra => trường hợp này là btn liftoffButton
// lay ra thẻ mục tiếu thêm action
// thêm cho btn liftoffButton 1 sự kiện click
// trong sự kiện click
// lấy ra class cần thay đổi. lấy ra thẻ theo class có sẵn cần thay đổi nội dung
// thay đổi nội dung

// let liftoffButton = document.querySelector("#liftoffButton")
// liftoffButton.addEventListener("click", ()=> {
//   const exercise1 = document.querySelector(".exercise-1")
//   exercise1.innerText = 'Houston, chúng ta đã cất cánh!'
// });

// bài 2 => mouseover
// lấy ra thẻ cần thêm sự kiện
// thêm sự kiện mouseover
// thực hiện thay đổi màu của btn

// let abortMission = document.getElementById("abortMission")
// abortMission.addEventListener("mouseover", ()=> {
//   abortMission.style.backgroundColor = "red"
// })
// abortMission.addEventListener("mouseout", () => {
//   abortMission.style.backgroundColor = "rgb(139, 220, 139)"
// })

// ==================================

// selector :
// getElementsByTagName, getElementById,
// getElementsByClassName, querySelector ,querySelectorAll

// const div = document.getElementsByTagName("div"); // array element selected
// console.log("🚀 ~ file: app.js:34 ~ div:", div);

// const sayHi = document.getElementById("sayHi"); // 1 element
// sayHi.innerText = "hello world!!!";
// console.log("🚀 ~ file: app.js:38 ~ sayHi:", sayHi);
// innerText
// innerHTML
// console.log(sayHi.attributes);

// sayHi.style.backgroundColor = "green";

// sayHi.setAttribute("name", "hi");

// sayHi.classList.add("green");
// sayHi.classList.remove("border");
// sayHi.classList.toggle("border");

// sayHi.innerHTML = "<h1>hello world</h1>";

// console.log(sayHi.innerText);
// sayHi.innerText = "hello world";

// const helloWorld = document.getElementsByClassName("helloWorld");
// array element selected
// console.log("🚀 ~ file: app.js:42 ~ helloWorld:", helloWorld);
// helloWorld[0].innerText = "hello world!!!";

// for (let i = 0; i < div.length; i++) {
//   const element = div[i];
//   element.innerText = "hello RA !!";
// }

// const query = document.querySelector(".helloWorld"); // 1 element
// console.log("🚀 ~ file: app.js:52 ~ query:", query);

// const queryAll = document.querySelectorAll(".helloWorld");
// console.log("🚀 ~ file: app.js:55 ~ queryAll:", queryAll);

//  createElement - C : createElement
//  selector - R
//  gán giá trị mới
//  removeChild - D
//  appendChild : thêm mới 1 thẻ mới tạo ra vào HTMl file

// const workingList = document.createElement("ul");
// console.log("🚀 ~ file: app.js:79 ~ workingList:", workingList);
// const liItem = document.createElement("li");
// liItem.innerText = "make dinner";

// workingList.appendChild(liItem);

// sayHi.appendChild(workingList);

// const testElement = document.getElementById("test");
// sayHi.removeChild(testElement);

// sayHi.replaceChild(workingList, testElement);

// event

// document.addEventListener("keypress", (e) => {
//   console.log("====================================");
//   console.log(e.key);
//   console.log("====================================");
// });

const sayHi = document.getElementById("sayHi");

// sayHi.addEventListener("mousedown", (e) => {
//   sayHi.innerText = "hello world";
// });

sayHi.addEventListener("dblclick", (e) => {
  sayHi.innerText = "hello world";
});
