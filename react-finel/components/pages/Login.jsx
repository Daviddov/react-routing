import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({setUser}) {

    const [data, setData] = useState()
    const navigete = useNavigate()
    const fetchData = useMemo(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json();
        console.log(json)
        setData(json)
    },[]) 
  
    const hendleSubmit = (e) => {
        e.preventDefault()
        const {name, password} = e.target
        if (name.value && password.value) {
            data.forEach(element => {
                if (element.name === name.value) {
                    setUser(name.value)
            navigete('/home')
            }
                else { console.log('something worng'); }
        })     
        }
    }

    return (<div>
        <h1>Login</h1>
        <form onSubmit={hendleSubmit}>
            <input  type="text" placeholder="Name" name="name" />
            <input  type="password" placeholder="password" name="password" />
            <input type="submit" />
        </form>
    </div>
);
}

export default Login;