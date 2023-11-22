import Header from "./components/Header";
import './style/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          {/* <Route path="/product/:id" element = {<Product/>}/> */}
          {/* for all routes */}
          <Route path="*" element = {<>page not found </>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
