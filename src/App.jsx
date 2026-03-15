import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Officers from "./pages/Officers";
import Initiative from "./pages/Initiative";
import Events from "./pages/Events";
import SubSociety from "./pages/SubSociety";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/initiative" element={<Initiative />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sub-society" element={<SubSociety />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
