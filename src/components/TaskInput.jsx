import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div className="d-flex mb-4">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button class="btn btn-dark" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default TaskInput;