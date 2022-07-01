
import './App.css';
import { Routes, Route } from "react-router-dom";
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './Components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
