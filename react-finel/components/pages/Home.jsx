import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../NavBar";
function Home({user ,setUser}) {


    return (
        <div>
        
            <NavBar setUser={setUser}/>
            {user ? <h4>{`wellcome ${user}`}</h4> : <Navigate to={'Login'} />}
            <Outlet />

        </div>
    );
    
}

export default Home;