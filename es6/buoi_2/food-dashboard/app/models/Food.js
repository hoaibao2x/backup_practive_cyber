// export => Không được đổi tên khi import
// export default => Được đổi tên khi import
export default class Food {
    // Phương thức khởi tạo
    constructor(tenMon, loai, gia, phanTram, giaSauKM, tinhTrang, hinhAnh, moTa) {
        // Khai báo thuộc tính
        this.tenMon = tenMon;
        this.loai = loai;
        this.gia = gia;
        this.phanTram = phanTram;
        this.giaSauKM = 0;
        this.tinhTrang = tinhTrang;
        this.hinhAnh = hinhAnh;
        this.moTa = moTa;
    }

    tinhKM = () => {
        this.giaSauKM = this.gia * (100 - this.phanTram) / 100;
    }
}



