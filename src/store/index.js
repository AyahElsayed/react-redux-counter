import {createStore} from 'redux'

const initState = { value: 0 }

const countReducer = (state = initState, action) => {

  return state
}


const store = createStore(countReducer)

export default store