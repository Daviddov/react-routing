import {  ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Fragment } from "react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Photos() {
    const { albumId } = useParams()
    const [photos, setPhotos] = useState()

    const fetchPhoto = useMemo(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        const json = await response.json();
        setPhotos(json)
        console.log('a', json)
    }, [albumId])



    return (
        <Fragment>
            <h1>Photos</h1>
            <ImageList sx={{margin:'auto', width: 650, height: 650 }}>
      {photos && photos.map((item) => (
        <ImageListItem key={item.img} sx={{ width: 300, height: 300 }}>
          <img
          
            src={`${item.thumbnailUrl}?w=248&fit=crop&auto=format`}
            srcSet={`${item.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}

            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>

            
        </Fragment>
    );


}

export default Photos;