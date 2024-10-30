import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 pl-4 flex-nowrap'>
        {
          data.tasks.map((elem,i)=>{
            if(elem.active){
              return <AcceptTask key={i} data={elem}/>
            }
            if(elem.failed){
              return <FailedTask key={i} data={elem}/>
            }
            if(elem.completed){
              return <CompleteTask key={i}  data={elem}/>
            }
            if(elem.newTask){
              return <NewTask key={i}  data={elem}/>
            }
            
          })
        }

       
        
    </div>
  )
}

export default TaskList