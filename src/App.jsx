import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonsList from './PokemonsList';
import PokemonPage from './PokemonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
