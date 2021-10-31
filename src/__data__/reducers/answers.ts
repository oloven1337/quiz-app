import {SAVE_ANSWER, CLEAR_ANSWER} from "../action-types";
import {IAnswer} from "../types/IAnswer";

export interface IAction {
    type: string,
    payload?: IAnswer
}

const initialState = {
    answers: []
}

export const answers = (state = initialState, action: IAction) => {
    switch (action.type) {
        case SAVE_ANSWER: {
            const {id} = action.payload!
            const copyState = JSON.parse(JSON.stringify(state))
            copyState.answers[id] = action.payload

            return {
                ...copyState,
            }
        }
        case CLEAR_ANSWER: {
            console.log(state.answers)
            return {
                ...state,
                answers: []
            }
        }
        default: {
            return state
        }
    }
}
