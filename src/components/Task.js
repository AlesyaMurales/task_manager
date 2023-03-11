import "../assets//style.css";

function Task({ task, onTglStatus, onDeleted }) {
  return (
    <div key={task.id}>
      <div>
      <div className="task_list">
          {task.complete}
          <button
            className="button_icon"
            onClick={() => onTglStatus(task)}>
            {task.complete && "✅"}
            {!task.complete && "⬜"}
          </button>
          <h4 className="title_text">{task.desc}</h4>
          <button
          className="button_deleted" 
          onClick={() => onDeleted(task.id)}>
          X
          </button>
          </div>
      </div>
    </div>
  );
}

export default Task;
