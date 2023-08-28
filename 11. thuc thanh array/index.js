
// bài 7
let sheeps = [5, 7, 300, 90, 24, 50, 75] // id 001
// 7.1
console.log("xin chào, đây là kích thước đàn cừu của tôi :", sheeps);

// 7.2 tìm cừu lơn nhất
let maxSheep = sheeps[0]
for (let i = 1; i < sheeps.length; i++) {
  const sheep = sheeps[i];
  if (sheep > maxSheep) {
    maxSheep = sheep
  }
}
console.log(`Con cừu lớn nhất của tôi có kích thước ${maxSheep}, hãy thiến nó.`);

return maxSheep

// 7.3 reset con cừu lớn nhất vè 8
const indexMaxSheep = sheeps.indexOf(maxSheep);
// sheeps[indexMaxSheep] = 8
let newSheeps = sheeps.map((sheep, index) => {
  if (index === indexMaxSheep) {
    return 8
  }
  else {
    return sheep
  }
})

// for thuong va forEach
// let newSheeps = [];
// sheeps.forEach((sheep, index) => {
//   if (index === indexMaxSheep) {
//     newSheeps.push(8)
//   } else {
//     newSheeps.push(sheep)
//   }
// })

// let newSheeps = []
// for (let i = 0; i < sheeps.length; i++) {
//   const element = sheeps[i];
//   if (indexMaxSheep === i) {
//     newSheeps.push(8)
//   } else {
//     newSheeps.push(element)
//   }
// }
console.log("sau khi thiến, đây là đàn cừu của tôi", newSheeps);

// 7.4 tăng kích thước đàn cừu lên 50kg

let sheepsAfterMonth = []
for (let i = 0; i < newSheeps.length; i++) {
  const sheep = newSheeps[i];
  let newSheep = sheep + 50;
  sheepsAfterMonth.push(newSheep)
}

console.log("Đã được 1 tháng trôi qua, bầy cừu của tôi đã lớn, đây là kích thước của nó :", sheepsAfterMonth);

// 7.5 tìm con cừu lớn nhất mà thiến nó
let maxSheep1 = sheeps[0]
for (let i = 1; i < sheepsAfterMonth.length; i++) {
  const sheep = sheepsAfterMonth[i];
  if (sheep > maxSheep1) {
    maxSheep1 = sheep
  }
}
console.log(`Con cừu lớn nhất của tôi có kích thước ${maxSheep1}, hãy thiến nó.`);

const indexMaxSheep1 = sheepsAfterMonth.indexOf(maxSheep1);
// sheeps[indexMaxSheep] = 8
let newSheeps1 = sheepsAfterMonth.map((sheep, index) => {
  if (index === indexMaxSheep1) {
    return 8
  }
  else {
    return sheep
  }
})

console.log("Sau khi thiến, đây là đàn cừu của tôi", newSheeps1);


for (let i = 0; i < 3; i++) {
  // tăng kích thước đàn cừu
  console.log(`MONTH ${i + 1}`);
  let sheepsAfterMonth = []
  for (let i = 0; i < newSheeps1.length; i++) {
    const sheep = newSheeps1[i];
    let newSheep = sheep + 50;
    sheepsAfterMonth.push(newSheep)
  }

  console.log("Đã được 1 tháng trôi qua, bầy cừu của tôi đã lớn, đây là kích thước của nó :", sheepsAfterMonth);

  // tìm ra con lơn nhất để thiến nó
  let maxSheep = sheeps[0]
  for (let i = 1; i < sheepsAfterMonth.length; i++) {
    const sheep = sheepsAfterMonth[i];
    if (sheep > maxSheep) {
      maxSheep = sheep
    }
  }
  console.log(`Con cừu lớn nhất của tôi có kích thước ${maxSheep}, hãy thiến nó.`)
  const indexMaxSheep = sheepsAfterMonth.indexOf(maxSheep);
  newSheeps1 = sheepsAfterMonth.map((sheep, index) => {
    if (indexMaxSheep === index) {
      return 8
    } else {
      return sheep
    }
  })
  console.log("sau khi cạo lông, đây là đàn cừu của tôi:", newSheeps1);
}

console.log("sau 3 tháng chăn cừu, đàn cừu của tôi có kích thước là :", newSheeps1);



