import { useState } from "react";
import "../assets//style.css";

function TaskEdit({ task, onSaveTask }) {
  const [desc, setDesc] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc });

    setDesc("");
  };
  return (
    <div key={task.id}>
      <form>
        <label htmlFor="desc"></label>
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Введите задачу"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="form"
        />

        <div>
          <button className="buttons" onClick={saveTask}>
            Создать
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskEdit;
