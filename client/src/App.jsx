import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import Details from "./pages/Details"
function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <h1>Movies</h1>
        <Link to="/">Home</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
