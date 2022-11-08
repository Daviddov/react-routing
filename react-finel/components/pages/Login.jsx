import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({ setUser }) {

    const [data, setData] = useState()
    const navigete = useNavigate()
    const fetchData = useMemo(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json();
        console.log(json)
        setData(json)
    }, [])

    const hendleSubmit = (e) => {
        e.preventDefault()
        const { name, password } = e.target
        if (name.value && password.value) {
            data.forEach(element => {

                if (element.name === name.value) {
                    const lat = element.address.geo.lat
                    console.log(password.value.lenght);
                    if (lat.endsWith(password.value)) {
                        setUser(element)
                        localStorage.setItem('user', element)
                        console.log('login',element);

                        navigete('/')
                        
                    }else {console.log('worng password');}
                }
                else { console.log('worng name'); }
            })
        }else{console.log('fill all the fild');}
    }

    return (<div>
        <h1>Login</h1>
        <form onSubmit={hendleSubmit}>
            <input type="text" placeholder="Name" name="name" />
            <input type="password" placeholder="password" name="password" maxLength="4" minLength={"4"}/>
            <input type="submit" value={'Login'} />
        </form>
    </div>
    );
}

export default Login;