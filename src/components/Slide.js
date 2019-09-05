import React from "react";

const Slide = (props) => {
    return(
        <div class="slide">
            <img src={process.env.PUBLIC_URL+"/images/projects/"+props.img} style={{width:100+"%"}} />
        </div>
    )
}

export default Slide;