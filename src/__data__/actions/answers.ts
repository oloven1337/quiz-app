import {CLEAR_ANSWER, SAVE_ANSWER} from "../action-types";

interface IAnswer {
    id: number,
    title: string,
    userAnswer: string,
    correctAnswer: string
}

export const setAnswers = (answer: IAnswer) => {
    return ({
        type: SAVE_ANSWER,
        payload: answer
    })
}

export const clearAnswers = () => {
    return ({
        type: CLEAR_ANSWER
    })
}
