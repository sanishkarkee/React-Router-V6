import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<h1>Hello React Router</h1>} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
