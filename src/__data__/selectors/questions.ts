import { RootState } from "../store";

export const hasErrorSelector = ((state: RootState) => state.questions.isError)
export const isFetchingSelector = ((state: RootState) => state.questions.isFetching)
export const questionsSelector = ((state: RootState) => state.questions.questions)