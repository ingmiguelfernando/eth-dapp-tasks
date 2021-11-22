import React from "react";
import Switch from "react-switch";

const Task = ({ id, task }) => {
  const { title, description, done, createdAt } = task;

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div
      key={id}
      style={{ minWidth: "284px" }}
      className="m-4 p-2 bg-blue-800 overflow-x-auto"
    >
      <div className="flex pb-3">
        <h3 className="w-5/6 text-primary">{title}</h3>
        <div className="w-1/6 flex pr-3 justify-end">
          <Switch
            onChange={handleChange}
            checked={done}
            offColor="#FB7185"
            height={20}
            width={40}
          />
        </div>
      </div>
      <p className="text-primary text-xs font-light">{description}</p>
      <p className="text-secondary text-xs">Task was created: {createdAt}</p>
    </div>
  );
};

export default Task;
