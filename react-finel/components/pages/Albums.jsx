import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Fragment } from "react";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Albums({ user }) {
    const [albums, setAlbums] = useState('')

    const fetchPost = useMemo(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`)
        const json = await response.json();
        json.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0) 
        setAlbums(json)
        console.log(json)
    }, [])

    return (
        <Fragment>

            <h1>Albums</h1>
            {albums && albums.map((album, index) =>
                <ListItem key={album.id} component="div" disablePadding sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
                    <ListItemButton >
                        <ListItemText primary={`${index+1}. ${album.title}`} />
                    </ListItemButton>
                </ListItem>

            )}
        </Fragment>
    );
}

export default Albums;