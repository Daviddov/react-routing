import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../NavBar";
function Home({user ,setUser}) {


    return (
        <div>
        
            {user ? <h4>{`wellcome ${user.name}`}</h4> : <Navigate to={'Login'} />}
            <NavBar setUser={setUser}/>
          
            <Outlet />

        </div>
    );
    
}

export default Home;