import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Chat from "./pages/chat";
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Chat />} />
  </Routes>
</BrowserRouter>
);