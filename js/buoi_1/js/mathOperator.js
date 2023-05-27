/** +, -, *, /
 *  %
 *  Toán tử tăng: ++
 *  Toán tử giảm: --
 */

// Khai báo biến
var num1 = 5;
var num2 = 10;

// Cộng hai số
console.log('Tổng hai số', num1 + num2);

// Trừ hai sô
console.log('Trừ hai số', num1 - num2);

// Nhân hai số
console.log('Nhân hai số', num1 * num2);

// Chia hai số
console.log('Chia hai số', num1 / num2);

// Chia lấy phần dư
console.log('Chia lấy số dư', 14 % 3);

// Toán tử tăng
var num3 = 0;
// num3 += 1;
num3++;

console.log(num3);


var num4 = 0;

/**Khi dùng chung với dấu gán (=)
 * Nếu dấu ++ nằm sau, gán trước tăng sau
 * Nếu dấu ++ nằm trước, tăng trước gán sau
 */

// var num5 = num4++;
// console.log(num5);

var num5 = ++num4;
console.log(num5);
