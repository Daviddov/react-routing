import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useMemo, useState } from "react";

function Todos() {
    const [data, setData] = useState()

    const fetchData = useMemo(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const json = await response.json();
        const todos =json.filter(post => post.userId === 1)
        setData(todos)
        console.log(todos)
    }, [])

{}
    return ( 
        <div>
    <h1>Todos</h1> 
 
   
{data && data.map((todos) =>
     <ListItem key={todos.id} component="div" disablePadding>
      <ListItemButton>
        <ListItemText  primary={`${todos.id}.${todos.title}`} />
      </ListItemButton>
    </ListItem>
    )}
        </div>
    );
   
}

export default Todos;