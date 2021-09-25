
import './App.css';
import Counter from './Counter';
import {useState} from 'react'

function App() {
  const [state, setstate] = useState(false)
  return (
    <div>

<button onClick={() =>setstate(!state)}> Show/Hide </button>
   

    {state ? <Counter/> : null} {/* Condition Checking */}


    

    </div>
  );
}

export default App;
