// console.log('====================================');
// console.log("DOM + EVENTs");
// console.log('====================================');


// console.log('selector');

// const divId = document.getElementById("divId")
// console.log("🚀 ~ file: app.js:9 ~ divId:", divId)

// const classDiv = document.getElementsByClassName('classDiv')
// console.log("🚀 ~ file: app.js:14 ~ classDiv:", classDiv)

// let divTag = document.getElementsByTagName("div")
// console.log("🚀 ~ file: app.js:17 ~ divTag:", divTag)

// const queryDivId = document.querySelector("#divId")
// console.log("🚀 ~ file: app.js:21 ~ queryDivId:", queryDivId)

// const queryDivClass = document.querySelectorAll(".classDiv")
// console.log("🚀 ~ file: app.js:21 ~ queryDivClass:", queryDivClass)

// // queryDivId.innerHTML = "<p>cnchuong</p>"

// // queryDivId.innerText = "<h1>cnchuong</h1>"

// console.log(queryDivId.attributes);

// queryDivId.setAttribute("type", "text")

// // console.log(queryDivId);

// console.log();

// // queryDivId.style.backgroundColor = "black"


// const h1Ele = document.createElement("h1")
// h1Ele.innerText = "new h1"
// console.log("🚀 ~ file: app.js:39 ~ h1Ele:", h1Ele)

// queryDivId.appendChild(h1Ele)

// // divId.removeChild(h1Ele)

// document.write("document")


// const p = document.createElement("p")
// p.innerText = "random text"

// const idChild = document.getElementById("idChild")

// queryDivId.replaceChild(p, idChild)

// // document.title = "new title"

// console.log(document.title);
// console.log(document.URL);
// console.log(document.body);
// console.log(document.links);
// console.log(document.images);


// const test = document.querySelector(".test")
// console.log("🚀 ~ file: app.js:66 ~ test:", test)
// test.id = "test"

// console.log(test.classList);

// test.classList.add("bg-black")

// test.classList.remove("border")

// test.classList.toggle("active")

// console.log(test.classList.value);

// on Click
// const btn = document.getElementById("btn")
// cach 1
// function clickShowPass(e) {
//   console.log(e.target.textContent);
//   console.log(e.target.innerHTML);
//   e.target.innerHTML = "hidden pass"
// }
// btn.addEventListener("click", (e) => {
//   console.log(e);
// })

// cach 2
// btn.onclick = () => {
//   alert("click btn ")
// }


// onChange
// const input = document.getElementById("input")
// console.log("🚀 ~ file: app.js:103 ~ input:", input)

// input.addEventListener("change", (e) => {
//   console.log(e.target.value);
// })
// // keydown, keyup, keypress
// input.addEventListener("keydown", (e) => {
//   console.log(e.target.value);
// })


const btnTogglePass = document.getElementById("btn")

let hienThiPass = false;

btnTogglePass.addEventListener("click", (e) => {
  const input = document.getElementById("input")
  if (hienThiPass) {
    input.setAttribute("type", "password")
    hienThiPass = false
  } else {
    input.setAttribute("type", "text")
    hienThiPass = true
  }

  console.log(e.key);
})

// btnTogglePass.addEventListener("dblclick", (e) => {
//   alert("song cham thoi!")
// })

// btnTogglePass.addEventListener("mousemove", (e) => {
//   console.log("mouse move");
// })

// btnTogglePass.addEventListener("mouseout", (e) => {
//   console.log("mouse out");
// })

// btnTogglePass.addEventListener("mouseover", (e) => {
//   console.log("mouse over");
// })

// btnTogglePass.addEventListener("mousedown", (e) => {
//   console.log("mouse down");
// })

// btnTogglePass.addEventListener("mouseup", (e) => {
//   console.log("mouse up");
// })

document.addEventListener("resize", () => {
  console.log(window.innerWidth);
})

// tạo 1 đồng hồ điện tử
// sau 1s thì log ra giá trị mới nhất


let id = setInterval(() => {
  console.log("sau 1 s");
}, 1000)

clearInterval(id)

const date = new Date()
console.log("🚀 ~ file: app.js:166 ~ date:", date.getHours())
console.log("🚀 ~ file: app.js:166 ~ date:", date.getMinutes())
console.log("🚀 ~ file: app.js:166 ~ date:", date.getSeconds())

// let id = setTimeout(() => {
//   console.log("sau 1s");
// }, 5000)

// clearTimeout(id)