import React from 'react'

const AcceptTask = ({data}) => {

  
  return (

    <div className='  w-[300px] bg-[#fe486d] p-[12px] rounded-xl flex-shrink-0'>
    <div className='flex justify-between items-center '>  <h3 className='bg-red-400 px-3 py-1 rounded'>{data.category}</h3>
    <h4 className='bg-red-400 text-sm px-3 py-1 rounded'>{data.date}</h4></div>
<h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
<p className='text-sm mt-2 '>{data.description}</p>
<div className='flex justify-between mt-4'>
    <button className='bg-green-500 py-1 px-3 text-sm'>Mark as completed</button>
    <button className='bg-red-500 py-1 px-3 text-sm'>Mark as failed</button>
</div>
</div>
  )
}

export default AcceptTask