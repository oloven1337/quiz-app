interface IState {
    answers: Answer
}

interface Answer {
    answers: {
        id: number,
        title: string,
        userAnswer: string | null,
        correctAnswer: string
    }
}

export const answersSelector = ((state: IState) => state.answers.answers)
