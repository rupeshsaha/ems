import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl'>Hello <br /><span className='text-emerald-400 text-3xl font-medium'>Rupesh👋</span></h1>
    <button className='bg-red-600 rounded-md py-2 px-5'>Log Out</button>
    </div>
  )
}

export default Header