/** OOP: Lập trình hướng đối tượng
 * Các mô hình tổ chức code 
 * + Kế thừa
 * + Đa hình (Dựa trên tính kế thừa)
 * + Đóng gói (Bảo mật, quy định quyền truy xuất thuộc tính và phương thức (private, public, protected))
 * + Trừu tượng (interface...) => ES 6 (chuyển từ thông tin dối tượng thực tế => dữ liệu lưu trữ trong class lớp đối tượng)
 * 
 */


//? ---------- Kế thừa -----------//
/** Chuyến xe nội thành (Di chuyển trong khu vực thành phố)
 * Chuyến xe ngoại thành (Di chuyển giữa các tỉnh hoặc quốc gia)
 * 
 */

// class ChuyenXeNoiThanh {
//     // Phương thức khởi tạo
//     constructor(maxe, tenTaiXe, soXe, soTuyen, soKM, doanhThu) {
//         this.maxe = maxe;
//         this.tenTaiXe = tenTaiXe;
//         this.soXe = soXe;
//         this.soTuyen = soTuyen;
//         this.soKM = soKM;
//         this.doanhThu = doanhThu;
//     }

//     showInfo = () => {
//         console.log(this.maxe, this.soXe);
//     }
// }

// let noiThanh = new ChuyenXeNoiThanh("Xe001", "Chú Tài Xế", "77C70007", "18", 50, 1000);
// noiThanh.showInfo();


// class ChuyenXeNgoaiThanh {
//     // Phương thức khởi tạo
//     constructor(maxe, tenTaiXe, soXe, noiDen, soNgay, doanhThu) {
//         this.maxe = maxe;
//         this.tenTaiXe = tenTaiXe;
//         this.soXe = soXe;
//         this.noiDen = noiDen;
//         this.soNgay = soNgay;
//         this.doanhThu = doanhThu;
//     }

//     showInfo = () => {
//         console.log(this.maxe, this.soXe);
//     }
// }

// let ngoaiThanh = new ChuyenXeNoiThanh("Xe002", "Chú Tài Xế", "43C43456", "CamPu", 3, 7000);
// ngoaiThanh.showInfo();


// Hệ thống mở rộng => Xe taxi, tàu, xe du lịch

// Tạo parent class (chứa các thuộc tính chung, phương thức chung)
// Các chill class (chứa các thuộc tính  riêng, phương thức riêng)

class ChuyenXe {
    constructor(maxe, tenTaiXe, soXe, doanhThu) {
        this.maxe = maxe;
        this.tenTaiXe = tenTaiXe;
        this.soXe = soXe;
        this.doanhThu = doanhThu;
    }

    showInfo(){
        console.log(this.maxe, this.soXe);
    }
}

class NoiThanh extends ChuyenXe {
    // Phương thức khởi tạo của child Class

    // Thuộc tính riêng
    constructor(maxe, tenTaiXe, soXe, doanhThu, soTuyen, soKM) {
        super(maxe, tenTaiXe, soXe, doanhThu)
        this.soTuyen = soTuyen;
        this.soKM = soKM;
    }

    //! method overriding (Phương thức ghi đè): Phương thức của con trùng tên với cha (class con sẽ không kế thừa từ cha)
    //! Đa hình: Chung 1 hành động nhưng đạt được kết quả khác nhau
    showInfo() {
        super.showInfo();
        console.log(this.soTuyen, this.soKM);
    }
}

class NgoaiThanh extends ChuyenXe {
    constructor(maxe, tenTaiXe, soXe, doanhThu, noiDen, soNgay) {
        super(maxe, tenTaiXe, soXe, doanhThu)
        this.noiDen = noiDen;
        this.soNgay = soNgay;
    }

    showInfo() {
        super.showInfo();
        console.log(this.noiDen, this.soNgay);
    }
}

let nThanh = new NoiThanh("Xe001", "Chú Tài Xế", "77C70007", "18", 50, 1000);
nThanh.showInfo();


let ngThanh = new NgoaiThanh("Xe002", "Chú Tài Xế", "43C43456", "CamPu", 3, 7000);
ngThanh.showInfo();