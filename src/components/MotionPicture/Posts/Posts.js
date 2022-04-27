import React from 'react';
import '../../../style.scss';
import Post from "./Post/Post";

const Posts = (props) => {
    //debugger
    return (
        <div className="posts">
            {props.dataPicture.map( (el) => <Post key={el.id}
                                                  setActiveGenre={props.setActiveGenre}
                                                  pictureId={el.id}
                                                  name={el.name}
                                                  producer={el.producer}
                                                  country={el.country}
                                                  years={el.years}
                                                  description={el.description}
                                                  path={el.path}
                                                  poster={el.poster}
                                                  tags={el.tags}
                                                  setPictureForGenre = {props.setPictureForGenre}
                                            />)}
            {/*<Post />*/}
            {/*<Post />*/}
            {/*<Post />*/}
        </div>
    )
}

export default Posts;