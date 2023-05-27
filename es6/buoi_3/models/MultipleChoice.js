import Question from "./Question.js";

export default class MultipleChoice extends Question {

    renderHTML() {
        let contentRadio = "";
        this.answers.map((ans) => {
            let { id, content } = ans;
            contentRadio += `
                <div class="col-6">
                    <div class="custom-control custom-radio">
                    
                        <input type="radio" id="multi${this.id}-mulAnswer${id}" name="multi-${this.id}" class="custom-control-input" value="${content}" data-id="${id}">

                        <label class="custom-control-label" for="multi${this.id}-mulAnswer${id}">${content}</label>
                    </div>
                </div>
            `
        })

        return contentRadio;
    }

    checkAns() {
        // Lấy userAns từ người dùng
        // DOM tới các radio có chung thuộc tính name
        let radioAns = document.querySelectorAll(`input[name= "multi-${this.id}"]`);
        let userAns = "";
        for (let i = 0; i < radioAns.length; i++) {
            // Duyệt từng thẻ input radio => Kiểm tra thẻ nào đang check
            // radioAns[i].checked == true
            if (radioAns[i].checked) {
                // Nếu được check => Lấy id của radio người dùng đang chọn
                userAns = radioAns[i].getAttribute("data-id");
                console.log(userAns);
            }
        }

        // Kiểm tra radio nào của BE có exact là true => Lấy id của câu đúng (apiAns)
        let apiAns = "";
        this.answers.map((ans) => {
            if (ans.exact) {
                // exact là true
                apiAns = ans.id;
            }
        })

        if (userAns == apiAns) {
            return true;
        }
        return false;
    }

}