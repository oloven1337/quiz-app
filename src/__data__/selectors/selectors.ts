// interface IQuestion {
//     category: string,
//     type: string,
//     difficulty: string,
//     question: string,
//     correct_answer: string,
//     incorrect_answers: [
//             string | boolean,
//         string?,
//         string?
//     ]
// }

interface IQuestion {
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

interface IState {
    question: {
        questions: IQuestion[]
    }
}

export const questionsSelector = (state: IState) => state.question.questions
