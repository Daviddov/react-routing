import { Fragment } from "react";
import { useParams } from "react-router-dom";



function Post() {
   let params = useParams(); 
    return ( <Fragment >
        <h1>My Post</h1>
        {params.PostId}
    </Fragment> );
}

export default Post;