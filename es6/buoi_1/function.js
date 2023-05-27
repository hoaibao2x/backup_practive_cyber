/** FUNCTION */
//? ES 5

// Declare function => Bị hoisting
sum();
function sum() {
    console.log(1 + 3);
}
sum();

// Express function => Ngăn hoisting
// sum1(); => is not function

var sum1 = function() {
    console.log(8 + 9);
}
sum1();

// Muốn dùng kiểu expression thì luôn phải khai báo rồi mới call hàm
function sum2() {
    sum1();
}
sum2();



/**Arrow Function */
let sum3 = ()=>{
    console.log(2 + 3);
}
sum3();

//? Các cách rút gọn hàm

let showInfo = (name)=>{
    return `Hello ${name}`;
}

// Level 1 (Nếu chỉ có 1 tham số => bỏ dấu ())
let showInfo2 = name => {
    return `Hello ${name}`;
}

// Level 3: (Nếu chỉ có 1 dòng code duy nhất là lệnh return => bỏ dấu {}, nếu có return => bỏ từ return)
let showInfo3 = name => `Hello ${name}`;
let showInfo4 = name => console.log("1 dòng code");

