import { Alert, Button } from "@mui/material";
import { width } from "@mui/system";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertMassage from "../AlertMassege";
function Login({ setUser }) {

    const [data, setData] = useState()
    const [massage, setMassage] = useState('hey')
    const navigete = useNavigate()
    const [open, setOpen] = useState(false);
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
                        localStorage.setItem('user', JSON.stringify(element))
                        console.log('login', element);

                        navigete('/Info')

                    } else {
                        setMassage('worng password')
                        setOpen(true)
                    }
                }
                else {
                    setMassage('worng name');
                    setOpen(true)
                }
            })
        } else {
            setMassage('fill all the fild');
            setOpen(true)
        }
    }

    return (<div>
        <h1>Login</h1>
        <form onSubmit={hendleSubmit}>

            <input type="text" placeholder="Name" name="name" />
            <input type="password" placeholder="password" name="password" maxLength="4" minLength={"4"} />
            <Button type="submit">Login</Button>
            <AlertMassage massage={massage} open={open} />
        </form>
    </div>
    );
}

export default Login;