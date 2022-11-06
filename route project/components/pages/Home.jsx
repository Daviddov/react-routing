import {Outlet} from 'react-router-dom'
import NavBar from '../NavBar';
function Home({user}) {
    const {name} = user 
    
    return (
    <div>
         <NavBar/>
         {name && <h1>{`wellcome ${name}`}</h1> }
<Outlet/>

    </div>
    );

}

export default Home;