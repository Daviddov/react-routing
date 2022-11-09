import { Checkbox, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useRef } from "react";
import { Fragment } from "react";
import { useMemo, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function Posts({user}) {
    const [data, setData] = useState('')
const navigete = useNavigate()
    const fetchData = useMemo(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        const json = await response.json();
      
        setData(json)
        console.log(json)
    }, [])

    const hendleClick = (id) => {
        navigete(`/Posts/${id}`)  
    }

    return ( 
        <Fragment>
            <h1>Posts</h1>
            <Outlet /> 
            {data && data.map((todo) =>
                <ListItem key={todo.id} component="div" disablePadding sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItemButton >
                        <ListItemText  onClick={()=>hendleClick(todo.id)} primary={`${todo.id}.${todo.title}`} />
                    </ListItemButton>
                </ListItem>
            )}
           
        
        </Fragment>
    );

}

export default Posts;