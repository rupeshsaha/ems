import React, { useState } from 'react'

const Header = (props) => {

  const [userName, setUserName] = useState('')



  const logoutHandler = ()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser('')
    
   
  }
  
  return (
    
    <div className='flex justify-between items-end'>
      
      
      
        <h1 className='text-2xl'>Hello <br /><span className='text-emerald-400 text-3xl font-medium'>{props.data ? props.data.name : 'Admin' }👋</span></h1>
    <button onClick={logoutHandler} className='bg-red-600 rounded-md py-2 px-5'>Log Out</button>
    </div>
  )
}

export default Header