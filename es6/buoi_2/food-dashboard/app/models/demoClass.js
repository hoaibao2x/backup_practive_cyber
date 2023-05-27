/** Ngữ cảnh (context) của this */
class Pet {
    constructor(petName, age) {
        this.petName = petName;
        this.age = age
    }

    // showInfo() {
    //     console.log(this.petName);
    // }

    // Arrow function
    showInfo2 = () => {
        console.log(this.petName);
    }
}

let pet = new Pet("Bino", 12);
// pet.showInfo();
pet.showInfo2();