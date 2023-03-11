import Task from "./Task";
import "../assets//style.css";

function Tasks({ tasks, onTglStatus, onDeleted }) {
  return (
    <div className="card">
        {tasks.map((task) => (
          <div key={task.id} >
            <Task task={task} onTglStatus={onTglStatus} onDeleted={onDeleted}/>
          </div>
        ))}
    
    </div>
  );
}

export default Tasks;
