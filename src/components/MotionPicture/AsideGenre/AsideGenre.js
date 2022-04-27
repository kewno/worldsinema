import React from 'react';
import '../../../style.scss';
import {NavLink} from "react-router-dom";

const AsideGenre = (props) => {
    //debugger
    return (
            <aside>
                <h3>Жанры</h3>
                <nav className="genre">
                    <ul>
                        {props.genre.map(el => {
                            return <li><NavLink to={`/motionPicture/${el.name}`} 
                            onClick={() => {
                                props.setPictureForGenre(el.name)
                            }}
                            //className='active'
                            >{el.name}</NavLink></li>
                        })}
                    </ul>
                </nav>
            </aside>
    )
}

export default AsideGenre;