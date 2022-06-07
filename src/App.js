import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { increase, decrease } from './store/counterSlice';
import { auth } from './store/authSlice';

function App() {
  const dispatch = useDispatch()

  const globalstate = useSelector((state) => state)

  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>
      {globalstate.auth.login && (
        <>
          <div className='counter'>Counter: {globalstate.counter.value}</div>;
          <div>
            <button className='btn' onClick={() => dispatch(increase(5))}>increase +</button>
            <button className='btn' onClick={() => dispatch(decrease(2))}>decrease -</button>
          </div>
        </>
      )}
      <div>
        <button className='btn' onClick={() => dispatch(auth())}>{globalstate.auth.login?'logout':"login"}</button>
      </div>
    </div>
  );
}

export default App;
