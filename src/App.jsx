import { BrowserRouter, Routes, Route } from "react-router-dom";

import Store from "./pages/Store";
import Todo from "./pages/Todo";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Store />} />

        <Route path="/todo" element={<Todo />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;