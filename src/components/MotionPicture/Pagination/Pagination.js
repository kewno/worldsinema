import React, {useEffect, useState} from 'react';
import '../../../style.scss';
import {useDispatch} from "react-redux";
import { useParams } from 'react-router';

const Pagination = ({portionSize = 2, ...props}) => {
    let params = useParams();
    let typeCinemas = params.type || 1
    let countPicture = props.motionPicture.totalPicture
    let countPage = Math.ceil(countPicture / props.motionPicture.sizePicturePage)
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(countPage / portionSize)
    let [portionNumber, setPortionNumber] = useState(1); //portionCount
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    // useEffect(() => {
    //
    // }, [portionNumber]);

    let prevPage = () => {
        props.setPicture(leftPortionPageNumber - 1, 2, typeCinemas) //, 2, typeCinemas
        setPortionNumber(portionNumber - 1)
        console.log(leftPortionPageNumber - 1)
    }

    let nextPage = () => {
        //debugger
        props.setPicture(rightPortionPageNumber + 1, 2, typeCinemas)
        setPortionNumber(portionNumber + 1)
    }
    //debugger 'SELECT * FROM cinemas WHERE id >' . bottomBorder . 'AND id < ' . upBorder
    //console.log(rightPortionPageNumber)
    let i = 1;
    return (
        <nav className="pagination">
            <ul>
                {portionNumber > 1 && <li><a href="#" id="prevTabPagination" onClick={prevPage}>&#60;</a></li>}

                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((el) => {
                        return <li key={i++}><a key={el} onClick={() => {
                            window.scrollTo(0,0)
                            return props.setPicture(el, 2, typeCinemas)
                        }} className={props.motionPicture.activePage === el ? 'active' : ''}>{el}</a></li>
                    })}

                {portionNumber < portionCount && <li><a href="#" id="nextTabPagination" onClick={nextPage}>&#62;</a></li>}
            </ul>
        </nav>
    )
}

export default Pagination;