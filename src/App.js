import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navi from "./components/Navbar/navbar";
// import Footer from "./components/Footer/footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Research from "./pages/Research";
import Jo from "./pages/Jo";
import Wikalang from "./pages/Wikalang";
import Anthro118 from "./pages/A118";
import Purito from "./pages/purito";
import Footer from "./components/Footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navi />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/media" element={<Portfolio />} />
          <Route exact path="/anthropology" element={<Research />} />
          <Route exact path="/jothefish" element={<Jo />} />
          <Route exact path="/wikalang" element={<Wikalang />}/>
          <Route exact path="/a118" element={<Anthro118 />}/>
          <Route exact path="/purito" element={<Purito />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
