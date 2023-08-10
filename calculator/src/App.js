import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import { Route,Routes, } from 'react-router-dom';
import Register from './components/Register/Register';
import { Profile } from './components/Profile/Profile';


function App() {
  
  return (
     <div className="App">
          <Navbar/>
          <Routes>
            <Route path="*" element={<Login/>}/>
            <Route path="calc" element={<div className='calcApp'><Calculator className="calc" id={"calc1"}/><Calculator className="calc" id={"calc2"}/></div>}/>
            <Route path="signin" element ={<Register/>}/>
            <Route path='profile' element = {<Profile/>}/>
          </Routes>
        </div> 
    
  
    //   <Routes>
    //   <Route path='/' element={<App/>} /> 
    //   <Routes path="/" element={<App/>} /> 
    //       <Route path=""/>
    //       <Route path=""/>
    //       <Route path=""/> 
    //      <div className="App">
    //       <Navbar/>
    //       <Calculator/>
    //       <Login/>
    //     </div> 
    //  </Routes> 

    
  );
}

export default App;
