// console.log('Goodbye World !');
// console.log('Goodbye World !');
// console.log('Goodbye World !');
// console.log('Goodbye World !');
// console.log('Goodbye World !');
// console.log('Goodbye World !');



/**Loop (Vòng lặp)
 * While
 * Do ... while (Ít dùng)
 * For (Dùng nhiều nhất)
 */

//?1: Khởi tạo biến bước nhảy (biến đếm)
// debugger: Sử dụng đặt điểm dừng khi không tìm được file trên browser
var count = 0;

//?2: Lệnh kiểm tra có được thực hiện tiếp hay không
// Điều kiện dừng hoặc tiếp tục vòng lặp
// Chỉ bắt đâu thực hiện code lần đầu khi thỏa điều kiện
while (count < 3) {
    // Điều kiện: Có 10 lần Goodbye World
    // Nếu thỏa điều kiện
    //?3: Các lệnh sẽ thực hiện khi thòa điều kiện
    console.log('Biến đếm: ' + count + ' Goodbye World !');

    //?4: Tăng hoặc giảm biến đếm
    count++;

}


/**
 * Do while 
 * */
var showInfo = 'Anonymous';
var count2 = 0;
do {
    console.log(showInfo);
    count2++;
} while (count2 < 3);


/**
 * Thực hành while
 * Chia dần số nguyên chẵn cho đến khi num <= 1
 * */


function tinhNum() {
    var count3 = 0;
    var num = Number(document.getElementById('inputNum').value);
    var output = '';

    while (num > 1) {
        // Thỏa điều kiện thì thực hiện code bên trong
        num = Math.floor(num/2);
        count3++;
        output += ' Lần lặp: ' + count3 + ' ' + num + '<br>';

        document.getElementById('ketQua').innerHTML = output;
    }
}

document.getElementById('btnTinh').onclick = tinhNum;


/**
 * For 
 **/

// for(Khởi tạo biến bước nhảy; Điều kiện tiếp tục; Tăng/ Giảm biến bước nhảy) {
//     // Các code thực hiện khi thỏa điều kiện
// }

for (var i = 0; i < 3; i++) {
    console.log(showInfo);
}