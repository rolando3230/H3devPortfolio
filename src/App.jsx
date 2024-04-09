import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from "./Pages/Welcome/Welcome";
import NoPage from "./Pages/NoPage";

function App() {
  const [count, setCount] = useState(0);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
