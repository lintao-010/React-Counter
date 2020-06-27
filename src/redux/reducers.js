import { INCREMENT, DECREMENT, ADD_ITEMS } from "./action-types";
import { combineReducers } from "redux"

let initState = {
    count: 0,
    attr2: [],
}

function count(state = initState.count, action) {
    // console.log("counter reducer", state, action)
    let newState
    switch (action.type) {
        case INCREMENT:
            newState= state + action.data
            return newState
        case DECREMENT:
            newState = state - action.data
            return newState
        default:
            return state
    }
}

let attr2 = (state = initState.attr2, action) => {
    let newState
    switch (action.type) {
        case ADD_ITEMS:
            newState = [1, 2, 3, 4]
            return newState
        default:
            return state
    }
}

export default combineReducers(
    {
        count,
        attr2
    }
)