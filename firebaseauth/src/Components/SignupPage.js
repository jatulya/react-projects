// SignUp.jsx
import React, {useEffect} from 'react';
import {auth, db} from '../firebase-config'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {setDoc, doc} from 'firebase/firestore'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [name, setName] = useState("")
  const [regEmail, setRegEmail] = useState("")
  const [regPassword, setRegPassword] = useState("")
  const [institution, setInstitution] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const nav = useNavigate()

  const register = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, regEmail, regPassword);
      const regUser = userCredential.user; 
      console.log(regUser)    
      
      if (userCredential && regUser) {
        const userNew = doc(db, 'Users',  regUser.uid); 
        await setDoc(userNew, {
          Name:name, 
          Email:regEmail,
          Institution:  institution,
        })
        
        localStorage.setItem('userId', regUser.uid); 
        localStorage.setItem('currentUser', name)         
        console.log(localStorage.getItem('userId'))
        nav('/profile')
    }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const currUser = localStorage.getItem('currentUser')
  const id = localStorage.getItem('userId')

  const [test, setTest] = useState([])
  //backend api
  useEffect(()=>{
    fetch(`/testing/${id}`).then(
      res => res.json()
    ).then(
      data => {
        setTest(data.sum)
        console.log(data.sum)
      })
  },[id])
  
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>

      <div className="inputs">
        <div className='input'>
          <input type="text" placeholder='UserName'
          onChange={(e) => {setName(e.target.value)}} />
        </div>

        <div className='input'>
          <input type="email" placeholder='Email Id'
          onChange={(e) => {setRegEmail(e.target.value)}} />
        </div>

        <div className='input'>
          <input type="password" placeholder='Password'
          onChange={(e) => {
            setRegPassword(e.target.value);
          }} />
        </div>

        <div className='input'>
          <input type="Institution " placeholder='Institution'
          onChange={(e) => {
            setInstitution(e.target.value);
          }} />
        </div>

      </div>

      <div className='submit-container'>
        <div className='submit' onClick={register}>Sign Up</div>
        {errorMsg && <div>{errorMsg}</div>}
      </div>
    </div>

  );
}

export default SignUp;
