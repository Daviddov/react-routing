import { Link } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar({setUser}) {
const navigete = useNavigate()
    const hendleLogout =() => {
        localStorage.removeItem('user')
        setUser(null)
        navigete('/login')
    }
    return ( <nav>
 <NavLink to='Info'>Info</NavLink>{' | '}
 <NavLink to='Todos'>Todos</NavLink>{' | '}
 <NavLink to='Posts'>Posts</NavLink>{' | '}
 <NavLink to='Albums'>Albums</NavLink>{' | '}
<Link onClick={hendleLogout}>Logout</Link>

    </nav>
     );
}

export default NavBar;