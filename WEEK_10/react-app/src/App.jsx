import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Example</h1>
        <nav>
          <Link to="/">Home</Link> |<Link to="/about"> About</Link> |
          <Link to="/contact"> Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
