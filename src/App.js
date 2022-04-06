import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VipPage from "./components/vipcontain/VipPage";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vip" element={<VipPage />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
