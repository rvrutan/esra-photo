import "./App.css";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/"
          element={
            <Home />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
