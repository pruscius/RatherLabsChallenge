import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import home from './components/Home/Home';
import trivia from './components/Trivia/Trivia';


function App() {

  const Home = new home()
  const Trivia = new trivia()

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={Home} />
        <Route exact path="/play" element={Trivia} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
