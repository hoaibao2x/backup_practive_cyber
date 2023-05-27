import QuestionService from "../services/QuestionService.js";
import MultipleChoice from "../models/MultipleChoice.js";
import FillInBlank from "../models/FillInBlank.js";


const quesService = new QuestionService();

// Chứa các đối tượng câu hỏi đã phân loại
let quesArray = [];

let getList = () => {
    quesService.getQuesList()
        .then((result) => {
            console.log(result.data);
            // Phân loại tạo đối tượng câu hỏi phù hợp
            result.data.map((ques) => {
                let { id, questionType, content, answers } = ques;
                if (questionType == 1) {
                    // Multiple
                    let multi = new MultipleChoice(id, questionType, content, answers);
                    quesArray.push(multi);
                } else {
                    // Fill in blank
                    let fill = new FillInBlank(id, questionType, content, answers);
                    quesArray = [...quesArray, fill];
                }
            });

            console.log(quesArray);
            renderQues();

        })
        .catch((error) => {
            console.log(error);
        })
}
getList();



let renderQues = () => {
    // Chứa tất cả các thẻ html của question
    let contentHTML = "";
    let count = 0;
    quesArray.map((ques, index) => {
        let { id, questionType, content, answers } = ques;
        let buttonHTML = "";

        if (index == quesArray.length - 1) {
            // Nếu câu hỏi là câu cuối cùng
            buttonHTML = `
                <a href="#quizResult" class="quiz__btn quiz__next" onclick="submitQues()">SUBMIT</a>
            `
        } else {
            // Chưa đến câu cuối cùng
            // Cần lấy được id của câu hỏi kế tiếp
            let quesNext = quesArray[index + 1];
            buttonHTML = `
                <a href="#quiz-${quesNext.id}" class="quiz__btn quiz__next">NEXT</a>
            `
        }
        contentHTML += `
            <div class="quizSection" id="quiz-${id}">
                <div class="quiz__main">
                    <div class="quiz__header">
                        <p>${content}</p>
                    </div>
                    <div class="quiz__body row">
                        ${ques.renderHTML()}
                    </div>
                    <div class="quiz__footer">
                        <p class="quiz__current">Question ${++count} of ${quesArray.length}</p>
                        ${buttonHTML}
                    </div>
                </div>
            </div>
        `
    })

    document.getElementById("quizList").innerHTML = contentHTML;
}

let submitQues = () => {
    let correct = 0;
    quesArray.map((ansObj) => { 
        // ansObj.checkAns() == true
        if (ansObj.checkAns()) {
            // checkAns() => true => Người dùng trả lời đúng
            correct++;
        }
     })

    document.getElementById("correct").innerHTML = correct;
    document.getElementById("incorrect").innerHTML = quesArray.length - correct;

    console.log(correct * 100 / quesArray.length)
}
window.submitQues = submitQues;