import Question from "./Question.js";

export default class FillInBlank extends Question {

    renderHTML() {
        return `
            <div class= "col-12">
                <textarea class="form-control" id="fill${this.id}-fillAnswer${this.answers[0].id}" rows="3"></textarea>
            </div>
        `;
    }

    /**
     * Input: userAns, apiAns
     * 
     * 
     * Process:
     *  B1: DOM tới ô textarea => Lấy userAns
     *      Lấy apiAns từ API của Backend
     *  B2: So sánh chuỗi kí tự
     * + Chuyển in hoa thành chữ thường
     * + Xóa khoảng trắng (userAns, apiAns)
     *  B3: => Nếu bằng (==) thì return true
     * ngược lại return false
     * 
     * 
     * Output: câu trả lời là đúng hay sai
     * Nếu đúng:
     *  return true
     * Nếu sai:
     *  return false
     * 
    */
    checkAns() {
        // Lấy userAns từ người dùng
        let userAns = document.querySelector(`#fill${this.id}-fillAnswer${this.answers[0].id}`).value;
        console.log(userAns);

        // Lấy apiAns từ BE
        let apiAns = this.answers[0].content;
        console.log(apiAns);

        if (userAns == apiAns) {
            // Trả lời đúng
            return true;
        }
        // Trả lời sai
        return false;
    }

}