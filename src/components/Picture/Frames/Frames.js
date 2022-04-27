import React from 'react';
import '../../../style.scss';
import AllFrames from "./AllFrames/AllFrames";

const Frames = () => {
    return (
        <div className="wrapFrames">
            <h3 className="frameName">Кадры</h3>
            <AllFrames/>
        </div>
    )
}

export default Frames;