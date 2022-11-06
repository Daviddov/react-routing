import { NavLink } from "react-router-dom";

function NavBar() {
    return ( <nav>

 <NavLink to='/'>Home</NavLink>
 <NavLink to='/Prodaucts'>Prodaucts</NavLink>
 <NavLink to='/About'>About</NavLink>
 <NavLink to='/Login'>Login</NavLink>
    </nav>
     );
}

export default NavBar;