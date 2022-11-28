
import './App.css';
import Home from './component/Home'
import Sighup from './component/Sighup'
// import Signin from './component/Signin'
import NoteState from './contex/userdetails/NoteState';
import Infostudent from './component/Infostudent'
import StudentCer from './component/StudentCer';
import Contact from './component/Contact';
import About from './component/About';
import Service from './component/Searvice';
// import Footer from './component/'
// import Frontsection from './component/Frontsection';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <>
    <NoteState>
    <BrowserRouter>
    <Routes>

      <Route exact path="/" element={<Home></Home>}/>
      <Route exact path="/sighup" element={<Sighup></Sighup>}/>
      <Route exact path="/Infostudent" element={<Infostudent/>}/>
      <Route exact path="/certificate" element={<StudentCer/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Service" element={<Service/>}/>

      {/* <Route exact path="/signin" element={<Signin/>}/> */}
    </Routes>
  </BrowserRouter>
  </NoteState>

  </>
    </div>
  );
}

export default App;
