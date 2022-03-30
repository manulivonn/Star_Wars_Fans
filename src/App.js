import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Inicio from "./pages/Inicio";
import Personajes from "./pages/Personajes";
import Favoritos from "./pages/Favoritos";
import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <Navbar brand="Start Wart Fans" />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/person" element={<Personajes />} />
        <Route exact path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
