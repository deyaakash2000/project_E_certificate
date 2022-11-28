import React,{useRef} from 'react'
import ReactToPrint from 'react-to-print'
import logo from '../img/clogo.jpg'
import background from '../img/background.jpg'
import sign1 from '../img/sign1.jpeg'
import sign2 from '../img/sign2.jpeg'
import '../css/Certificatedesign.css'
{/* <h1>{iteam.title}</h1>
<p>{iteam.email}</p> */}
export default function Certificatetemplate(props) {
  const ref = useRef()
  const{iteam}=props
  return (
    <>
       

      <div className="container-fluid my-5" ref={ref}>
        <div className='back'>
        
        
        <div className="logo1">         
      <img src={logo} width="200px" height="150px" alt="..." />
      </div>
      <div className="logo2">         
      <img src={logo} width="200px" height="150px" alt="..." />
      </div>
      
      <center>
        <div className="first">
          <p>CERTIFICATE OF COMPLETION</p>  
        </div>
    </center>
    <center>
   
  <div className="second">
    <p>This is to certify that</p>  
  </div>
    </center>
  <center>
    <div className="third">
      <p>{iteam.title}</p>
  
    </div>
  </center>
  <center>
    <br/>
  <p><h1><i className='of'>Of</i></h1></p>
</center>



<center>
  <br/>
  <div className="fourth">
   <p> {iteam.department}</p>
  </div>
</center>
<center>
  <br/>
  <div className="fourth">
    <p>{iteam.year}</p>  
   </div>
    </center>
    <center>
      <div className='fifth'>
        <br/>
        <p>
        Has successfully completed the training course of <span>React-JS</span><br/>
           Course Duration - 15 Days<br/>
          at Techno College Hooghly , 2022 <br/>
          {/* {iteam.date} */}
        </p>

        </div> 
    </center>
    
    <pre></pre>
         <div className="sign1">         
                <img src={sign1} width="300px" height="168px" alt="..." />
         </div>
         <div className="sign2">         
          <img src={sign2} width="300px" height="168px" alt="..." />
   </div>
   <div className='da'>
    
   <center>Date :- 19-11-2022 </center> 

   </div> 
   </div>
   
   </div> 
   <div className="print">
    <div className="certifitares">
      <div className="template">

      </div>
    </div>
    <ReactToPrint trigger={()=><button className='down'><i class="fa fa-download "></i></button>}content={()=>ref.current} />
   </div>
    </>
  )
}
