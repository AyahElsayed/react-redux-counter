import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const state = useSelector((state) => {
    if (state.value < 1) {
      return 'no number'
    }
    return state.value
  })

  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>
      <div className='counter'>Counter: {state}</div>;
      <div>
        <button className='btn'>increase +</button>
        <button className='btn'>decrease -</button>
      </div>
      <div>
        <button className='btn'>Hide/Show Counter Number</button>
      </div>
    </div>
  );
}

export default App;
