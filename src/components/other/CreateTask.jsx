import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  
  const [newTask,setNewTask] = useState({})

  const [userData,setUserData] = useContext(AuthContext)

  const submitHandler = (e)=>{
    e.preventDefault()

    setNewTask ({taskTitle,taskDescription,date,category,active : false, newTask: true,failed: false,completed : false})

  const data = userData

  data.forEach((elem)=>{
    if(assignTo == elem.name){
      elem.tasks.push(newTask)
      {elem.taskCount.newTask++}
      
    }
    
  })
  setUserData(data)
console.log(data);


   setAssignTo('')
   setTaskTitle('')
   setCategory('')
   setDate('')
   setTaskDescription('')
    
    
    
  }


  return (
    <div>
        <div>
        <form onSubmit={submitHandler} className="flex flex-wrap items-start w-full justify-between rounded mt-7 bg-[#3a3a3a] h-[300px] p-5">
            <div className="w-1/2">

            <div>
            <h3>Task Title</h3>
            <input
            value ={taskTitle}
            onChange={(e)=>{setTaskTitle(e.target.value)}}
            className=" text-black bg-inherit border  rounded p-1" type="text" placeholder="Make a UI design" />
          </div>

            <div className="mt-1">
            {" "}
            <h3>Date</h3>
            <input
             value ={date}
             onChange={(e)=>{setDate(e.target.value)}}
            className="text-black bg-inherit border  rounded p-1" type="date" />
          </div>

          <div className="mt-1">
            {" "}
            <h3>Assign to</h3>
            <input
             value ={assignTo}
             onChange={(e)=>{setAssignTo(e.target.value)}}
            className="text-black rounded p-1 bg-inherit border " type="text" placeholder="Employee Name" />
          </div>

          <div className="mt-1">
            {" "}
            <h3>Category</h3>
            <input
             value ={category}
             onChange={(e)=>{setCategory(e.target.value)}}
            className=" text-black bg-inherit border rounded p-1" type="text" placeholder="Design,Dev,etc" />
          </div>
            </div>
          

          <div className="w-1/2">
            {" "}
            <h3>Description</h3>
            <textarea
             value ={taskDescription}
             onChange={(e)=>{setTaskDescription(e.target.value)}}
            className="rounded bg-inherit border  p-1 w-full min-h-[200px] text-black"></textarea>

            <button className="bg-emerald-500 hover:bg-emerald-600 py-2 px-2 rounded-md w-full ">Create Task</button>
          </div>

         

       
        </form>
      </div>
    </div>
  )
}

export default CreateTask