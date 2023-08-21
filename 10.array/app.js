// kiểu dũ liệu tham chiếu và tham trị

// Khai bao array
// const array = ["cnchuong", 18, "dog"]
// const newArrayNumber = [1999, 2000, 20001, 2002]
// const newArrayName = ["cnchuong", "ndchinh", "kasdkas"]
// const newArray = new Array()

// hanh dong voi array
//  length -            0           1         2
// const arrayName = ["cnchuong", "ndchinh", "kasdkas"]
//  ---------------- element

// console.log(arrayName[1]);
// console.log(arrayName[2]);
// console.log(arrayName.length);
//  sua 1 phan tu trong mang
// arrayName[2] = "nmquang"

//  them moi 1 element vao mang
// arrayName.push("ndhai") // them vao cuoi mang
// arrayName.unshift("dtdat") // them vao dau mang
// arrayName[arrayName.length] = "huy dang"
// arrayName[arrayName.length] = "yen"

// xoa 1 element trong mang
// arrayName.pop()
// arrayName.shift()

// arrayName.splice(2, 1)

// console.table(arrayName);


// let newArrayName = [18, 19, 20, 21]

// let array3 = arrayName.concat(newArrayName)
// console.log("🚀 ~ file: app.js:38 ~ array3:", array3)


// console.log('kiem tra gia trij co trong mang hay khong');
// console.log(numbers.includes(1));
// console.log('====================================');


// console.log('====================================');
// console.log(numbers.indexOf(2));
// console.log('====================================');

// console.log('====================================');
// console.log(numbers.join(";"));
// console.log('====================================');

// let numbersString = ["1", "2", "3", "99", "75", "26", "16", "86"]
// let nameArray = ["cnchuong", "ndhai", "chinh"]
// console.log('====================================');
// console.log(numbers.sort())
// console.log(nameArray.sort());
// console.log(numbersString.sort((a, b) => a - b));
// console.log(numbersString.sort((a, b) => b - a));
// console.log('====================================');

// let numbers = [1, 2, 3, 75, 99, 26, 16, 86] // 8 element
// //             0  1  2  3    4 ....
// // console.log(numbers[0]);
// // console.log(numbers[1]);


// const doubleNumber = numbers.find((element) => {
//   return element > 50
// })
// console.log(doubleNumber); // [2, 4, 6, 198, 150, 52, 32, 172]


// let findResult = numbers.find((item, index, array) => {
//   return item == 22
// })
// console.log("🚀 ~ file: app.js:72 ~ findResult ~ findResult:", findResult)

// let fillerItem = numbers.filter((item, index, array) => {
//   console.log(array)
//   return item < 50
// })
// console.log("🚀 ~ file: app.js:72 ~ fillerItem ~ fillerItem:", fillerItem)

// const newArrayNumber = numbers.map((item, index, array) => {
//   console.log(item, index, array);
//   return index
// })
// console.log(newArrayNumber);

// numbers.forEach((item, index, array) => {
//   console.log(item, index, numbers);
// })

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (const iterator of numbers) {
//   console.log(iterator);
// }

// for (const key in numbers) {
//   console.log(key);
//   let eelement = numbers[key]
//   console.log("🚀 ~ file: app.js:80 ~ eelement:", eelement)
// }

// let number = 245468 // prompt
// let numberString = number.toString()

// let listNumber = numberString.split("")
// let result = []

// for (let i = 0; i < listNumber.length; i++) {
//   let currentElement = listNumber[i];
//   let numberCurrent = parseInt(currentElement)
//   let nextElement = listNumber[i + 1]
//   let numberNext = parseInt(nextElement)

//   let checking = numberCurrent % 2 === 0 && numberNext % 2 === 0

//   result.push(numberCurrent)

//   if (checking) {
//     result.push("-")
//   }

// }

// console.log(result.join(""));


// [] => "" => join
// "" => []  => split



// for (let i = 0; i < strArray.length; i++) {
//   let item = strArray[i]
//   let lowerCaseChar = item.toLowerCase()
//   let isSameChar = lowerCaseChar === item

//   if (isSameChar) {
//     result = result + item.toUpperCase()
//   } else {
//     result = result + item.toLowerCase()
//   }
// }

// strArray.forEach(item => {
//   let lowerCaseChar = item.toLowerCase()
//   let isSameChar = lowerCaseChar === item

//   if (isSameChar) {
//     result = result + item.toUpperCase()
//   } else {
//     result = result + item.toLowerCase()
//   }
// })

let str = 'Keep Calm And Code On'
let strArray = str.split("")
console.log("🚀 ~ file: app.js:141 ~ strArray:", strArray)

let result = "";

// let res = ['k', 'E', 'E', "P", " ", "c", , , , , , , , , ,]

let temp = strArray.map((item, index) => { // 5
  // item : C
  let lowerCaseChar = item.toLowerCase() // c
  let isSameChar = lowerCaseChar === item  // false

  if (isSameChar) {
    return item.toUpperCase()
  } else {
    return item.toLowerCase()
  }
})

console.log(temp.join(''));

// console.log(result);