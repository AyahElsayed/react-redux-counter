import { createSlice, createStore } from '@reduxjs/toolkit'

const initState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  }
})

// const countReducer = (state = initState, action) => {
//     // console.log(action)

//     if (action.type === 'increase') {
//       return { ...state, value: state.value + action.payLoad }
//     }

//     if (action.type === 'decrease') {
//       return { ...state, value: state.value - action.payLoad }
//     }

//     if (action.type === 'toggleCounter') {
//       return { ...state, showCounter: !state.showCounter }
//     }
//     return state
//   }


const store = createStore(counterSlice.reducer)
export const { increase, decrease } = counterSlice.actions
export default store