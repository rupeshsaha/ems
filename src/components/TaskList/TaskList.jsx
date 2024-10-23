import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 pl-4 flex-nowrap'>
        <div className='h-full w-[300px] bg-[crimson] p-5 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center '>  <h3 className='bg-red-400 px-3 py-1 rounded'>High</h3>
            <h4 className='bg-red-400 text-sm px-3 py-1 rounded'>20 oct 2024</h4></div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at praesentium consequatur, eaque inventore tempora?</p>
        </div>
        <div className='h-full w-[300px] bg-yellow-400 p-5 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center '>  <h3 className='bg-red-400 px-3 py-1 rounded'>High</h3>
            <h4 className='bg-red-400 text-sm px-3 py-1 rounded'>20 oct 2024</h4></div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at praesentium consequatur, eaque inventore tempora?</p>
        </div>
        <div className='h-full w-[300px] bg-green-400 p-5 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center '>  <h3 className='bg-red-400 px-3 py-1 rounded'>High</h3>
            <h4 className='bg-red-400 text-sm px-3 py-1 rounded'>20 oct 2024</h4></div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at praesentium consequatur, eaque inventore tempora?</p>
        </div>
       
        
    </div>
  )
}

export default TaskList