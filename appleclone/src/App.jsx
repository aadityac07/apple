
import './App.css';
import {Route , Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import './components/apple.css'
import Store from './components/Store';
import HomeContent from './components/Homecontent';
import Navbar from './components/Navbar';
import NavbarStore from './components/NavbarStore';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/Homecontent' element = {<HomeContent/>}/>
        <Route path='/Navbar' element = {<Navbar/>}/>
        <Route path='/NavbarStore' element = {<NavbarStore/>}/>
        <Route path='/store' element= {<Store/>}/>
      </Routes>
    </div>
  );
}

export default App;
