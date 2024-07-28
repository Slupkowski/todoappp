import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [tasks, setTasks] = useState([]);

  const addMessage = () => {
    if (message.trim() !== "") {
      setTasks([...tasks, message]);
      setMessage("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <label>
        Wprowadź se zadanie:
        <input
          name="task"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button onClick={addMessage}>Dodaj zadanie</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
