/**Tổng số chia hết cho 3 */
function tongChiaHetCho3() {
    var number = Number(document.getElementById('inputNum3').value);
    var count = 0;

    // For
    // for (let i = 1; i <= number; i++) {
    //     if (i % 3 === 0) {
    //         count++;
    //     }
    // }

    // While
    var bienDiem = 1;
    while (bienDiem <= number) {
        if (bienDiem % 3 === 0) {
            count++;
        }
        bienDiem++;
    }
    document.getElementById('ketQua3').innerHTML = 'Từ 1 tới ' + number + ' có ' + count + ' số chia hết cho 3';
}
document.getElementById('btnTinhTong2').onclick = tongChiaHetCho3;