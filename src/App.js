import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/ServicePage/Services";
import Contact from "./Pages/Contact/Contact";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/services" Component={Services} />
            <Route path="/contact" Component={Contact} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
