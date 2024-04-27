import React from 'react';
import {auth} from '../firebase-config'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  let navigate = useNavigate();
    const logout = async() => {
        await signOut(auth);  
        navigate('/')
      };
  // Assuming user data is passed as props
  const currUser = localStorage.getItem('currentUser')
  return (
    <div>
      <h2>Upload Page</h2>
      <p>Welcome, {currUser}!</p>
      <button onClick={logout}>Sign out</button>
    </div>
  );
};

export default UploadPage;
