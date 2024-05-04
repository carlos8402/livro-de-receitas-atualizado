import'./likeButton.css';

import { useState } from "react"

export  function LikeButton() {

        const[like,setLike]= useState(false);

  return (
    <div>
        <button className="like-button" onClick={()=> setLike(!like)}>{like?'👍': 'Gostei'}</button>
      
    </div>
  )
}
