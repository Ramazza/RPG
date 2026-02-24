import './App.css';
import Home from './pages/home/home';
import Character from './pages/character/character';
import CharacterModal from './components/characterModal/characterModal';
import { Routes, Route } from 'react-router-dom';
import { GlobalFonts } from './styles/GlobalFonts'; 

function App() {

  return (
    <>
      <GlobalFonts /> 
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='personagem' element={<Character/>}></Route>
        <Route path='novo-personagem' element={<CharacterModal/>}></Route>
      </Routes>
    </>
  )
}

export default App;