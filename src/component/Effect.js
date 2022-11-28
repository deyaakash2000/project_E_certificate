import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Effect() {
    const navigate = useNavigate()
useEffect(()=>{
  if(!localStorage.getItem('token')){
    navigate('/')
  }
})
  return (

    <div>
      
    </div>
  )
}
