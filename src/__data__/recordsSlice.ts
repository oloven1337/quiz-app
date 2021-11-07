import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface Record {
    correctAnswersCount: number,
    date?: string,
    answers: number
}

interface RecordsState {
    records: Record[]
}

//@ts-ignore
const localRecords = JSON.parse(localStorage.getItem('records')) ? JSON.parse(localStorage.getItem('records')) : []

const initialState: RecordsState = {
    records: localRecords
}

export const recordsSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {
        putToLocalStorage(state, action: PayloadAction<Record>) {
            const {answers, correctAnswersCount} = action.payload
            const recordStat = {
                answers,
                correctAnswersCount,
                date: new Date().toLocaleDateString()
            }

            const copyState = state.records
            copyState.push(recordStat)

            localStorage.setItem(`records`, JSON.stringify(copyState))
        }
    },
})

export const {putToLocalStorage} = recordsSlice.actions
