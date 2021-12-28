
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddEdit from './pages/AddEdit';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AddReport from './pages/AddReport';
 import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Navbar from './components/layout/Navbar'
// import Navbar from './components/Navbar';

import Modalz from './pages/IssueDetails';



function App() {
  return (
   
  
    <div className="App">
    
       <BrowserRouter>
   
     <Header/>
     {/* <Navbar /> */}
   

     <Routes>
      <Route path="/" element={<Home></Home>}/>
       < Route path="/about" element={<About></About>}/>
       < Route path="/add" element={<AddEdit></AddEdit>}/>
       < Route path="/report/edit" element={<AddReport></AddReport>}/>

       {/* < Route path="/update/:id" element={<AddReport></AddReport>}/>  */}
       < Route path="/view/:id" element={<AddEdit></AddEdit>}/> 
       < Route path="/moda" element={<Modalz></Modalz>}/> 

       <Route  element={<NotFound></NotFound>}/>
      </Routes>
      
   
      </BrowserRouter>

     
      
    </div>
    
   
  );
}

export default App;
  

