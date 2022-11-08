import { Checkbox, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Fragment } from "react";
import { useMemo, useState } from "react";
import { Navigate } from "react-router-dom";

function Posts({user}) {
    const [data, setData] = useState('')

    const fetchData = useMemo(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        const json = await response.json();
      
        setData(json)
        console.log(json)
    }, [])

    const hendleClick = (e) => {
        console.log(e);
//  <Navigate to={'/'+}/> 
    }

    return ( 
        <Fragment>
            <h1>Posts</h1> 
            {data && data.map((todos) =>
                <ListItem key={todos.id} component="div" disablePadding sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItemButton >
                        <ListItemText  onClick={hendleClick} primary={`${todos.id}.${todos.title}`} />
                       
                    </ListItemButton>
                </ListItem>
            )}
        </Fragment>
    );

}

export default Posts;