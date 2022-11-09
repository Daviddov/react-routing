import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Albums() {
    const [post, setPost] = useState('')
    const { postId } = useParams();
    const navigete = useNavigate()

    console.log(post);

    const fetchPost = useMemo(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/' + postId)
        const json = await response.json();
        setPost(json)
        console.log(json)
    }, [postId])

    return ( <h1>Albums</h1> );
}

export default Albums;