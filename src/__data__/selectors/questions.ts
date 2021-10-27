interface IQuestion {
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

interface IState {
    question: {
        questions: IQuestion[],
        isFetching: boolean
    }
}

export const questionsSelector = (state: IState) => state.question.questions
export const answersLoaderSelector = () => (state: IState) => state.question.isFetching


