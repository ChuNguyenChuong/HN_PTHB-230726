// bai 1
function footToMeter(foot) {
  return foot * 0.305
}
let meter = footToMeter(10)

function metToFeet(meter) {
  return meter * 3.279
}

let foot = metToFeet(30)

// bai 2
let helloRa = () => {
  console.log('Xin chào Rikkei Academy');
}
// helloRa()

// bai 3
const square = (number) => {
  return number * number
}

// bai 4
const centuryFromYear = (year) => {
  const century = year / 100
  return Math.ceil(century)
}
let century = centuryFromYear(19)
// 19.65 => 20
// 8.06 => 9
// 0.65 => 1

// bai 5
const splitString = (string) => {
  let lengthString = string.length;
  if (lengthString < 15) {
    return string
  }
  const spliceStr = string.slice(0, 15)
  return spliceStr + "..."
}
// 'jhgjghjghghjghghjghjghjgjh'

const string = splitString('jhgjghjghg22')


// bai 6
function firstCharUpperCase(string) {
  let firstChar = string[0].toUpperCase();
  let speedString = string.slice(1).toLowerCase()

  // let result = ''
  // for (let i = 0; i < string.length; i++) {
  //   let char = string[i];
  //   if (i === 0) {
  //     result += char.toUpperCase()
  //   } else {
  //     result += char.toLowerCase()
  //   }
  // }
  // return result
  return firstChar + speedString;
}
const result = firstCharUpperCase('rIkKEi')

// bai 7
function findMax(arrayNumber) {
  let max = arrayNumber[0];
  for (let i = 0; i < arrayNumber.length; i++) {
    const number = arrayNumber[i];
    if (number > max) {
      max = number
    }
  }
  return max
}
let mexNumber = findMax([1, 6, 8, 4, 3, 5])


function laChanLe(number) {
  if (number % 2 === 0) {
    return `${number} la so chan`
  }
  return `${number} la so le`
}

function laSoNguyenTo(number) {
  let laSoNguyenTo = true
  if (number < 2) {
    return false
    return `${number} khong phai la so nguyen to`
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        laSoNguyenTo = false
        break
      }
    }
  }
  if (laSoNguyenTo) {
    return true
    return `${number} la so nguyen to`
  }
  return false
  return `${number} khong phai la so nguyen to`
}

function laSoHoanHao(number) {
  let uocCuaNumber = [];

  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      uocCuaNumber.push(i)
    }
  }
  let tongUoc = 0;

  for (let i = 0; i < uocCuaNumber.length; i++) {
    const uoc = uocCuaNumber[i];
    tongUoc += uoc
  }

  if (tongUoc === number) {
    return `${number} la so hoan hao`
  }
  return `${number} la so meo mo`
}

function main(number) {
  let checkChanLe = laChanLe(number)
  console.log("🚀 ~ file: app.js:111 ~ main ~ checkChanLe:", checkChanLe)
  let checkNguyenTo = laSoNguyenTo(number)
  console.log("🚀 ~ file: app.js:111 ~ main ~ checkNguyenTo:", checkNguyenTo)
  let checkHoanHao = laSoHoanHao(number)
  console.log("🚀 ~ file: app.js:136 ~ main ~ checkHoanHao:", checkHoanHao)
}
// main(28)


// bai 9

function trunBinhCongCuaMangSo(arrayNumber) {
  let tongCuaArray = 0
  for (let i = 0; i < arrayNumber.length; i++) {
    const number = arrayNumber[i];
    tongCuaArray += number
  }

  return tongCuaArray / arrayNumber.length
}

// console.log(trunBinhCongCuaMangSo([3, 9, 6]));
function logSoNguyenTo(number) {
  for (let i = 0; i < number; i++) {
    const checkNumber = laSoNguyenTo(i)
    if (checkNumber) {
      console.log(i);
    }
  }
}

logSoNguyenTo(11)


// bài tập về nhà :
let array = [3, 1, 6, 2, 9, 4, 8, 7]

// cho 1 mảng số ngẫu nhiên.
// viet ham có thể tái sử dụng trên nhiều mảng khác nhau
// sắp xếp mảng đó từ bé đến lớn // [1,2,3,4,6,7,8,9]
// sắp xếp mảng đố từ lơn đến bé // [9,8,7,6,4,3,2,1]
// khong su dung ham co san