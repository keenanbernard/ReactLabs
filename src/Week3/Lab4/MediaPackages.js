import React from "react";
import ReactPlayer from "react-player";

function MyVideo () {

    return(
        <ReactPlayer
            style={{margin: "0 auto", marginTop: "10%"}}
            url='https://www.youtube.com/watch?v=IIw60tE6oDw&t=92s&ab_channel=Fruitsnack'
            playing={true}
            volume={0.5}
            controls={true}
        />
    )
}

export default MyVideo