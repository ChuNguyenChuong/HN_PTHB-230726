
// // cú pháp khai bao Funtion
// function sum(a, b) {
//   console.log(a + b);
//   return a + b;
// }

// // thực thi hàm
// const value = sum(10, 20, 15)
// sum(10, 340, 15)

// const doubleNumber = function (a) {
//   return a * 2
// }
// const value1 = doubleNumber(10)
// console.log(value1);


// (function running() {
//   console.log("dsadasd");
// })()


// const woking = (a, b) => {
//   return a + b
// }

// console.log(woking(1, 2));



// console.log(1, 2, 4, 5, 6, 6, 6, 6, 6, 6,);


// function muntiple(a, b) {
//   console.log(arguments);
// }
// muntiple(1, 2, 4, 5, 6, 7, 8, 9, 10, 11)


// const sum2 = (...resParams) => {
//   console.log("🚀 ~ file: app.js:42 ~ sum2 ~ resParams:", resParams)

// }


// const sum3 = function () {
//   console.log(arguments);
//   let a = 10

//   function logA() {
//     console.log(a);
//     const b = 15
//   }
//   console.log(b);
//   logA()

// }

// sum2(1, 0, 2, 3, 5, 5, 4, 8, 9, 6)
// sum3(1, 5, 6, 8, 2, 8)


// const sum = (callBack, a, b) => {
//   // logic

//   callBack(a, b)
// }

// const sum1 = function (a, b) {
//   console.log(a + b);
// }

// sum(sum1, 10, 20)



function isPrime(x) {
  let flag = true
  if (x < 2) {
    return false
  } else {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        flag = false;
        break;
      }
    }
  }
  return flag
}


let arrayPrime = []

for (let i = 0; i < 1000; i++) {
  const checking = isPrime(i)
  if (checking) {
    console.log(`${i} la so nguyen to`);
    arrayPrime.push(i)
  } else {
    console.log(`${i} khong phai so nguyen to`);
  }
}

console.log(arrayPrime);