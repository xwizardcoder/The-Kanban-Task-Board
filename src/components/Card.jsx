

import React, { useState } from "react";

const Card = ({
  title,
  todos,
  setTodos,
  moveToPending,
  moveToDone,
  moveBack
}) => {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("Low");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    const newTask = {
      text: input,
      priority: priority
    };

    setTodos([...todos, newTask]);
    setInput("");
    setPriority("Low");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const saveEdit = (index) => {
    const updated = [...todos];
    updated[index].text = editValue;
    setTodos(updated);
    setEditIndex(null);
  };

  const moveTask = (index, targetSetter) => {
    const task = todos[index];
    setTodos(todos.filter((_, i) => i !== index));
    targetSetter((prev) => [...prev, task]);
  };

  const getBorderColor = (priority) => {
    if (priority === "High") return "border-red-500";
    if (priority === "Medium") return "border-yellow-500";
    return "border-green-500";
  };

  return (
    <div className="w-[300px]  bg-white rounded-2xl p-4 flex flex-col gap-3">
      <h1 className="font-bold capitalize">{title}</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter here..."
        className="border p-2 rounded-xl outline-none"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded-xl outline-none"
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button
        onClick={addTodo}
        className="bg-purple-400 text-white rounded-xl p-2"
      >
        Add card
      </button>

      <ul className="space-y-2">
        {todos.map((item, index) => (
          <li
            key={index}
            className={`p-2 rounded border-2 ${getBorderColor(
              item.priority
            )} bg-purple-200 flex flex-col gap-2`}
          >
            {editIndex === index ? (
              <input
                autoFocus
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={() => saveEdit(index)}
                onKeyDown={(e) => e.key === "Enter" && saveEdit(index)}
                className="outline-none p-1 rounded"
              />
            ) : (
              <span
                onClick={() => startEdit(index)}
                className="cursor-pointer"
              >
                {item.text}
              </span>
            )}

            <div className="flex  flex-wrap justify-between">
              {moveToPending && (
                <button
                  onClick={() => moveTask(index, moveToPending)}
                  className="bg-blue-400 text-white px-2 rounded"
                >
                  <p>move to pending</p>
                </button>
              )}

              {moveToDone && (
                <button
                  onClick={() => moveTask(index, moveToDone)}
                  className="bg-green-500 text-white px-2 rounded"
                >
                  Move to Done
                </button>
              )}

              {moveBack && (
                <button
                  onClick={() => moveTask(index, moveBack)}
                  className="bg-pink-400 text-white px-2 rounded"
                >
                  Move Back
                </button>
              )}

              <button
                onClick={() => deleteTodo(index)}
                className="text-red-600 font-bold"
              >
              <img src="./remove.png" alt="" className="w-[20px] h-[20px]"/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;


