import React from "react";
import { useState } from "react";
function App() {
  const [message, setMessage] = useState("");
  function addMessage() {
    alert(message);
  }
  return (
    <>
      <label>
        Wprowadź se zadanie:
        <input
          name="task"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button onClick={addMessage}>cwelicho</button>
      {message !== "" && (
        <p>
          {message} <button>X</button>
        </p>
      )}
    </>
  );
}

export default App;
