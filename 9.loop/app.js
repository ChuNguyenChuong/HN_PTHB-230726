
// if, else if , else
//  truthy = falsy , true  = false
// falsy : 0, false, -0 "" null undefined  === false

// const zezo = undefined

// if (5 < 2) {
//   console.log("1 < 2");

// }
// if (5 < 3) {
//   console.log("1 < 3");
// }
// else if (6 < 3) {
//   console.log("1 < 3");
// }
// else if (1 < 4) {
//   console.log("1 < 4");
// }
// else if (6 < 5) {
//   console.log("1 < 5");
// }
// else {
//   console.log('====================================');
//   console.log("else statemanet");
//   console.log('====================================');
// }


// switch

// const inputUser = prompt("moi ban chon so tu 1 - 3")
// switch (inputUser) {
//   case "1":
//     console.log("ban vua nhap so 1");
//     console.log("ban vua nhap so 1");
//     console.log("ban vua nhap so 1");
//     break;
//   case "2":
//     console.log("ban vua nhap so 2");
//     break;
//   case "3":
//     console.log("ban vua nhap so 3");
//     break;
//   default:
//     console.log("vui long nhap so tu 1-3");
//     break;
// }



// i = 0
// i = 1
// i = 2

//  for : biến chạy, diều kiện chạy vòng lặp, bước nhảy vòng lặp.
// lap voi so lan lap da biet trước

// for (let i = 9; i > 0; i--) {
//   if (i === 3 && ) {
//     continue;
//   }
//   console.log("anh xin loi lan", i);
// }

// lap qua với so an lap khong biet trước, hoặc đã biết trước số lân lặp


// let i = 0
// let isRunning = true

// while (false) {
//   console.log("anh xin loi ", i);
//   i++
//   if (i > 10) {
//     isRunning = false
//   }
// }

// debugger;
// do {
//   console.log("anh xin loi ", i);
//   i++
//   if (i > 10) {
//     isRunning = false
//   }

// } while (false);

// Ninh
// let year = prompt("Nhập vào số năm ")
// if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//   console.log("Đây là năm nhuận", year);
// }
// else {
//   console.log("Không phải năm nhuận", year);
// }



if (1 < 2) {
  console.log("1 < 2");
}
else {
  console.log("1 > 2");
}

1 < 2 ? console.log("1 < 2") : console.log("1 > 2");


let year = 12;

// if (userInput % 4 === 0) {
//   if (userInput % 100 !== 0) {
//     console.log("nam nhuan : ", userInput);
//   } else {
//     if (userInput % 400 !== 0) {
//       console.log("khong phai nam nhuan :", userInput);
//     } else {
//       console.log("nam nhuan : ", userInput);
//     }
//   }

// } else {
//   console.log("khong phai nam nhuan :", userInput);
// }


// chinh
// let year = parseInt(prompt("Nhập vào năm cần tính"));
// if (year % 4 == 0 && year % 100 != 0) {
//   document.write("Năm ", year, " là năm nhuận ");
// } else if (year % 100 == 0 && year % 400 != 0) {
//   document.write("Năm ", year, " không phải năm nhuận")
// } else if (year % 100 == 0 && year % 400 == 0) {
//   document.write("Năm ", year, " là năm nhuận")
// } else {
//   document.write("Năm ", year, " không phải năm nhuận")
// }

