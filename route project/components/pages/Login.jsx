import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setUser}) {
    const [fnameValue, setFnameValue] = useState()
    const [emailValue, setEmailValue] = useState()

    const navigate = useNavigate()

    const user = {
        name: fnameValue,
        email: emailValue
    }

    const hendleInput = (e) => {
        const { name, value } = e.target
        name === 'fname' ? setFnameValue(value) : setEmailValue(value);
    }

    const hendleSubmit = (e) => {
        e.preventDefault()
        if (user.name && user.email){
            setUser(user)
navigate('/')
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={hendleSubmit}>
                <input onChange={hendleInput} value={fnameValue} type="text" placeholder="Name" name="fname" />
                <input onChange={hendleInput} value={emailValue} type="email" placeholder="Email" name="email" />
                <input type="submit" />
            </form>
        </div>

    );
}

export default Login;