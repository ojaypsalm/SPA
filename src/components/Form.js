import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Form = ()=> {

  const [email, setEmail] =useState('')
  const [password, setPassword] = useState('')
  const [telephone, setTelephone] = useState('')
  //const [error, setError] = useState('')

  const emailgrex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordgrex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  const telephonegrex = /^\d{10}$/


  const handLogin = ()=>{
    if(!emailgrex.test(email)){
      //setError('Please enter a valid Email')
      toast.error("Please enter a valid Email");
      return;
    }

    if(!passwordgrex.test(password)){
      //setError('Please enter a valid password')
      toast.warning("Please enter a valid Password");
      return;
    }


    if(!telephonegrex.test(telephone)){
      //setError('Please enter a valid phone number')
      toast.warning("Please enter a valid telephone Number");
      return;
      
    }

    console.log('Successful!!!')
    //setError('successful')
    toast.success("successful");


    
  }

  return ( 
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 25,
      justifyContent: 'center',
      marginTop: "15%",
      // backgroundColor: '#000000',
      // borderRadius: ' solid red',
      // padding: 20
    }}>

      <h1>CURRENT DATE</h1>
      {/* <Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date()}</Moment> */}
      
      <input
        type= 'email'
        placeholder = 'sample@example.com'
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
        style={{
          color: "#00000",
          fontSize:14,
          textDecoration: 'none',
          width: 300,
          padding: 8,
          borderRadius: 10
        }}
      />

      <input
        type= 'password'
        placeholder = 'enter password'
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        style={{
          color: "#00000",
          fontSize:14,
          textDecoration: 'none',
          width: 300,
          padding: 8,
          borderRadius: 10
        }} 
        
      />

      <input
        type= 'tel'
        placeholder = ' phone No: *** **** ****'
        value = {telephone}
        maxLength = {10}
        minLength = {10} 
        onChange={(e)=>setTelephone(e.target.value)}
        style={{
          color: "#00000",
          fontSize:14,
          textDecoration: 'none',
          width: 300,
          padding: 8,
          borderRadius: 10
        }} 
        
      />


      <button style={{
        width: 150,
        padding: 10,
        color: "#ffffff",
        backgroundColor: '#000000',
        borderRadius: 10,
        fontSize: 12
      }} 
      onClick={ handLogin }>Login</button>
      {/* {error && <p style={{color:'red'}}>{error}</p>} */}
      <ToastContainer />

    </div>
    
  );
}

export default Form
