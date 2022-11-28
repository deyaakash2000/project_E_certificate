import React, { useState, useContext, useEffect } from 'react'
import noteContext from '../contex/userdetails/noteContex'
import Notesiteam from '../component/Notesiteam'
import {useNavigate} from 'react-router-dom'
import '../css/Studentregister.css'
import '../css/logout.css'
export default function Infostudent() {
    const navigate = new useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem('token')
        navigate('/')
      }
        useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/signup')
    }
  })
    const noteDetails = useContext(noteContext)
    const { addetails, fetchNotes, notes } = noteDetails //Destructuring
    const [addInfo, setInfo] = useState({
        title: "",
        email: "",
        department: "",
        roll: ""
    })
    useEffect(() => {
        fetchNotes()
    })

    const infoHandel = (e) => {
        setInfo({ ...addInfo, [e.target.name]: e.target.value })
        console.log(addInfo)
    }
    const handelClick = (e) => {
        setInfo({
            title: "",
            email: "",
            department: "",
            roll: "",
            year:""
        })
        addetails(addInfo.title, addInfo.email, addInfo.department, addInfo.year ,addInfo.roll )
        console.log(addInfo)
        
    }
    return (
        <>

        <div className='back1'>
        {!localStorage.getItem('token')?<form className='d-flex'>
      </form>:<button type="button" class="logoutBtn " onClick={handleLogout}>Logout</button>
        }
    
         <div className="content1">
            <div className="container1">

                <h1><i>Enrolled Student</i></h1>

                  <br/>
                    
                <label htmlFor="email"><b><i>Name :</i></b></label>
                <input type="text" placeholder="Enter  Name" name="title" id="title" value={addInfo.title} onChange={infoHandel} minLength={5} autoComplete="off" required/>

                <label htmlFor="email"><b><i>Email:</i></b></label>
                <input type="text" placeholder="Enter  Email" name="email" id="email" value={addInfo.email} onChange={infoHandel} minLength={5}  required/>

                <label htmlFor="email"><b><i>Stream :</i></b></label>
            <select id="selectdiv" name="department" required value={addInfo.department} onChange={infoHandel}>
               <option selected >Choose  stream</option>
               <option>BACHELOR OF COMPUTER APPLICATION (BCA)</option>
               <option>BACHELOR OF BUSINESS ADMINISTRATOR (BBA)</option>
               <option>MASTER OF COMPUTER APPLICATION (MCA)</option>
               <option>MASTER OF COMPUTER SCIENCE (MSc.)</option>
            </select>
        <label/>
        <label htmlFor="passing year"/><b><i>On going Year :</i></b>
        <select id="selectdiv" name="year"  value={addInfo.year} onChange={infoHandel} required>
           <option selected>Choose Ongoing year</option>
           <option>First-Year</option>
           <option>Second-Year</option>
           <option>Third-Year</option>
           
        </select>
    <lable/>
        <label htmlFor="roll"><b><i>Roll :</i></b></label>
        <input type="text" placeholder=" Enter roll" name="roll" id="roll" value={addInfo.roll} onChange={infoHandel} minLength={5} autoComplete="off" maxlength={4} required/>
        <button type="button" className="btn btn-primary" onClick={handelClick} disabled={addInfo.roll.length <=3? addInfo.title.length <= 3:""} >Submit</button>
    
            </div>
            </div>
            </div>
            {/* </div> */}
            
            <div  className='row'>
                <h1>Details</h1>
                {
                    notes.map((iteam) => {
                        return (
                            <Notesiteam iteam={iteam} />
                        )

                    })
                }
            </div>
    
        </>
    )
}
