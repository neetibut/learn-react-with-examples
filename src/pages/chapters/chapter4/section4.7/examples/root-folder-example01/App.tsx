import React, { useState } from "react";

interface Task {
  id: number;
  name: string;
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Learn TypeScript" },
    { id: 2, name: "Practice React" },
  ]);

  function addTask(taskName: string) {
    const newTask = { id: Date.now(), name: taskName };
    setTasks([...tasks, newTask]);
  }

  function updateTask(id: number, newName: string) {
    const updatedTasks = tasks.map(function (task) {
      return task.id === id ? { ...task, name: newName } : task;
    });
    setTasks(updatedTasks);
  }

  function removeTask(id: number) {
    const filteredTasks = tasks.filter(function (task) {
      return task.id !== id;
    });
    setTasks(filteredTasks);
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul className="list-disc list-inside text-start text-xl">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}{" "}
            <button
              onClick={() => updateTask(task.id, `${task.name} (Updated)`)}
            >
              Update
            </button>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTask("New Task")}>Add Task</button>
    </div>
  );
}

export default TaskList;
