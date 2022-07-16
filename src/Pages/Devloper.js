import React from 'react';
import Avatar from 'react-avatar';
// import { Avatar } from '@mantine/core';


function Devloper(props) {
    return (
        <>
            <div id='Clients' style={{margin:"10px",scrollbarColor:"auto"}}>
                <Avatar name={props.name} size="40" round="20px"/>
                <span style={{margin:"5px"}}>{props.name}</span>
                {/* <Avatar src="avatar.png" alt="it's me" /> */}
                {/* <Avatar src={null} alt="Vitaly Rtishchev" color="red">BADAL</Avatar> */}
            </div>
        </>
    )
}

export default Devloper;