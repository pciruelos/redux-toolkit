import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id:"1",
    title:"Task Title number 1",
    description: "Task Description number 2",
    completed: false
  },
  {
    id:"2",
    title:"Task Title number 1",
    description: "Task Description number 2",
    completed: false
  }
]

export const taskSlice = createSlice({
  name:'tasks',
  initialState,
  reducers:{
    addTask: (state,action) => {
      state.push(action.payload)
      console.log(state, action.payload)
    },
    deleteTask: (state,action) => {
      const taskFound = state.find(task => task.id === action.payload)
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1)
      }
      
    },
    editTask: (state,action) => {
      const {id,title,description} = action.payload
      const foundtask = state.find(t => t.id === id) 
      if (foundtask) {
        foundtask.title = title
        foundtask.description = description
      }      
    }
    
  }
})

export const {addTask,deleteTask,editTask} = taskSlice.actions
 
export default taskSlice.reducer