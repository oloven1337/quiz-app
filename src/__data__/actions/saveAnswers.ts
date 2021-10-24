import {SAVE_ANSWER} from "../action-types";

export {}

interface IAnswer {
    id: number,
    title: string,
    userAnswer: string | null,
    correctAnswer: string
}

export const setAnswers = (answer: IAnswer) => {
    return ({
        type: SAVE_ANSWER,
        payload: answer
    })
}
