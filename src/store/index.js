import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const initState = { value: 0, showCounter: false }

const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += 1;
    },
    decrease: (state, action) => {
      state.value -= 1;
    },
  }
})

const countReducer = (state = initState, action) => {
    // console.log(action)

    if (action.type === 'increase') {
      return { ...state, value: state.value + action.payLoad }
    }

    if (action.type === 'decrease') {
      return { ...state, value: state.value - action.payLoad }
    }

    if (action.type === 'toggleCounter') {
      return { ...state, showCounter: !state.showCounter }
    }
    return state
  }


const store = createStore(countReducer)

export default store