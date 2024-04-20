import './App.css';
import {useState} from "react"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase-config'

function App() {
  
  //take the data from the form
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  //for registering a new user
  const register = async() => {
    try{
      const user = await createUserWithEmailAndPassword(auth, regEmail, regPassword) //returns a promise
      console.log(user)
    }catch (error){
      console.log(error.message)
    }
  };

  const login = async() => {};
  const logout = async() => {};

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input 
          placeholder="Email..." 
          onChange={(e) => {setRegEmail(e.target.value)}}/>
        <input
          placeholder="Password..."
          onChange={(e) => {
            setRegPassword(e.target.value);
          }}
        />
        <button onClick={register}>Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(e) => {
            setLoginPass(e.target.value);
          }}
        />
        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default App;
