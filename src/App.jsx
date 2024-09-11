import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects_Pages from './pages/Projects_Pages';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects_Pages/:page?" element={<Projects_Pages />} />
      </Routes>
    </Router>
  );
}