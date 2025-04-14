import "./App.css";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            <div className="grid place-content-center h-80 text-4xl text-center">
              Photo's grid
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
