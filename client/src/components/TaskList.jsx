import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = () => {
  const taskList = useSelector((state) => state.dappApp.tasks);

  return (
    <div className="overflow-y-auto">
      {taskList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
