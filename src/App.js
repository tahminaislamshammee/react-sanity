import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Post from './Components/Post';
import SinglePost from './Components/SinglePost';
import Project from './Components/Project';
import NavBar from './Components/NavBar';
import { ValueContextProvider } from './Context/ValueContext';

function App() {

  return (
    <ValueContextProvider>
      <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/post' element={<Post/>}>
          <Route path=':id' element={<SinglePost/>}/>
        </Route>
        <Route path='/project' element={<Project/>}/>
      </Routes>
    </BrowserRouter>
    </ValueContextProvider>
    
  );
}

export default App;
