import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import VipPage from "./components/vipcontain/VipPage";
import Servers from "./components/servers/Servers"
import Ranks from "./components/ranks/Ranks"
import Store from "./components/store/Store"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/vip" element={<VipPage />} />

        {/* Temporaire se sera uniquement des redirections */}
        <Route path="/servers" element={<Servers />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/store" element={<Store />} />

        <Route path="*" element={<Navigate to="/"/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
