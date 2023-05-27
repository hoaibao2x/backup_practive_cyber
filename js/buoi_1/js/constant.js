/**Khai báo hằng số
 * + var: cho phép gán lại giá trị
 *        cho phép khai báo biến trùng tên (hạn chế)
 */

var age = 20;
// Cho phép gán lại giá trị
age = 25;
console.log(age);

// Cho phép khai báo biến trùng tên => làm ghi đè mất dữ liệu
var age = 10;
console.log(age);

// Hằng số
//! Khi một giá trị được sử dụng ở nhiều chức năng,
//! nếu được thay dổi giá trị đó sẽ ảnh hưởng kết quả tính toán 
// Không cho phép gán lại giá trị mới
const PI = 3.14;
console.log(PI);

