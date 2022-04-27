import React from 'react';
import '../../../../style.scss';

const Post = () => {
    return (
        <div className="postWrap">
            <h3>Во все тяжкие</h3>
            <div className="genre">
                <a href="/">Криминальная драма</a>
                <a href="/">Триллер</a>
                <a href="/">Современный вестерн</a>
                <a href="/">Черная комедия</a>
            </div>
            <div className="post">
                <img src={require('../../../../img/post-1.png')} alt="post"/>
                    <div className="description">
                        <p className="producer"><span>Режиссёр:</span> Винс Гиллиган</p>
                        <p className="country"><span>Страна:</span> США</p>
                        <p className="years"><span>Год:</span> 2008-2013</p>
                        <p className="descriptionText"><span>Описание:</span> Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias
                            veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse
                            quidem iure blanditiis illum...
                        </p>
                        <div className="lookingWrap">
                            <a href="" className="looking">Смотреть</a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Post;