import "./assets/style.css";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskEdit from "./components/TaskEdit";

function App() {
  const [tasks, setTasks] = useState([
  { desc: "Пойти на тренировку", id: 1},
  ]);

  const onTglStatus = (task) => {
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };


  const onSaveTask = ({ desc }) => {
    setTasks([
      { desc: desc, id: Date.now(), complete: false },
      ...tasks,
    ]);
  };

  const handleDeleteItem = (id) => {
    setTasks((prevState) => 
    prevState.filter((task) => task.id !==id)
    );
  };

  return (
    <div className="App">
      <Header></Header>
      <div>
        {<TaskEdit task={{}} onSaveTask={onSaveTask} />}
        <h1 className="text">Список дел:</h1>
        <Tasks tasks={tasks} onTglStatus={onTglStatus} onDeleted={handleDeleteItem}></Tasks>
        
      </div>
    </div>
  );
}

export default App;
