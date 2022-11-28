import React,{useState,useContext} from 'react'
// import { NavLink } from 'react-router-dom'
import '../css/certificate.css'
import noteContext from '../contex/userdetails/noteContex'
import Certificatetemplate from './Certificatetemplate'
export default function StudentCer() {
  const noteDetails = useContext(noteContext)
  const {findcertificate,notes}=noteDetails
  const [searchinfo,setsearchinfo]=useState({csearch:""})
  const infoHandel=(e)=>{
    setsearchinfo({...searchinfo,[e.target.name]:e.target.value})
  }
  const handelClick=(e)=>{
    setsearchinfo({
        csearch:""
      })
      findcertificate(searchinfo.csearch)
    //  console.log("click");
}
  return (
    <div className='demo'>

   <div className='searchbar'> 
    <div className="form-outline">
      <input type="search" placeholder="Type Your Roll" name="csearch" id="csearch" value={searchinfo.csearch} onChange={infoHandel} autoComplete="off" required/>
         <button className="btnbtn"> <i className="fas fa-search" onClick={handelClick}></i></button> 
      </div>
</div>
  <div>
  {
    notes.map((iteam)=>{
      return (
        <Certificatetemplate iteam={iteam}/>
        )
                      
    })
    }
  </div>
</div>
  )
}
