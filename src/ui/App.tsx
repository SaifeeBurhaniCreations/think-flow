import { Routes, Route } from "react-router-dom";
import './App.css'
import Main from "./pages/Main";
import Landing from "./pages/Landing";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />

      </Routes>
  );
}

export default App
