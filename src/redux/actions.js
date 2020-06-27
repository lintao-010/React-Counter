import { INCREMENT, DECREMENT, ADD_ITEMS } from "./action-types";

export const increment = (number) => ({type: INCREMENT, data: number})
export const decrement = (number) => ({type: DECREMENT, data: number})
export const addItems = () => ({type:ADD_ITEMS, data: null})


// async
export const asyncIncrement = (number) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(number))
    }, 1000);
  }
}