
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import CardDeatails from "./components/CardDeatails";
import Cards from "./components/Cards";
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
        <Route path='/' element={<Home />} />
        <Route path='/add_to_card' element={<Cards />} />
        <Route path='/cart/:id' element={<CardDeatails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
