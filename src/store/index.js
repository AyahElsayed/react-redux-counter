import { createStore } from 'redux'

const initState = { value: 0 }

const countReducer = (state = initState, action) => {
  // console.log(action)

  if (action.type === 'increase') {
    return { ...state, value: state.value + action.payLoad }
  }

  if (action.type === 'decrease') {
    return { ...state, value: state.value - action.payLoad }
  }
  return state
}


const store = createStore(countReducer)

export default store