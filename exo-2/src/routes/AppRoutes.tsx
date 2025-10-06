import { Routes, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home";
import About from "../pages/About";
import AppLayout from "../components/AppLayout";
import TaskDetail from "../components/TaskDetail";
import Tasks from "../pages/Tasks";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />}>
          <Route index element={<div>Selectionnez une tache</div>} />
          <Route path=":id" element={<TaskDetail />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
