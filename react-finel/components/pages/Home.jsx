import { Navigate, Outlet } from "react-router-dom";

function Home({user}) {
    const { name } = user

    return (
        <div>
            {/* <NavBar /> */}
            {name ? <h1>{`wellcome ${name}`}</h1> : <Navigate to={'Login'} />}
            <Outlet />

        </div>
    );
    
}

export default Home;