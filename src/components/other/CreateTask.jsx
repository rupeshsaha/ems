import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <div>
        <form className="flex flex-wrap items-start w-full justify-between rounded mt-7 bg-[#3a3a3a] h-[300px] p-5">
            <div className="w-1/2">

            <div>
            <h3>Task Title</h3>
            <input className=" text-black bg-inherit border  rounded p-1" type="text" placeholder="Make a UI design" />
          </div>

            <div className="mt-1">
            {" "}
            <h3>Date</h3>
            <input className="text-black bg-inherit border  rounded p-1" type="date" />
          </div>

          <div className="mt-1">
            {" "}
            <h3>Assign to</h3>
            <input className="text-black rounded p-1 bg-inherit border " type="text" placeholder="Employee Name" />
          </div>

          <div className="mt-1">
            {" "}
            <h3>Category</h3>
            <input className=" text-black bg-inherit border rounded p-1" type="text" placeholder="Design,Dev,etc" />
          </div>
            </div>
          

          <div className="w-1/2">
            {" "}
            <h3>Description</h3>
            <textarea className="rounded bg-inherit border  p-1 w-full min-h-[200px] text-black"></textarea>

            <button className="bg-emerald-500 hover:bg-emerald-600 py-2 px-2 rounded-md w-full ">Create Task</button>
          </div>

         

       
        </form>
      </div>
    </div>
  )
}

export default CreateTask