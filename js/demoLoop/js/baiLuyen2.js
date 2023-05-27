/**Tính tổng các số chẵn  từ 1 -> n (Nhập form) 
 * while/ for
 * if else 
 * Biến tích lũy +=
*/

function tinhTongChan() {
    // Dãy số kiểm tra từ 1 -> n
    var count = 1;
    var n = Number(document.getElementById('inputNum2').value);
    var sum = 0;
    // While
    // while (count <= n) {
    //     if (count % 2 === 0) {
    //         sum+= count;
    //     }
    //     count++;
    // }
    
    // For
    for (var  i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum+=i;
        }
    }
    document.getElementById('ketQua2').innerHTML = 'Tổng các số chẵn từ 1 tới ' + (i-1) + ' là ' + sum;
}
document.getElementById('btnTinhTong').onclick = tinhTongChan;
