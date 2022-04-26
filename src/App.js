import { Route, Routes } from "react-router-dom";
import VolunteerDetail from "./Pages/VolunteerDetail/VolunteerDetail";
import Volunteers from "./Pages/Volunteers/Volunteers";
// 794kbfHyxca7QBGF
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Volunteers />} />
        <Route path="/details/:id" element={<VolunteerDetail />} />
      </Routes>
    </div>
  );
}

export default App;
