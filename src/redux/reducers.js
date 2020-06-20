import { INCREMENT, REDUCTION } from "./action-types";

export function counter(state={count:0}, action){
    console.log("counter reducer", state, action)
    switch (action.type) {
        case INCREMENT:
            state.count += action.data
            return state
        case REDUCTION:
            state.count -= action.data
            return state
        default:
            return state
    }
}