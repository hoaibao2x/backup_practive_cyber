// import các file cần dùng cho main
import Food from "../models/Food.js";
import FoodService from "../service/FoodService.js";

const foodSer = new FoodService();

let showTable = (foodArray) => {
    let content = "";
    foodArray.map((food) => {
        // destructuring
        let { id, hinhAnh, tenMon, loai, gia, phanTram, giaSauKM, tinhTrang } = food;
        content += `
            <tr>
                <td>${id}</td>
                <td>
                    <img src= "../../assets/img/${hinhAnh}" alt= "" />
                    <span>${tenMon}</span>
                </td>
                <td>${loai == "loai1" ? "Chay" : "Mặn"}</td>
                <td>${Number(gia).toLocaleString()}</td>
                <td>${phanTram}%</td>
                <td>${Number(giaSauKM).toLocaleString()}</td>
                <td>${tinhTrang == 1 ? "Còn" : "Hết"}</td>
                <td>
                    <button class= "btn btn-danger">Xóa</button>
                    <button data-toggle="modal" data-target="#exampleModal" class= "btn btn-info" onclick= "getDatailMain('${id}')">Xem</button>
                </td>
            </tr>
        `;
        document.querySelector("#tbodyFood").innerHTML = content;
    })
}

let getFoodList = () => {
    foodSer.getFoodList()
        .then((result) => {
            console.log(result.data);
            showTable(result.data);
        })
        .catch((error) => {
            console.log(error);
        })
}
// Gọi hàm getFoodList để lấy danh sách món ngay khi load trang
getFoodList();

let addFoodMain = () => {
    // Lấy dữ liệu từ form
    // let tenMon = document.querySelector("#tenMon").value;
    //! map chỉ dùng được với Array
    let foodValue = {};
    let formElE = document.querySelectorAll("#exampleModal .form-food");
    // console.log(formElE); // NodeList

    for (let i = 0; i < formElE.length; i++) {
        // console.log(formElE[i]); // value, id
        let { id, value } = formElE[i];
        // Thuộc tính, giá trị của thuộc tính
        // console.log(id, value);

        // Do không cần lưu thuộc tính id nên ràng buộc điều kiện lấy giá trị
        if (id != "id") {
            //? object literal
            //[id]: value: => tenMon: "giá trị trên từ form"

            //? Spread Operator
            // {...foodValue, [id]: value } => Copy thuộc tính cũ, thêm thuộc tính mới
            foodValue = { ...foodValue, [id]: value };
        }
        console.log(foodValue);
    }

    let { tenMon, loai, gia, phanTram, giaSauKM, tinhTrang, hinhAnh, moTa } = foodValue;
    let food = new Food(tenMon, loai, Number(gia), Number(phanTram), Number(giaSauKM), tinhTrang, hinhAnh, moTa);
    food.tinhKM();

    foodSer.addFood(food)
        .then((result) => {
            getFoodList();
        })
        .catch((error) => {
            console.log("error");
        })
}
document.querySelector("#btnThemMon").onclick = addFoodMain;

let getDatailMain = (id) => {
    console.log(id);
    foodSer.getFoodDetail(id)
        .then((result) => {
            console.log(result.data);
            // Hiển thị giá trị lên form
            let formElE = document.querySelectorAll("#exampleModal .form-food");

            // B1: Lấy từng thuộc tính của đối tượng, key (tên thuộc tính)
            for (const key in result.data) {
                // B2: DOM tới từng thẻ của form bằng id => key (tên thuộc tính)

                // result.data.tenMon, result.data["tenMon"]

                if (key !== "giaSauKM") {
                    console.log(document.getElementById(`${key}`));
                    console.log(result.data[key]);

                    document.getElementById(`${key}`).value = result.data[key];
                }

            }
        })
        .catch((error) => {
            console.log(error);
        })
}
// Cơ chế module (type= "module") => Hàm khai báo trong js chỉ dùng được trong file js
// Để gọi được getDatailMainbằng thuộc tính onlick của html
// Chuyển hàm thành phương thức của window
window.getDatailMain = getDatailMain;



let updateFoodMain = () => {
    let foodValue = {};
    let formElE = document.querySelectorAll("#exampleModal .form-food");

    for (let i = 0; i < formElE.length; i++) {
        let { id, value } = formElE[i];
        foodValue = { ...foodValue, [id]: value };
    }

    let { id, tenMon, loai, gia, phanTram, giaSauKM, tinhTrang, hinhAnh, moTa } = foodValue;

    let food = new Food(tenMon, loai, Number(gia), Number(phanTram), Number(giaSauKM), tinhTrang, hinhAnh, moTa);
    food.tinhKM();

    console.log(food);

    foodSer.updateFood(id, food)
    .then((result) => { 
        console.log(result.data);
        getFoodList();
     })
    .catch((error) => { 
        console.log(error);
     })
}
document.querySelector("#btnCapNhat").onclick = updateFoodMain;