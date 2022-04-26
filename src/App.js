import { Route, Routes } from "react-router-dom";
import Volunteers from "./Pages/Volunteers/Volunteers";
// 794kbfHyxca7QBGF
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Volunteers />} />
      </Routes>
    </div>
  );
}

export default App;
