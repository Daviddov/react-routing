import { Button, DialogContent, DialogContentText, DialogTitle, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Fragment, useMemo, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

function Post() {
    const [post, setPost] = useState('')
    const { postId } = useParams();
    const navigete = useNavigate()

    console.log(post);

    const fetchPost = useMemo(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
        const json = await response.json();
        setPost(json)
        console.log(json)
    }, [postId])



    return (<Fragment >


        <DialogTitle>
            {post.title}
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                {post.body}
            </DialogContentText>
        </DialogContent>

        <Link to={'/Posts'} autoFocus>
            Close post
        </Link><br />
        <Link autoFocus to={'Comments'}>
            Show comments
        </Link>
        <Outlet />

    </Fragment>);
}

export default Post;