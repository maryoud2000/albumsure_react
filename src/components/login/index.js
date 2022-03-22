import { useState } from "react"; 
import { createUser, login } from "../../utils"; 
import './App.css';


export const Login = ({setUser}) => {
const [username, setUsername] = useState();
const [email, setEmail] = useState();
const [pass, setPass] = useState();
const [bool, setBool] = useState(false);


const submitHandler = (e) => {
    e.preventDefault();
    setUser({username: username, email: email, pass: pass});
    if (bool) {
      login(username, pass, setUser);
    } else {
    if( email && email.includes("@")) {
    createUser(username, email, pass, setUser);
   }
  }
};

    return (
    <>

      <form onSubmit={submitHandler}>
     

      {!bool && 
      <input 
      onChange={(event) => setEmail(event.target.value) }
      placeholder= "e-mail" type="email"/>}
      
       <input 
      onChange={(event) => setUsername(event.target.value) } 
      placeholder= "username"
       />

      <input 
      onChange={(event) => setPass(event.target.value) } 
      placeholder= "password" 
      type="password" />

      <button 
      type="submit">Submit</button>
      </form>
      <button onClick={() => setBool(!bool)}>log-in or Sign-up </button>
    </>
    );
};


