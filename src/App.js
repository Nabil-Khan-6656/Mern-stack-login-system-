import './App.css';
import { BrowserRouter ,  Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
