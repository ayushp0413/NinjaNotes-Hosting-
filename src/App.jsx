import React, { useState } from 'react'
import Temp from './components/Temp'
import {VelocityScroll} from './components/magicui/VelocityScroll'

const App = () => {

  const [count, setCount] = useState(0)

  function increaseHandler(){
    setCount(count+1)
  }

  function decreaseHandler(){
    setCount(count-1)
  }


  return (
    <div>
      <Temp/>


      <VelocityScroll
      text="Velocity Scroll"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />



      <div className='h-60 w-80 mx-auto flex flex-col justify-center items-center my-20 border-2 border-blue-900 rounded-lg '>
      <h1 className='text-5xl'>{count}</h1>
      <h1 className='text-5xl'>{setCount}</h1>
      <div className='flex gap-x-4 mt-8'>
      <button className='h-10 w-20 text-4xl  bg-red-500 border-2 border-black' onClick={increaseHandler}>+</button>
      <button className='h-10 w-20 text-4xl  bg-red-500 border-2 border-black' onClick={decreaseHandler}>-</button>
      </div>
      </div>
    </div>
  )
}

export default App