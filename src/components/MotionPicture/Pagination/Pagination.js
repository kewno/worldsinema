import React, {useEffect, useState} from 'react';
import '../../../style.scss';
import {useDispatch} from "react-redux";

const Pagination = ({portionSize = 2, ...props}) => {

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
        setPortionNumber(portionNumber - 1)
    }

    let nextPage = () => {
        //debugger
        setPortionNumber(portionNumber + 1)
    }
    //debugger 'SELECT * FROM cinemas WHERE id >' . bottomBorder . 'AND id < ' . upBorder
    return (
        <nav className="pagination">
            <ul>
                {portionNumber > 1 && <li><a href="#" id="prevTabPagination" onClick={prevPage}>&#60;</a></li>}
                {/*{pages.map((el) => {*/}
                {/*    return <li><a href="#" className="active">{el}</a></li>*/}
                {/*})}*/}
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((el) => {
                        return <li><a key={el} onClick={() => props.setPicture(el)} className={props.motionPicture.activePage === el ? 'active' : ''}>{el}</a></li>
                    })}

                {/*<li><a href="#" className="active">1</a></li>*/}
                {/*<li><a href="#">2</a></li>*/}
                {/*<li><a href="#">3</a></li>*/}
                {/*<li><a href="#">4</a></li>*/}
                {/*<li><a href="#">5</a></li>*/}
                {/*<li><a href="#">6</a></li>*/}
                {/*<li><a href="#">7</a></li>*/}
                {/*<li><a href="#">8</a></li>*/}
                {/*<li><a href="#">9</a></li>*/}
                {portionNumber < portionCount && <li><a href="#" id="nextTabPagination" onClick={nextPage}>&#62;</a></li>}
            </ul>
        </nav>
    )
}

export default Pagination;