import React, {useState, useEffect} from 'react';
import {auth} from '../firebase-config'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {

  let navigate = useNavigate();
    const logout = async() => {
        await signOut(auth);  
        navigate('/')
      };
  const currUser = localStorage.getItem('currentUser')
  const id = localStorage.getItem('userId')

  const [test, setTest] = useState([])
  const num = 12
  //backend api
  useEffect(()=>{
    fetch(`/testing/${num}`).then(
      res => res.json()
    ).then(
      data => {
        setTest(data.sum)
        console.log(data.sum)
      })
  },[num])

  return (
    <div>
      <h2>Upload Page</h2>
      <p>Welcome, {currUser}!</p>
      <button onClick={logout}>Sign out</button>
      <div>This is from the backend {test}</div>
    </div>
  );
};

export default UploadPage;
