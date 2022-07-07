import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Info from "./components/Info";

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex justify-center h-full">

        <div className="w-1/4  bg-[#3798ff]">
          <Info />
        </div>

        <div className="w-3/4 flex items-center justify-around">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/create-task" element={<TaskForm />} />
              <Route path="/edit-task/:id" element={<TaskForm />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
