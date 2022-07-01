import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { deleteTask } from "../features/tasks/taskSlice";
import {Link} from 'react-router-dom'



const TaskList = () => {
 const tasks = useSelector(state => state.tasks)
 const dispatch = useDispatch();

 const handleDelete = (id) => {
  dispatch(deleteTask(id));
 }

 console.log(tasks)
  return (
    <div className='w-4/6'>
      <header className='flex justify-between items-center py-4'>
        <h1>task {tasks.length}</h1>
        <Link to='/create-task' className='bg-indigo-600 px-2 py-1 rounded-sm text-sm '>
        create a task
        </Link>
      </header>
      <div className='grid grid-cols-3 gap-4'>
      {tasks.map(t => (
        <div key={t.id} className='bg-neutral-800 p-4 rounded-md'>
          <header className=''>
            <h1 className='text-center'>{t.title}</h1>
            <p className='p-2'>{t.description}</p>
          </header>
         <div className='flex justify-between items-center gapx-2'>
         <button className='bg-red-900 px-2 py-1 rounded-sm text-sm' onClick={() => handleDelete(t.id)}>Delete</button>
          <Link className='bg-green-900 px-2 py-1 rounded-sm text-sm' to={`/edit-task/${t.id}`}>
          EDITA
          </Link>
         </div>
          </div>
      ))
      }
      </div>

    </div>
  )
}

export default TaskList