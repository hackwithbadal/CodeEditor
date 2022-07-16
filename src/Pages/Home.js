import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillCode } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid'
import toast from 'react-hot-toast'
import logo from './assets/media/logo.png'
import './assets/StyleSheet/Home.css'

function Home() {
  const navigate = useNavigate();

  const [roomID, setRoomID] = useState('');
  const [user, setUser] = useState('Guest');

  const CreateNewRoom = (e) => {
    const id = uuidv4();
    setRoomID(id);
    InterIntoRoom();
  }

  const InterIntoRoom = (e) => {
    if (!user || !roomID) {
      toast.error('ERROR : Need to login')
      return;
    };

    navigate(`/DevDoor/${roomID}`, {
      state: {
        name: user,
        id: roomID
      }
    });
  }

  const HandleEnter = (e) => {
    if (e.code === 'Enter') {
      CreateNewRoom();
    }
  }
  // const [b, sb] = useState('');
  return (
    <div id='rootDiv'>
      <header>
        <div>
          <img src={logo} alt="logo" height='100px' width='300px' margin='10px'/>
        </div>
        <div>
          <button id='loginBtn'>Login</button>
        </div>
      </header>
      <div id="body-wrapper">
        <h1>DEVELOPERS DOOR</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, animi at iste explicabo ex libero iusto ratione assumenda placeat voluptas modi delectus doloremque reiciendis quaerat. Nobis repellat voluptatem officia ratione?</p>
        <br />
        <div id='btngrp'>
          <button id='NewRoom' onClick={CreateNewRoom}><AiFillCode />NEW ROOM</button>
          <input type="text" placeholder='ENTER ROOM CODE...' onKeyUp={HandleEnter} onChange={(e) => setRoomID(e.target.value)} style={{ color: "black", fontSize: "15px" }} />
        </div>
      </div>
      <footer style={{ margin: "20px" }}>
        <p>&emsp;<Link to='/about'>Learn More</Link>&ensp; about DevDooR</p>
      </footer>
    </div>
  )
}

export default Home;