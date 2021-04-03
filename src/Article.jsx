import React from 'react'
import LikeButton from "./LikeButton";

const Article = (props) => {
    let publishState = "";
    if (props.isPublished) {
        publishState = "公開"
    } else {
        publishState = "非公開"
    }
    return (
        <div>
            <h2>{props.tittle}</h2>
            <label htmlFor="check">公開状態:</label>
            <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()} />
            <LikeButton count={props.count}/>
        </div>
    )
} 

export default Article