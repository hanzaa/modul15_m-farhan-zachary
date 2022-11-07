import './App.css';
import{BrowserRouter,Routes, Route} from 'react-router-dom'
import {Main} from './components/Main'
import { Details } from './components/Details';
import { Search } from './components/Search';
import { SearchBar } from './components/SearchBar';
import {Header} from './components/Header';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/details/:isbn" element={<Details/>}></Route>
        <Route path="/search" element={<SearchBar/>}></Route>
        <Route path="/search/:query" element={<Search/>}></Route>
        <Route path="*" element={
          <div className="container">
          <Header/>
          <h1>PAGE NOT FOUND :(</h1>
          </div>
        }></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
