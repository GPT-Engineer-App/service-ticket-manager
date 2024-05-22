import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RoleSelection from "./pages/RoleSelection.jsx";
import Index from "./pages/Index.jsx";
import ServiceModerator from "./pages/ServiceModerator.jsx";
import ServiceAgent from "./pages/ServiceAgent.jsx";
import ServiceManager from "./pages/ServiceManager.jsx";
import CreateTicket from "./pages/CreateTicket.jsx";
import ViewTickets from "./pages/ViewTickets.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RoleSelection />} />
        <Route exact path="/customer" element={<Index />} />
        <Route exact path="/servicemoderator" element={<ServiceModerator />} />
        <Route exact path="/serviceagent" element={<ServiceAgent />} />
        <Route exact path="/servicemanager" element={<ServiceManager />} />
        <Route exact path="/create-ticket" element={<CreateTicket />} />
        <Route exact path="/view-tickets" element={<ViewTickets />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;