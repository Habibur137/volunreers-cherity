import { Route, Routes } from "react-router-dom";
import AddVolunteer from "./Pages/AddVolunteer/AddVolunteer";
import Header from "./Pages/Header/Header";
import Login from "./Pages/LoginPage/Login/Login";
import Register from "./Pages/LoginPage/Register/Register";
import ManageVolunteer from "./Pages/ManageVolunteer/ManageVolunteer";
import VolunteerDetail from "./Pages/VolunteerDetail/VolunteerDetail";
import Volunteers from "./Pages/Volunteers/Volunteers";
// 794kbfHyxca7QBGF
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Volunteers />} />
        <Route path="/details/:id" element={<VolunteerDetail />} />
        <Route path="/addservice" element={<AddVolunteer />} />
        <Route path="/manage" element={<ManageVolunteer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
