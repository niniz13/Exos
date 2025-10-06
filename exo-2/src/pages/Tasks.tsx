import { Outlet } from "react-router-dom";
import { fetchTasks } from "../services/taskService";
import { setToken } from "../services/loginService";
import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    fetchTasks()
      .then((data) => {
        console.log(data);
        setTasks(data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
          <input
            type="checkbox"
            name="completed"
            id={`completed-${task.id}`}
            checked={task.completed}
            readOnly
          />
        </li>
      ))}
      <Outlet />
    </div>
  );
}

export default Tasks;
