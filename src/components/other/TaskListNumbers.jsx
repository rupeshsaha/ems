import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between gap-5 max-w-screen mt-10 '>
        <div className='rounded-xl py-6 px-9 w-1/2 p-10 bg-blue-500'>
        <h2 className="text-3xl font-semibold">{data.taskCount.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>

        </div>
        <div className='rounded-xl py-6 px-9 w-1/2 p-10 bg-yellow-500'>
        <h2 className="text-3xl font-semibold">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium">Accepted</h3>

        </div>
        <div className='rounded-xl py-6 px-9 w-1/2 p-10 bg-green-500'>
        <h2 className="text-3xl font-semibold">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium">Completed </h3>

        </div>
        <div className='rounded-xl py-6 px-9 w-1/2 p-10 bg-red-500'>
        <h2 className="text-3xl font-semibold">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium">Failed</h3>

        </div>
       
    </div>
  )
}

export default TaskListNumbers