//rfce
import React, { useState, useEffect} from 'react';
import { auth } from '../firebase-config';
import {signInWithEmailAndPassword} from 'firebase/auth'
import UploadPage from './UploadPage';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); 
  const [error, setError] = useState(null);
 

  const login = async(e) => {
        e.preventDefault();
    try{
      const user = await signInWithEmailAndPassword(auth, email, password) 
      console.log(user)
      setLoggedIn(true)
    }catch (error){
      console.log(error.message)
      setError(error.message)
    }
  };
  useEffect(() => {
    console.log(loggedIn); // This will log the updated value of loggedIn
  }, [loggedIn]);

  if (loggedIn) {
    return <UploadPage />;
  }
  
  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={login}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage
