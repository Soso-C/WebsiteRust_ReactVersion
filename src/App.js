import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import VipPage from "./components/vipcontain/VipPage";
import Servers from "./components/servers/Servers";
import Ranks from "./components/ranks/Ranks";


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vip/:id" element={<VipPage />} />

        <Route path="/servers" element={<Servers />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
