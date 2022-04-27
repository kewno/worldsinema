import React from 'react';
import '../../../../style.scss';
import Frame from "./Frame/Frame";

const AllFrames = () => {
    return (
            <div className="frameWrap">
                <div className="frames">
                    <Frame/>
                    <Frame/>
                    <Frame/>
                    <Frame/>
                    <Frame/>
                    <Frame/>
                    <Frame/>
                    <Frame/>
                    <Frame/>
                </div>
            </div>
    )
}

export default AllFrames;