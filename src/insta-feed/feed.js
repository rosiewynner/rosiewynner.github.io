
import React from 'react'

const Feed = (props) => {
    const { id, caption, media_type, media_url} = props.feed
    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    width='100%'
                    height='auto' 
                    src={media_url} 
                    type="video/mp4" 
                    controls playsinline>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <img 
                    width='100%'
                    height='auto'
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                />
            );
            break;
        default:
            post = (
                <div class='post'>
                <img 
                    width='100%'
                    height='auto'
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                />
                <h4 class='caption'>{caption}</h4>
                </div>
            );
    }       

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;
