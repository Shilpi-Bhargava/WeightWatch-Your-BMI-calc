import './App.css';
import React,{useState} from 'react';

function App() {
  const [weight, setweight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  //logic

  let  calcBmi =(e) => {
    e.preventDefault();


    if(weight ===0 || height ===0){
      alert('please enter a valid weight and height')
    }
    else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      //
      if(bmi <25){
        setMessage ('you are underweight')
      }
      else if(bmi>=25 && bmi<30){
        setMessage('you are a healthy a weight person')
      }
      else{
        setMessage('you are overweight')
      }
    }
  }
let reload =() =>{
  window.location.reload()
}



  return (
    <div className="App">
      <div className="container">
        <h1> BMI calculator</h1>
        
        <form onSubmit={calcBmi}>
          <div>
            <label> weight(lbs)</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setweight(e.target.value)} />
          </div>
          <div>
            <label> Height (in)</label>
            <input
              type='text'
              placeholder='Enter height value'
              value={height} 
              onChange={(event) => setHeight(event.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>
              Submit
            </button>
            <button className='btn btn-outline' onClick={reload} type='submit'>
              Reload
            </button>
          </div>
          <div className='center'>
            <h3> your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
