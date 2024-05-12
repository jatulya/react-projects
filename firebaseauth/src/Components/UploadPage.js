import React, {useState, useEffect} from 'react';
import {auth} from '../firebase-config'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {

  let navigate = useNavigate();
    const logout = async() => {
        await signOut(auth);  
        localStorage.clear()
        navigate('/')
      };


  return (
    <div>
      <h2>Upload Page</h2>
      <button onClick={logout}>Sign out</button>
    </div>
  );
};

export default UploadPage;
