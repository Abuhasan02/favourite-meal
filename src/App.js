import './App.css';
import Restaurent from './components/Restaurent/Restaurent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/restaurent" element={<Restaurent />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
