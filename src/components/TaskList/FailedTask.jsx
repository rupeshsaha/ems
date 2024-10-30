import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full w-[300px] bg-yellow-400 p-[12px] rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center '>  <h3 className='bg-red-400 px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='bg-red-400 text-sm px-3 py-1 rounded'>{data.date}</h4></div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div>
            <button className='w-full mt-4 bg-red-500 px-3 py-1'>Failed</button>
        </div>
        </div>
  )
}

export default FailedTask