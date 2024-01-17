
import './App.css';
import Textfield from './Components/Textfield';
import Checkbox from './Components/Checkbox';
import Radio from './Components/Radio';
import { useState  } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (

    <>

      <div className="container">
        <h1 align="center">Personal Details</h1 >
        <Textfield />
        <h1 align="center">Select Gender</h1 >
        <Radio />
        <h1 align="center">Select Sports</h1 >
        <Checkbox />
        <div align="center" className="">

          {counter}


        </div>

        <h1 align="center" className='my-5'><button className='btn btn-primary' onClick={()=>{setCounter(prev=>prev+1)}}> Click Me</button></h1>

      </div>

    </>





  );
}

export default App;
