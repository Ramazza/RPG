import './App.css';
import Home from './pages/Home/Home';
import Character from './pages/Character/Character';
import CharacterBuilder from './features/character/components/CharacterBuilder/CharacterBuilder';
import Book from './pages/Book/Book';
import { Routes, Route } from 'react-router-dom';
import { GlobalFonts } from './styles/GlobalFonts'; 

function App() {

  return (
    <>
      <GlobalFonts /> 
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='personagem' element={<Character/>}></Route>
        <Route path='novo-personagem' element={<CharacterBuilder/>}></Route>
        <Route path='livro/:page' element={<Book/>}></Route>
      </Routes>
    </>
  )
}

export default App;