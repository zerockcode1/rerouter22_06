import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import ListPage from "./pages/ListPage";
import PostPages from "./pages/post";
import TodoPage from "./pages/todo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post/*" element={<PostPages />} />
        <Route path="/todo/*" element={<TodoPage />} />
      </Routes>

    </>
  );
}

export default App;
