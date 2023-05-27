/** For */
let menu = ["🍤", "🍲", "🍣", "🍤"];
for (let i = 0; i < menu.length; i++) {

    // Lấy giá trị dựa vào vị trí phần tử
    console.log(menu[i]);    

}




/** For in */
for (let i in menu) {
    console.log(menu[i]);
}



/** For of */
for (let value of menu) {
    // Lấy trực tiếp giá trị
    console.log(value);
}


let people = {
    // key: value
    name: "Jessica",
    age: "22",
    avatar: "https://i.pravatar.cc/?u=20"
}
// Duyệt lấy từng thuộc tính của đối tượng
for (const key in people) {
    console.log(people[key]);
}