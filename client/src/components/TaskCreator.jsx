import React from "react";

const TaskCreator = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { title, description } = e.target.elements;
    console.log(title.value, description.value);
    title.value = "";
    description.value = "";
  };

  return (
    <form onSubmit={onSubmit} className="m-4 p-2 bg-gray-800 rounded-md">
      <h3 className="text-primary font-extralight">Save a Task</h3>
      <input
        type="text"
        id="title"
        required
        placeholder="title..."
        className="px-1 my-2 w-full bg-gray-800 text-primary text-sm"
      />
      <input
        type="text"
        id="description"
        required
        placeholder="description..."
        className="px-1 my-2 w-full bg-gray-800 text-primary text-sm"
      />
      <button
        type="submit"
        className="bg-green-700 mt-2 text-primary w-full p-1 rounded-md font-light text-sm"
      >
        Save
      </button>
    </form>
  );
};

export default TaskCreator;
