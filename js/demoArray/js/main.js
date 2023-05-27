/**  
 * Array (Mảng)
 * 
 * variable (Biến)
 *  - Lưu trữ giá trị
 *  - number, string, boolean(true/ false)
 * 
 * */

// Array songs
// Array string
var songs = ['Sáng mắt chưa', 'Vì mẹ anh bắt chia tay', 'Có không giữ mất đừng tìm'];

var foods = ['🥫', '🍲', '🍔'];

// Array number
var nums = [2, 9, -5, 6];

var mixArr = ['Iphone', 3, true];

// Lưu các mảng nhỏ
var mix = [[5, 4, 7], [6, 1, 2]];

console.log(songs);
console.log(foods);

// Lấy giá trị của phần tử ở vị trí index số 1
console.log(songs[1]);
console.log(foods[1]);

// Lấy giá trị phần tử đầu tiên
console.log(songs[0]);

// Lấy giá trị phần tử cuối cùng
console.log(songs[songs.length - 1]);

// Length: Độ dài của mảng (Số lượng phần tử trong mảng)
console.log(songs.length);

// Duyệt mảng (Đi qua từng giá trị của mảng để làm 1 chức nâng nào đó)
// i: index (Vị trí của phần tử trong mảng)
// Điều kiện tiếp tục duyệt mảng là i < độ dài mảng
for (var i = 0; i < songs.length; i++) {
    // Giá trị của phần tử thứ i
    console.log(songs[i]);
}

/**DOM */
// Tìm tới thẻ bằng ID
// Tìm tới các thẻ bằng tên class
// Tìm tới các thẻ bằng tên thẻ

// TÌm tới các thẻ bằng tên class
var liELE = document.getElementsByClassName('nav-item');

console.log(liELE);
console.log(liELE[0]);

var liELE2 = document.getElementsByTagName('li');
console.log(liELE2);
console.log(liELE2[liELE2.length - 1]);

// querySelector
// querySelectorAll
var liELEList2 = document.querySelectorAll('#list2 li.nav-item');
console.log(liELEList2);

var firstList2 = document.querySelector('#list2 li.nav-item');
console.log(firstList2);

//! Không thể xử lý style trực tiếp của biến liELEList2 (Danh sách)
// liELEList2.style.backgroundColor = 'red
// firstList2.style.background = 'red';

for (let i = 0; i < liELEList2.length; i++) {
    // Lấy từng thẻ trong danh sách thẻ để thêm màu nền
    liELEList2[i].style.background = 'pink';
}