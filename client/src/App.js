import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Trivia from './components/Trivia/Trivia';
import Results from './components/Results/Results';;


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/play/:category" element={<Trivia />} />
        <Route path="/results" element={<Results />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
