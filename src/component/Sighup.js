import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import  '../css/login.css'
// import '../css/signup.css'

function Sighup(props) {
  const navigate = useNavigate()

  //No change
  const [credentials,setcredentials] = useState({email:"",password:""})
 

    const handleSubmit=  async (e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:4000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            localStorage.setItem('token',json.Authtoken)
            navigate('/Infostudent')

        }else{
            alert("enter the valid email and password")
        }
    }
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
        console.log(credentials);
    }
    // No change
  return (
    
     <div className="L-main">
       <p> .                       </p>
        
        <div className="content">
              
      <div className="container2">
         <h1>Admin Login</h1>
          <hr/>
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="email" id="email" value={credentials.email} onChange={onChange} minLength={5}  required/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" id="password" value={credentials.password}onChange={onChange} minLength={5}  required/>
        
      <button type="submit" className='bton' onClick={handleSubmit}>Login</button><br></br>
      </div>
      {/* <button type="submit" className="w-100" onClick={handleSubmit}>Login</button> */}
    </div>
    </div>
   

  
  )
}

export default Sighup
