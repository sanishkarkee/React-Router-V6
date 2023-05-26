import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/pages/Navbar';
import Post from './components/pages/Post';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';

function App() {
  let isLogged = true; //login cha bhanera bujne
  let data = {
    st: 'This message is passed from DASHBOARD to LOGIN using STATE props in DASHBOARD Route',
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* -------For pages on system-------- */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/logout' element={<Logout />} />

          {/*-For pages with catagories/ Dynamic Url- */}
          {/* yesma chai aba /post/ pachi j aauda ni huncha ,example /post/mobile,, /post/laptop  */}
          <Route path='/post/:category' element={<Post />} />
          <Route path='/post/:category/:id' element={<Post />} />

          {/* --------Error 404 Page-------- */}
          <Route
            path='*'
            element={<h1>Error 404 Page not found !!</h1>}
          />

          {/* --------Conditionally render a component (login cha bhane Dashboard dekhaune ,login chaina bhane Login ma redirect garne)-------- */}
          <Route path='/login' element={<Login />} />
          <Route
            path='/dashboard'
            element={
              isLogged ? (
                <Dashboard />
              ) : (
                <Navigate to='/login' replace state={data} />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;

// ------ Link for the video: " https://www.youtube.com/watch?v=x25vdOsMaqY "
