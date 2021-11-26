import './App.css';
import Restaurent from './components/Restaurent/Restaurent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/restaurent" element={<Restaurent />} />
          <Route path="/meal/:idMeal" element={<MealDetails />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
