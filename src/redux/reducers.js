import { INCREMENT, DECREMENT } from "./action-types";

export function counter(state={count: 0}, action){
    console.log("counter reducer", state, action)
    switch (action.type) {
        case INCREMENT:
            let newState = {...state}
            newState.count += action.data
            return newState
        case DECREMENT:
            return {count: state.count - action.data}
        default:
            return state
    }

}