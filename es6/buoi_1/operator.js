/** Default Param */

let sum = (num1 = 0, num2 = 0) => {
    console.log(num1 + num2);
}
sum(2, 4); // 6
// sum(2) // Giá trị không có => undefined => 2 + undefined => NaN
sum(2);



/** Rest Param */
// Bị giới hạn số lượng tham số
// let showFoodList = (haiSan, lau, monNhat) => {
//     console.log(haiSan, lau, monNhat);
// }
// showFoodList("🍤", "🍲", "🍣");

// "🍤", "🍲", "🍣" => (3) ["🍤", "🍲", "🍣"]
let showFoodList = (...menuFood) => {
    console.log(menuFood);
    // map(anfn)
    menuFood.map((food) => {
        console.log(food);
    })
}
showFoodList("🍤", "🍲", "🍣", "🍤", "🍲", "🍣", "🍤", "🍲", "🍣");




/** Spread Operator [], {} */
//? Tham trị => Chỉ truyền giá trị, biến mới có thay thì cũng không ảnh hưởng biến ban đầu
let petName = "Bé Na 🐍";

let petName2 = petName;
console.log(petName2);
petName2 = "🐍";
console.log(petName2);

console.log(petName);
console.log(petName2);


//? Tham chiếu
let pet = ["🦊", "🐹"];
// let pet2 = pet;

// console.log(pet2);
// pet2.push("🐧");

// console.log(pet);
// console.log(pet2);


// Solution:
//? Spread Operator: Lấy từng phần tử từ mảng ra
// ["🦊", "🐹"] => "🦊", "🐹"

// let pet2 = [...pet];
// pet2.push("🐧");

let pet2 = [...pet, "🐧"];
// ...pet: Copy mảng, "🐧" thêm phần tử mới

console.log(pet);
console.log(pet2);




/** Destructuring [], {} */

let people = {
    name: "Jessica",
    age: "22",
    avatar: "https://i.pravatar.cc/?u=20",
    address: {
        city: "DN",
        houseNum: "103"
    }
}

let showInfo = () => {
    let {city, houseNum} = people.address;
    document.querySelector("#colPeople").innerHTML = `
        <div class="card">
            <img src="${people.avatar}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${people.name}</h5>
                <p>Age ${people.age}</p>
                <p>City: ${people.address.city}</p>
                <p>City: ${houseNum}</p>
            </div>
        </div>
    `
}
showInfo();




/** Object Literal */
let name = "John";
let people2 = {
    // name: "Alex",
    name, // Khi tên thuộc tính trùng tên với biến truyền vào
    age: "28",
    avatar: "https://i.pravatar.cc/?u=92",
    address: {
        city: "VN",
        houseNum: "192"
    }
}

console.log(people2.name);



let age = "agePeople3";
let people3 = {
    name,
    // Tạo động tên thuộc tính
    [age]: "28", // agePeople3: 28
    avatar: "https://i.pravatar.cc/?u=92",
    address: {
        city: "VN",
        houseNum: "192"
    }
}
console.log(people3.agePeople3);