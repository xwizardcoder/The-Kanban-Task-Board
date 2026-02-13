import React, { useState, useEffect } from "react";
import Card from "./Card";

const Board = () => {
  const [todo, setTodo] = useState(() => {
    return JSON.parse(localStorage.getItem("todo")) || [];
  });

  const [inProgress, setInProgress] = useState(() => {
    return JSON.parse(localStorage.getItem("inProgress")) || [];
  });

  const [done, setDone] = useState(() => {
    return JSON.parse(localStorage.getItem("done")) || [];
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    localStorage.setItem("done", JSON.stringify(done));
  }, [todo, inProgress, done]);

  return (
    <div className="w-full min-h-[80vh] bg-purple-300 p-6 flex flex-wrap gap-6 justify-center">
      <Card
        title="todo"
        todos={todo}
        setTodos={setTodo}
        moveToPending={setInProgress}
      />

      <Card
        title="in progress"
        todos={inProgress}
        setTodos={setInProgress}
        moveToDone={setDone}
        moveBack={setTodo}
      />

      <Card
        title="done"
        todos={done}
        setTodos={setDone}
        moveBack={setInProgress}
      />
    </div>
  );
};

export default Board;
