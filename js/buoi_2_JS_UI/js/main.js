//Tìm tới thẻ bằng ID
var userInput = document.getElementById('username')
console.log(userInput);

//Lấy giá trị của control của form (input, textarea, checkbox, radio, select)
console.log(userInput.value);


/**
 * Demo đổi nội dung
 * 
 * Thời điểm chạy chức năng code
 * 1: Khi người dùng load trang web
 * 2: Khi người dùng tương tác với UI (click, gõ phím, di chuyển chuột, scroll chuột)
 * 
 * => Để gắn được chức năng (các dòng code xử lý chung 1 chuỗi các hành động)
 * => Gom vào chung trong 1 hàm (function)
 * 
 * Function
 * + Gom nhóm các dòng code có chung chức năng xử lý
 * + Gắn hàm vào cho các sự kiện (event)
 **/

//Khai báo hàm
function showInfo() {
    console.log('Lấy được thông tin rồi nè !');
}

//Gọi/ sử dụng hàm (call function)
// Thời điểm 1: Chạy khi load trang web
// showInfo();

// Thời điểm 2: Chạy khi click
// C1: Gắn sự kện click bằng code js
// C2: Sử dụng thuộc tính onclick của thẻ html

// Khai báo hàm đổi nội dung
function changeContent() {
    // Tìm tới thẻ cần đổi
    document.getElementById('txtChangeContent').innerHTML = 'Đổi rồi nè !';
    // css linline => style
    //! ƯU điểm: inline => ưu tiên cao (color: white!important; sử dụng js style)
    //! Nhược điểm: Khó chỉnh sửa, nếu thêm nhiều css sẽ dài code
    document.getElementById('txtChangeContent').style.fontSize = '30px';

    // css external (thuộc tính class của html)
    // classList, className
    //? className: sẽ xóa class cũ và ghi đè các class mới
    // document.getElementById('txtChangeContent').className = ''
    //? classList: giữ các class cũ và bổ sung class mới
    document.getElementById('txtChangeContent').classList.add('testClass', 'testClass2');
}

// Gắn hàm cho sự kiện click
document.getElementById('btnChange').onclick = changeContent;


/** Bật tắt đèn */
function turnOn() {
    document.getElementById('imgBul').src = './img/pic_bulbon.gif';
}

function turnOff() {
    document.getElementById('imgBul').src = './img/pic_bulboff.gif';
}

// Thêm 1 nút ẩn hiện bóng đèn
function btnShowHidden() {
    // Nếu đã tồn tại class hidden => xóa class
    // Nếu chưa tồn tại => thêm class
    document.getElementById('imgBul').classList.toggle('hidden');
}

document.getElementById('btnHidden').onclick = btnShowHidden;



/*
    Demo thêm disabled (control form, button, thẻ a)
*/

document.getElementById('btnClick').onclick = function() {
    document.getElementById('txtDisabled').disabled = true;
    document.getElementById('btnTimeLine').disabled = true;
}

document.getElementById('btnRemove').onclick = function() {
    document.getElementById('txtDisabled').disabled = false;
    document.getElementById('btnTimeLine').disabled = false;
}




/**
 * Demo tính tiền típ
 * 
 * Khối 1: Input
 * tongTien
 * phanTramTip
 * soNguoi
 * 
 * Khối 2: Các bước xử lý
 * B1: Lấy giá trị từ form
 * B2: 
 *      tongTienTip = tongTienTip * phanTramTip /100
 *      tipMoiNguoi = tongTienTip / soNguoi
 * 
 * Khối 3: Output
 * tipMoiNguoi
 **/

function tinhTienTip() {
    //Lấy giá trị từ form
    var tongTien = document.getElementById('inputTotal').value;
    var soNguoi = document.getElementById('inputPeople').value;
    var phanTramTip = document.getElementById('selectPercent').value;

    var tongTienTip = tongTien * phanTramTip /100;
    var tipMoiNguoi = (tongTienTip / soNguoi).toLocaleString();

    document.getElementById('txtResult').innerHTML = 'Tip mỗi người' + ' ' + tipMoiNguoi + "<span style='color:red; vertical-align: super;'> $</span>";
}

document.getElementById('btnCalc').onclick = tinhTienTip;