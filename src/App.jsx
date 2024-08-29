import React, { useState } from 'react'

function App() {
  var [bmi,setbmi]=useState(0);
  var [bmiMessage,setbmiMessage]=useState("You are ...");
  var [weight,setweight] = useState();
  var [height,setheight] = useState();

  function bmicalc(e){
    e.preventDefault();

    if(weight==0 || height==0){
      alert("Enter a valid number");
    }
    else{
      var bmi = (weight/(height*height));
      setbmi(bmi);
    }

    if(bmi<18.5){
      setbmiMessage("You are underweight")
    }
    else if(bmi>=18.5 && bmi<=24.9)
      setbmiMessage("You are perfect")

    else if(bmi>=25 && bmi<=29.5)
      setbmiMessage("You are Overweight")
    else
    setbmiMessage("You are obese");

  }

  // let reload = () => {
    // window.location.reload()
  // }

  return (
    <>
    <h1 className='font-bold text-[5vw] w-full text-center'>BMI Calculator </h1>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 min-h-80 p-5 shadow-2xl rounded-lg '>
      <form action="">
        <div className='flex flex-col gap-1 '>
        <label htmlFor="" className='font-bold'>Weight(kg):</label>
        <input className='
        border-2 border-zinc-900 rounded-lg p-1' type="number" name="" id="" value={weight} onChange={(e)=>setweight(e.target.value)} placeholder='Enter your weight' />
        </div>
        <div className='flex flex-col gap-1'>
        <label htmlFor="" className='font-bold'>Height(meters):</label>
        <input className='border-2 border-zinc-900 rounded-lg p-1' type="number" placeholder='Enter Your height' value={height} onChange={(e)=>setheight(e.target.value)} />
        </div>
        <input type="submit" value="Submit" onClick={bmicalc} className='mt-2 w-full bg-blue-600 text-white rounded-lg py-2 text-lg font-semibold'/>
        <button className='mt-2 w-full border-2 border-zinc-900  rounded-lg py-2 text-lg font-semibold'>Reload</button>
        <h1 className='font-bold w-full text-center'>Your BMI is: {bmi}</h1>
        <p className='w-full text-center'>{bmiMessage}</p>
      </form>
      </div>
    </>
  )
}

export default App