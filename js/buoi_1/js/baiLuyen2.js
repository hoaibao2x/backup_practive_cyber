/** 
 *  Khối 1: Input 1 số nguyên dương có ba chữ số
 *  VD: 586, 219, ...
 * 
 * 
 *  Khối 2
 *  B1: Tạo biến
 *  number (chứa số có ba chữ số)
 *  soHangTram, soHangChuc, soDonVi
 * 
 *  B2: Lập công thức tính toán
 *  number = 586
 *  soHangTram = Math.floor(number / 100) => 5
 *  soDu = number % 100 => 86
 *  soHangChuc = Math.floor(soDu / 10) => 8
 *  soDonVi = soHangChuc % 10 => 6
 * 
 *  tong = soHangTram + soHangChuc + soDonVi
 * 
 *  B3: Thông báo kết quả ở console.log
 * 
 * 
 *  Khối 3: Output
 *  Tổng của ba chữ số
 *  586 = 5 + 8 + 6
 * 
 */


// B1
var number = 586;
var soHangTram = 0;
var soHangChuc = 0;
var soDonVi = 0;
var tong = 0;

// B2
soHangTram = Math.floor(number / 100);
var soDu = number % 100;
soHangChuc = Math.floor(soDu / 10);
soDonVi = soDu % 10

tong = soHangTram + soHangChuc + soDonVi;

// B3
console.log('Tổng ba chữ số', tong);
