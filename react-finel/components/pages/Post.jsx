import { Fragment, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ResponsiveDialog from "../Dialog";

function Post() {
    const [post, setPost] = useState('')
    const { PostId } = useParams();
   
    
    console.log(post);

    const fetchPost = useMemo(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + PostId)
        const json = await response.json();
        setPost(json)
        console.log(json)
    }, [])

    return (<Fragment >
        <h1>My Post</h1>
<ResponsiveDialog post={post} />
{/* <div style={{display:'inline-block', width: 1000 , margin: 'auto'}}>
    <h2>{post.id}. {post.title}</h2>
     <h3>{post.body}</h3>
</div> */}
     
    </Fragment>);
}

export default Post;