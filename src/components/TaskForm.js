import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import {v4 as ui} from 'uuid';
import {useNavigate, useParams} from 'react-router-dom'


const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
      ...task,
       id: ui()}));
       navigate('/')
    
  };

  useEffect(()=> {
      console.log(params)
  }, [])

  return (
    <form>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        cols="30"
        rows="10"
        placeholder="description"
        onChange={handleChange}
      ></textarea>
      <button onClick={handleSubmit}>Guardar</button>
    </form>
  );
};

export default TaskForm;
