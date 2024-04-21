import './App.css';
import {useState, useEffect} from "react"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth, db} from './firebase-config'
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import {storage} from './firebase-config'
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'

function App() {
   return (
    <div className='App'>
      
    </div>
   )
}

export default App;

// user?.email -> if  the user is logged in, show their email. If not, don't show anything.



/*
  //take the data from the form
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  
  //onAuthStateChanged is like a useeffect that recognizes any changes in the user's state -> log in, log out, refresh
  const [user, setUser] = useState({})
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
  }, [])
  //for registering a new user
  const register = async() => {
    try{
      const user = await createUserWithEmailAndPassword(auth, regEmail, regPassword) //returns a promise
      console.log(user)
    }catch (error){
      console.log(error.message)
    }
  };

  const login = async() => {
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPass) 
      console.log(user)
    }catch (error){
      console.log(error.message)
    }
  };
  
  const logout = async() => {
    await signOut(auth);
  };

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
      {user?.email} 
      
      <button onClick={logout}> Sign Out </button> 
    </div>

    crud*****
      const [students, setStudents] = useState([])
      const studCollectionRef = collection(db, "students") //for diff tables, different collections
      //grabbing the data
      const [newName, setNewName] = useState("")
      const [newAge, setNewAge] = useState(0)

      const createStudent = async() => {
        await addDoc(studCollectionRef, {name:newName, age:Number(newAge)})
      }
      
      useEffect(() => {
        const getStudents = async() => {
          const studentsData = await getDocs(studCollectionRef) //complete data
          //console.log(studentsData) //this prints lots of unwanted data. we need only the field data
          setStudents(studentsData.docs.map((doc) => ({...doc.data(), id: doc.id }))) //only want fields in array 
          /* when we doc.data(), we wont get id of the object. so we add ... to make the obj combo of both the id. here doc refers to each row 
        }
        getStudents()
      }, [])

      const updateStudent = async(id, age) => {
        const newFields = {age : age + 1}
        const docToChange = doc(db, 'students', id)
        //instance of the docs with a particular field
        await updateDoc(docToChange, newFields)
      }

      const deleteStudent = async(id) => {
        const docToDelete = doc(db, 'students', id)
        await deleteDoc(docToDelete)
      }

      return (
        <div className="App">
        <input
          placeholder="Name..."
          onChange={(e)=>{setNewName(e.target.value)}}/>
        <input
          type="number"
          placeholder="Age..." 
          onChange={(e)=>{setNewAge(e.target.value)}}/>
        <button onClick={createStudent}> Create User</button>

        {students.map((user) => {
          return (
            <div>
              {" "}
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <button 
                onClick={()=> {updateStudent(user.id, user.age)}}>{" "}
                Increase Age 
              </button>
              <button onClick={()=> {deleteStudent(user.id)}}>{" "}Delete Student</button>
            </div>
          );
        })}
    </div>
  );

  image uploading ****
  const [imgUpload, setImgUpload] = useState(null)
  const [imgUrls, setImgUrls] = useState([]);
  const imgsListRef = ref(storage, "images/");

  const uploadImg = () => {
    if (imgUpload==null) return
    
    const imgRef = ref(storage, `images/${imgUpload.name + v4()}`)
    uploadBytes(imgRef, imgUpload).then((snapshot) =>{
      getDownloadURL(snapshot.ref).then((url) => {
        setImgUrls((prev) => [...prev, url]);
      });    
    })
  }
 
  useEffect(()=>{
    //reference to all the files inside the images folder
    listAll(imgsListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImgUrls((prev) => [...prev, url]);
        });
      });
    });
  },[])

  return(
    <div className='App'>
      <input 
        type="file"
        onChange={(e)=> {setImgUpload(e.target.files[0])}} />
      <button onClick={uploadImg}> Upload Image</button>
      {imgUrls.map((url) => {
        return <img src={url} />;
      })}
    </div> 

  */