import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'



const AllTask = () => {

 
  const [userData,setUserData] = useContext(AuthContext)
  
  
   
    
  return (
    <div className='bg-[#141414] p-5 mt-5 rounded'>
            <div className='flex justify-between bg-red-400 py-2 rounded-sm px-1 mb-2'> <h2 className='w-1/5'>Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed Task</h5>
            <h5 className='w-1/5'>Failed Task</h5>
            </div>
           
        {userData.map((elem,id)=>{
            return  <div key={id} className='border-2 border-red-400 py-2 px-4 mb-2 flex justify-between rounded'>
            <h2 key={'name'} className='w-1/5 border-black'>{elem.name}</h2>
            <h3 key={'newTask'} className='w-1/5 border-black'>{elem.taskCount.newTask}</h3>
            <h5 key={'active'} className='w-1/5 border-black'>{elem.taskCount.active}</h5>
            <h5 key={'completed'} className='w-1/5 border-black'>{elem.taskCount.completed}</h5>
            <h5 key={'failed'} className='w-1/5 border-black'>{elem.taskCount.failed}</h5>
         
        </div>
        })}
       
        
    </div>
  )
}

export default AllTask