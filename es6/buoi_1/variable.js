/** Variable
 * 
 * (ES5) var, (ES6) let, const
 * 
 */

var fullName = "Nguyễn Văn A";
//? Cho khai báo trùng
var fullName = "Trần B";

console.log(fullName);

//? Cho gán lại giá trị
var fullName = "Vitamin C";
console.log(fullName);


const PI = 3.14;
//! Không cho khai báo trùng, không cho gán lại giá trị
// const PI = 2;


let age = 0;
//? Không cho khai báo trùng, cho gán lại giá trị

//! let age = 30;
age = 20;
console.log("age", age);


//? Phạm vi biến

//? Global
// var username = "anomyname";
let username = "anomyname";

function showInfo() {
    console.log("var trong hàm", username);
}
showInfo();
console.log("var ngoài hàm", username);



//? Global
let username_2 = "name_2";
function showInfo() {
    //? Local
    let pass = "1234";

    console.log("trong hàm", pass);
}
showInfo();
// console.log("trong hàm", pass);



//? Block 
let username_3 = "name_2";
function showInfo() {
    //? Local
    let pass_2 = "1234";

    console.log("trong hàm", pass_2);

    //? Block {}
    if (pass_2 == "1234") {
        let notify = "Login Success";
        console.log("trong block", notify);
    }
    // console.log("ngoài block", notify);  // => not defined
}
showInfo();



/** hoisting
 * 
 * 
 */

// var city = "DN";
// let address = "103 Nguyễn Hữu Dật";

// console.log(city); => DN
// console.log(address); => 103 Nguyễn Hữu Dật



// console.log(city); //undefined (Nếu biến chưa gán giá trị thì sẽ là undefined)
// console.log(address); //! ReferenceError

// var city = "DN";
// let address = "103 Nguyễn Hữu Dật";


//? Cách trình duyệt đọc code
//? Trình duyệt Sẽ đem đoạn khai báo lên vị trí đầu của file js
// var city;

// console.log(city); // undefined
// console.log(address);

//? Còn đoạn giá trị thì vẫn để lại ở dòng ban đầu
// city = "DN";
// let address = "103 Nguyễn Hữu Dật";
