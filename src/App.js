import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { increase, decrease } from './store/counterSlice';

function App() {
  const dispatch = useDispatch()

  const globalstate = useSelector((state) => state)
  // const handleCounterValue = (value) => {
  //   if (value < 1) {
  //     return 'no number'
  //   }
  //   return value
  // }
  // const increase = () => {
  //   const action = { type: 'increase', payLoad: 4 }
  //   dispatch(action)
  // }

  // const decrease = () => {
  //   const action = { type: 'decrease', payLoad: 2 }
  //   dispatch(action)
  // }

  // const toggleCounter = () => {
  //   dispatch({ type: 'toggleCounter' })
  // }

  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>
      {globalstate && (
        <>
          <div className='counter'>Counter: {globalstate.counter.value}</div>;
          <div>
            <button className='btn' onClick={() => dispatch(increase(5))}>increase +</button>
            <button className='btn' onClick={() => dispatch(decrease(2))}>decrease -</button>
          </div>
        </>
      )}
      {/* <div>
        <button className='btn' onClick>Hide/Show Counter Number</button>
      </div> */}
    </div>
  );
}

export default App;
