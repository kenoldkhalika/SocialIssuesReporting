
import './App.css';
import {BrowserRouter, Routes, Route,useLocation} from "react-router-dom";
import AddEdit from './pages/AddEdit';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Home2 from './pages/Home2'
import AddReport from './pages/AddReport';
 import '../node_modules/bootstrap/dist/css/bootstrap.css';
//  import { Footer } from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Charts from './pages/Charts';
import Issues from './pages/Issues';
import Form from './pages/Form'
import Navbar from './components/layout/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import IssueDetails from './pages/IssueDetails';
import Open from './pages/Open';
import Pending from './pages/Pending';
// import Navbar from './components/Navbar';

import Modalz from './pages/IssueDetails';



function App() {
 
  return (
   
    
  
    <div className="App" >
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home></Home>}/> </Routes>
       <Routes>
    < Route path="/login" element={<Home></Home>}/> </Routes>

     
    

     <Routes>
     
    
     
       < Route path="/about" element={<About></About>}/>
       < Route path="/open" element={<Open></Open>}/>

       < Route path="/form" element={<Form></Form>}/>
       < Route path="/issue-details" element={<IssueDetails ></IssueDetails>}/>
       < Route path="/pending" element={<Pending></Pending>}/>
       < Route path="/add" element={<AddEdit></AddEdit>}/>

       < Route path="/issues" element={<Issues></Issues>}/>
       < Route path="/charts" element={<IssueDetails></IssueDetails>}/>
       < Route path="/home-page" element={<Home2></Home2>}/>
       {/* < Route path="/charts" element={<Footer></Footer>}/> */}
       < Route path="/report/edit" element={<AddReport></AddReport>}/>

       {/* < Route path="/update/:id" element={<AddReport></AddReport>}/>  */}
       < Route path="/view/:id" element={<AddEdit></AddEdit>}/> 
       < Route path="/moda" element={<Modalz></Modalz>}/> 

       <Route  element={<NotFound></NotFound>}/>
      
      </Routes>
      {/* <Footer /> */}
    
      </BrowserRouter>

         
     
    </div>
    
   
  );
}

export default App;
  

