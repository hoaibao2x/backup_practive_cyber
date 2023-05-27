/** 
 * Author: Dev 1
 * Function: TÍnh cạnh huyền
 * Release: 27/06/2022
 */


/** 
 *  Khối 1: Dữ liệu đang có sẵn (Input)
 *  canh1, canh2 (Hai cạnh góc vuông)
 *  
 * 
 *  Khối 2: Các bước xử lý code
 *  B1: Tạo biến canh1, canh2
 *  B2: Gán giá trị cho biến
 *  B3: Lập công thức tính toán
 *      (canh1 * canh1)  + (canh2 * canh2) = canhHuyen* canhHuyen
 *  =>   Math.pow(canh1, 2) + Math.pow(canh2, 2) = canhHuyen (chứa giá trị bình phương của cạnh huyền)
 *  =>   Lấy căn bậc hai của cạnh huyền
 *  
 *  B4: Thông báo kết quả ở console.log
 * 
 * 
 *  Khối 3: Kết quả mong đợi (Output)
 *  canhHuyen
 */


// B1, B2
var canh1 = 3;
var canh2 = 4;
var canhHuyen = 0;

// B3
// Tính tổng bình phương và lưu vào biến canhHuyen
// canhHuyen = Math.pow(canh1, 2) + Math.pow(canh2, 2);

// Lấy căn bậc hai của biến canhHuyen và gán đè lại giá trị mới vào biến canhHuyen
// canhHuyen = Math.sqrt(canhHuyen);

canhHuyen = Math.sqrt(Math.pow(canh1, 2) + Math.pow(canh2, 2));

// B4
console.log('Độ dài cạnh huyền', canhHuyen);