let sum = 0;

newSheeps1.forEach((sheep) => {
  sum = sum + sheep
})

console.log("tổng cân nặng đàn cừu của tôi là: ", sum);
console.log(`tooi sẽ lấy ${sum} * 2$ = ${sum * 2}$`);


// bài 1
// let myColor = ["Red", "Green", "White", "Black"];
// let joinString = myColor.join(", ")
// console.log(joinString);
// console.log(myColor.join(" + "));


// bài 2
// let inputUser = "2,4,5, 7, 56,6"
// let arrayNumber = inputUser.split(",")
// console.log("🚀 ~ file: index.js:11 ~ arrayNumber:", arrayNumber)

// let result = []

// for (let i = 0; i < arrayNumber.length; i++) {
//   const currentElement = arrayNumber[i];
//   console.log("🚀 ~ file: index.js:14 ~ currentElement:", currentElement)
//   let nextElement = arrayNumber[i + 1]
//   console.log("🚀 ~ file: index.js:17 ~ nextElement:", nextElement)
//   let checkingCurrentNumber = parseInt(currentElement) % 2 === 0
//   console.log("🚀 ~ file: index.js:21 ~ checkingCurrentNumber:", checkingCurrentNumber)
//   let checkingNextNumber = parseInt(nextElement) % 2 === 0
//   console.log("🚀 ~ file: index.js:22 ~ checkingNextNumber:", checkingNextNumber)
//   if (checkingCurrentNumber && checkingNextNumber) {
//     result.push(currentElement)
//     result.push("-")
//   } else {
//     result.push(currentElement)
//   }
//   console.log("====================================");
// }


// console.log("🚀 ~ file: index.js:11 ~ arrayNumber:", result.join(""))


// bài 3

// let string = "The Quick Brown Fox"
// let result = ""
// for (let i = 0; i < string.length; i++) {
//   const element = string[i];
//   console.log("🚀 ~ file: index.js:44 ~ element:", element)
//   let compareWord = element.toUpperCase()
//   console.log("🚀 ~ file: index.js:46 ~ compareWord:", compareWord)
//   if (element === compareWord) {
//     console.log("chu hoa");
//     result += element.toLowerCase()
//   } else {
//     console.log("chu thuong");
//     result += element.toUpperCase()
//   }
// }
// console.log(result);

// bài 4
// let userInput = "1,3,5,7,9";
// // split tach dau phay va lay ra duoc 1 mang so
// const arrayNumber = userInput.split(",")

// let sum = 0;

// for (let i = 0; i < arrayNumber.length; i++) {
//   const element = arrayNumber[i];
//   sum = sum + Number(element)
// }

// console.log(sum);


// bài 5

// let userInput = "3,1,5,-1,-8, 99";
// let arrayString = userInput.split(",")
// let arrayNumber = []

// for (let index = 0; index < arrayString.length; index++) {
//   const element = arrayString[index];
//   const number = Number(element)
//   console.log("🚀 ~ file: index.js:81 ~ number:", number)
//   arrayNumber.push(number)
// }
// console.log("🚀 ~ file: index.js:75 ~ arrayNumber:", arrayNumber)
// let min = arrayNumber[0]
// console.log("🚀 ~ file: index.js:89 ~ min:", min)
// for (let i = 1; i < arrayNumber.length; i++) {
//   const element = arrayNumber[i];
//   console.log("🚀 ~ file: index.js:94 ~ element:", element)
//   if (element < min) {
//     min = element
//   }
// }

// console.log("gia tri nho nhat la : ", min);

// bài 6
// let numbers = [1, 55, 99, 73, 64, 28];
// let userInput = "2"
// const isHaveInNumbers = numbers.includes(Number(userInput))
// if (isHaveInNumbers) {
//   let index = numbers.indexOf(Number(userInput))
//   console.log("🚀nguoi dung nhap vao so", Number(userInput), " co trong mang o vi tri thu :", index)
//   let templateString = `nguoi dung nhap vao so ${Number(userInput)} co trong mang o vi tri thu : ${index}`
//   console.log(templateString)
// } else {
//   console.log("khong tim thay gia tri nguoi dung nhap vao!!!");
// }

