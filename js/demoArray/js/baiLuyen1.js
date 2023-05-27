/**Tính tổng và đếm số âm 
 * 
 * + Thêm số vào mảng
 * + Tính tổng chẵn
 * + Đếm số âm
 * 
*/

var nums = []; // Mảng rỗng

function themSo() {
    var num = Number(document.querySelector('#formNum input').value);
    // push: Lưu giá trị mới vào mảng
    nums.push(num);
    document.querySelector('#formNum input').value = '';
    console.log(nums);
}
document.querySelector('#themSo').onclick = themSo;

function tinhTongChan() {
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            sum += nums[i];
        }
    }
    document.querySelector('#txtResult').innerHTML = 'Tổng các số chẵn trong dãy là: ' + sum;
}
document.querySelector('#btnTinh').onclick = tinhTongChan;

function demSoAm() {
    var demAm = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            demAm++;
        }
    }
    document.querySelector('#txtResult').innerHTML = 'Tổng các số âm xuất hiện trong dãy là: ' + demAm;
}
document.querySelector('#demSoAm').onclick = demSoAm;
