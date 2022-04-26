import { Route, Routes } from "react-router-dom";
import AddVolunteer from "./Pages/AddVolunteer/AddVolunteer";
import ManageVolunteer from "./Pages/ManageVolunteer/ManageVolunteer";
import VolunteerDetail from "./Pages/VolunteerDetail/VolunteerDetail";
import Volunteers from "./Pages/Volunteers/Volunteers";
// 794kbfHyxca7QBGF
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Volunteers />} />
        <Route path="/details/:id" element={<VolunteerDetail />} />
        <Route path="/addservice" element={<AddVolunteer />} />
        <Route path="/manage" element={<ManageVolunteer />} />
      </Routes>
    </div>
  );
}

export default App;
