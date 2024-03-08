import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/services" Component={Services} />
            <Route path="/contact" Component={Contact} />
         </Routes>
      </div>
   );
}

export default App;
