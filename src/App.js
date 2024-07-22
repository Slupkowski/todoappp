import React from "react";
import { useState } from "react";
function App() {
  const [message, setMessage] = useState("");
  function addMessage() {
    const node = document.createElement("li");
    const textnode = document.createTextNode(message + <button>x</button>);
    const elbutton = document.createElement("button");
    node.appendChild(textnode, elbutton);
    document.getElementById("list").appendChild(node);
    console.log(node);
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
      <ul id="list"></ul>
      {message !== "" && (
        <p>
          {message} <button>X</button>
        </p>
      )}
    </>
  );
}

export default App;
