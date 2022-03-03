import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
// import Hobby from "./Hobbies";
// import Login from "./Login";
// import Members from "./Members";
// import ProtectedRoute from "./ProtectedRoute";
// import ReduxCounter from "./ReduxCounter";
// import Registration from "./Register";
import TodoMainApp from "./TodoMainApp";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/todoapp" class="navbar-brand">TodoApp</Link>
        </nav>
        <Routes>
          {/* <Route path="/reduxcounter" element={<ReduxCounter />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/members" element={<Members />}></Route>
          </Route> */}
          <Route path="/todoapp" element={<TodoMainApp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
