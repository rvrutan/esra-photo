import "./App.css";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Wedding from "./pages/Wedding";
import Medical from "./pages/Medical";

function App() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/medical" element={<Medical />} />
        <Route
          path="/"
          element={
            <Home />
          }
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
