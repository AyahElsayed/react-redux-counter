import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()

  const globalstate = useSelector((state)=>state)

  const handleCounterValue = (value) =>{
    if (value < 1) {
          return 'no number'
        }
        return value
  }
  const increase = () => {
    const action = { type: 'increase', payLoad: 4 }
    dispatch(action)
  }

  const decrease = () => {
    const action = { type: 'decrease', payLoad: 2 }
    dispatch(action)
  }

  const toggleCounter = () => {
    dispatch({ type: 'toggleCounter' })
  }

  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>
      {globalstate.showCounter && (
        <>
          <div className='counter'>Counter: {handleCounterValue(globalstate.value)}</div>;
          <div>
            <button className='btn' onClick={increase}>increase +</button>
            <button className='btn' onClick={decrease}>decrease -</button>
          </div>
        </>
      )}
      <div>
        <button className='btn' onClick={toggleCounter}>Hide/Show Counter Number</button>
      </div>
    </div>
  );
}

export default App;
