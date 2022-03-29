import React from 'react';
import NavBar from '../navbar/navBar.js';
import { Link } from "react-router-dom";

import './userPage.css';

const UserContent = ({user, setUser}) => {
   
    return (
        <>
        <div className='userContent'>
            <NavBar user={user} setUser={setUser} />
            <h1> this is the user page </h1>
         
            <Link to="/addToListPage">Let's add more</Link>
        </div>
         <div>
             <h2>Suggested Albums</h2>
         </div>
        <div className="containerAlbum">
            
              <img src='./images/Adele.jpeg' alt="Adele" />
              <img src='./images/deathM.png' alt="Death Metal" />
              <img src='./images/Kate.jpg' alt="Kate" />
             
              <img src='./images/Weird.jpeg' alt="Weird" />
              <img src='./images/Skrillex.jpeg' alt="Skrillex" />
              <img src='./images/Smurfs.jpeg' alt="Smurfs" />
             


        </div>

        </>
    );
};

export default UserContent;