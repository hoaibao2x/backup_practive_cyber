/**
 *      - Các câu kiểm tra điều kiện 
 *          + Chỉ có 1 hành động
 *          + Có 2 hành động
 *          + Có nhiều hành động             
 * 
 *      - Toán tử so sánh
 **/

// Toán tử so sánh (Kết quả kiểu boolean ==> true / false)
// So sánh bằng
console.log('So sánh bằng');
console.log(5 == 5);
console.log(5 == 6);
// Lớn hơn, bé hơn
console.log('Lớn hơn, bé hơn');
console.log(5 < 5);
console.log(5 < 6);
// So sánh không bằng
console.log('So sánh không bằng');
console.log(5 != 5);
console.log(5 != 6);

// Phép toán so sánh logic (So sánh nhiều biểu thức)
// && (AND), || (OR)

// Xếp loại sinh viên giỏi
// Điểm lớn hơn bằng 9 và điểm lớn hơn bằng 10
var diemTB = 9.5;
console.log('Toán tử &&');
console.log(diemTB >= 9 && diemTB <= 10);
console.log('Toán tử ||');
// => true || false => true
// => false || false => false

// Điểm bé hơn bằng 9 và điểm bé hơn bằng 10
console.log(diemTB >= 9 || diemTB <= 10);



/**
 * Demo chuyển số âm sang số dương
 * 
 * Khối 1: Input
 * số var d
 * 
 * Khối 2: Các bước xử lý
 *  Kiểm tra số d là số âm hay dương
 *  d < 0 => Là số âm => Chuyển đổi sang số dương
 * 
 * Khối 3: Output
 * số dương d
 **/

var d = -1;

//Kiểm tra
//? if (biểu thức so sánh) {
// biểu thức so sánh=> true
// các hành động khi thỏa điều kiện
//? }

if (d < 0) {
    // Thỏa điều kiện d là số âm
    d = Math.abs(d);
}

console.log('Số d:' + ' ' + d);




/**
 * Tính tiền phạt tín dụng
 * 
 * Khối 2: 
 *      conNo = tienPhaiTra - tienDaTra
 *      Nếu conNo > 0 thì bị phạt
 *      tienPhat = conNo * 1.5 / 100
 * 
 * Thông báo tiền phạt
 * 
 **/

var tienPhaiTra = 5000000;
var tienDaTra = 3000000;

var conNo = tienPhaiTra - tienDaTra;

if (conNo > 0) {
    var tienPhat = conNo * 1.5 / 100;
}

console.log('Bị phạt: ' + tienPhat.toLocaleString());


/**
 * Điều kiện 2 hành động
 * Tìm số lớn nhất trong  2 số
 * */

var d1 = 7;
var d2 = 6;

if (d1 < d2) {
    console.log('Số lớn hơn là d2: ' + d2);
} else {
    console.log('Số lớn hơn là d1: ' + d1);
}


/**Demo tính tiền lương
 * 
 * Khối 1: Input
 * gio, tienMoiGio, heSo
 * 
 * Khối 2: 
 *          
 *        Nếu không làm OT (gio < 40)
 *        tienLuong = 40 * tienMoiGio
 *        Nếu có làm OT
 *        tienLuong = (40 * tienMoiGio) + (gio - 40) * tienMoiGio * heSo
 * 
 * Khối 3: Output
 * tienLuong
 */

var gio = 40;
var tienMoiGio = 50000;
var heSo = 1.5;

if (gio <= 40) {
    // Không có OT
    var tienLuong = 40 * tienMoiGio;
} else {
    var tienLuong = (40 * tienMoiGio) + (gio - 40) * tienMoiGio * heSo;
}

console.log('Lương 1 tuần: ' + tienLuong.toLocaleString());



/**Điều kiện nhiều hành động
 * 
 * Khối 1: soLuong, donGia
 * 
 * Khối 2:
 *         Nếu số lượng < 50
 *              tienThanhToan = soLuong * donGia
 *         Nếu 100 >= soLuong >= 50 (8%) => 100 -8 = 92
 *              tienThanhToan = soLuong * donGia *0.92
 *         Nếu soLuong > 100 (12*) => 100 -12 = 88
 *              tienThanhToan = soLuong * donGia * 0.88
 *         Ngược lại
 *              Thông báo lỗi
 * 
 * Khối 3:
 * tienThanhToan
 */

var soLuong = 10;
var donGia = 10000;
var tienThanhToan = 0;

if (0 < soLuong && soLuong < 50) {
    tienThanhToan = soLuong * donGia;
} else if (100 >= soLuong && soLuong >= 50) {
    tienThanhToan = soLuong * donGia * 0.92;
} else if (soLuong > 100) {
    tienThanhToan = soLuong * donGia * 0.88;
} else {
    // Ngược lại với các điều kiện ở trên
    alert('Sai rồi hãy nhập lại !');
}

console.log('Tổng tiền thanh toán: ' + tienThanhToan.toLocaleString());


// Rút gọn
// Câu lệnh gọn hơn
// Khó đọc code


var age = 20;

if (age >= 21) {
    console.log('Tuổi hợp lệ !');
}

// Rút gọn: Trong lệnh if chỉ có 1 dòng lệnh (code) => bỏ dấu {}
if (age >= 21)
    console.log('Tuổi hợp lệ !');



if (age >= 21) {
    console.log('Tuổi hợp lệ !');
} else {
    console.log('Tuổi không hợp lệ !');
}

//Nếu chỉ có 1 dòng lệnh => bỏ dấu {}
if (age >= 21)
    console.log('Tuổi hợp lệ !');
else
    console.log('Tuổi không hợp lệ !');


// Toán tử 3 ngôi
age >= 21 ? console.log('Tuổi hợp lệ !') : console.log('Tuổi không hợp lệ !');


// Switch case (So sánh bằng)
var loaiXe = 'Yamaha';
// if (loaiXe == 'Honda') {
//     console.log('Honda');
// } else if (loaiXe == 'Yamaha') {
//     console.log('Yamaha');
// } else {
//     console.log('Loại xe chưa xác định !');
// }


switch (loaiXe) {
    case 'Honda':
        console.log('Honda');
        break;

    case 'Yamaha':
        console.log('Yamaha');
        break

    default:
        console.log('Loại xe chưa xác định !');
        break;
}