import './App.css';
import Home from './pages/Home/Home';
import Character from './pages/Character/Character';
import CharacterBuilder from './features/character/components/CharacterBuilder/CharacterBuilder';
import Book from './pages/Book/Book';
import { Routes, Route } from 'react-router-dom';
import { GlobalFonts } from './styles/GlobalFonts'; 
import CharacterInfo from './pages/CharacterInfo/CharacterInfo';

function App() {

  return (
    <>
      <GlobalFonts /> 
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='personagem' element={<Character/>}></Route>
        <Route path='novo-personagem' element={<CharacterBuilder/>}></Route>
        <Route path='livro/:page' element={<Book/>}></Route>
        <Route path='teste' element={<CharacterInfo/>}></Route>
      </Routes>
    </>
  )
}

export default App;