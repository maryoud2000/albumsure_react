import './App.css';
import { useState, useEffect } from "react";
import React from 'react';
import Spotify from './components/spotifyAPI';
import { Login } from "./components/login/login.js";
import UserCollection from './components/collection/collectionPage';
import UserContent from './components/userPage/userPage';
import AddToList from './components/addToList/addToListPage';
import Profile from './components/profile/profile';
import { tokenLogin } from "./utils";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  const [user, setUser] = useState();

useEffect( () => { tokenLogin (setUser); }, [] );

 
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <NavBar user={user} />  */}

      {/* {!user ? <Login setUser = {setUser} /> : <Login />} */}

      {/* <Spotify/> */}

      <Routes>
        <Route path='/' element={!user ? <Login setUser = {setUser} /> : <Login />} />
        <Route path="/collectionPage" element={<UserCollection />} />
        <Route path="/userPage" element={<UserContent />} />
        <Route path="/addToListPage" element={<AddToList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;