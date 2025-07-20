import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Home from './pages/Home';
import Curves from './components/Curves';
import Background from './components/background';
import MainHome from './pages/MainHome';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Products from './pages/Products';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/c" element={<Background></Background>}/>
        <Route path="/home" element={<MainHome></MainHome>}/>

        {/* <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
