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
    <div>
      <header>
        <h1>task {tasks.length}</h1>
        <Link to='/create-task'>
        create a task
        </Link>
      </header>
      {tasks.map(t => (
        <div key={t.id}>
          <h3>{t.title}</h3>
          <p>{t.description}</p>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
          <Link to={`/edit-task/${t.id}`}>
          EDITA
          </Link>
          </div>
      ))
      }

    </div>
  )
}

export default TaskList