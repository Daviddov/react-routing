import { ListItemText } from "@mui/material";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Info({user}) {
    const [data, setData] = useState()
    user = JSON.parse(localStorage.getItem('user')) 
    console.log(user);

 
    const {name, username, email, address} = user;
    const {city, street} = address;
    return ( 
        <div>
           
    <h1>info</h1> 
 <h5>name: {name}</h5>
<h5>username: {username}</h5>
<h5>email: {email}</h5>
<h5>city: {city}</h5>
<h5>street: {street}</h5>
  
        </div>
        );
}

export default Info;