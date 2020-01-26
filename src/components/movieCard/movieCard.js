import React, { useEffect, useState } from 'react';
import './movieCard.scss';
import movieImg from '../../assets/images/hiclipart.com.png';
import StarRating from '../starRating/starRating';
import playIcon from '../../assets/images/play.svg';
import seeMore from '../../assets/images/addMore.svg';

const MovieCard = () => {
    const [mouseHover, setMouseHover] = useState(0)

    const particularCard = position => position === mouseHover

    return (
        <div className={"movie__card__wrapper"}>
            <div onMouseOver={() => { setMouseHover(1) }} onMouseLeave={() => { setMouseHover(0) }}>
                {
                    particularCard(1) ?
                        <div className={"movie__card"}>
                            <div className={"movie__detail__on__hover"}>
                                <div>
                                    <span>MOVIES</span>
                                    <p>The Source</p>
                                    <div className={"card__btn"}>
                                        <button>COMEDY</button>
                                        <button>DRAMA</button>
                                    </div>
                                </div>
                                <div className={"play"}>
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className={"seeMore"}>
                                    <StarRating index={0} />
                                    <img src={seeMore} alt="seemore"/>
                                </div>
                            </div>
                            <img src={movieImg} alt="Gogetor" width="100%" className={"movie__img"} />
                        </div>
                        :
                        <div className={"movie__card"}>
                            <div className={"movie__detail"}>
                                <span>MOVIES</span>
                                <p>The Source</p>
                                <div>
                                    <StarRating index={0} />
                                </div>
                            </div>
                            <img src={movieImg} alt="Gogetor" width="100%" className={"movie__img"} />
                        </div>
                }
            </div>
            <div onMouseOver={() => { setMouseHover(2) }} onMouseLeave={() => { setMouseHover(0) }}>
                {
                    particularCard(2) ?
                        <div className={"movie__card"}>
                            <div className={"movie__detail__on__hover"}>
                                <div>
                                    <span>MOVIES</span>
                                    <p>The Source</p>
                                    <div className={"card__btn"}>
                                        <button>COMEDY</button>
                                        <button>DRAMA</button>
                                    </div>
                                </div>
                                <div className={"play"}>
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className={"seeMore"}>
                                    <StarRating index={0} />
                                    <img src={seeMore} alt="seemore"/>
                                </div>
                            </div>
                            <img src={movieImg} alt="Gogetor" width="100%" className={"movie__img"} />
                        </div>
                        :
                        <div className={"movie__card"}>
                            <div className={"movie__detail"}>
                                <span>MOVIES</span>
                                <p>The Source</p>
                                <div>
                                    <StarRating index={0} />
                                </div>
                            </div>
                            <img src={movieImg} alt="Gogetor" width="100%" className={"movie__img"} />
                        </div>
                }
            </div>
            <div onMouseOver={() => { setMouseHover(3) }} onMouseLeave={() => { setMouseHover(0) }}>
                {
                    particularCard(3) ?
                        <div className={"movie__card"}>
                            <div className={"movie__detail__on__hover"}>
                                <div>
                                    <span>MOVIES</span>
                                    <p>The Source</p>
                                    <div className={"card__btn"}>
                                        <button>COMEDY</button>
                                        <button>DRAMA</button>
                                    </div>
                                </div>
                                <div className={"play"}>
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className={"seeMore"}>
                                    <StarRating index={0} />
                                    <img src={seeMore} alt="seemore"/>
                                </div>
                            </div>
                            <img src={movieImg} alt="Gogetor" width="100%" className={"movie__img"} />
                        </div>
                        :
                        <div className={"movie__card"}>
                            <div className={"movie__detail"}>
                                <span>MOVIES</span>
                                <p>The Source</p>
                                <div>
                                    <StarRating index={0} />
                                </div>
                            </div>
                            <img src={movieImg} alt="Gogetor" width="100%" className={"movie__img"} />
                        </div>
                }
            </div>
            <div onMouseOver={() => { setMouseHover(4) }} onMouseLeave={() => { setMouseHover(0) }}>
                {
                    particularCard(4) ?
                        <div className={"movie__card"}>
                            <div className={"movie__detail__on__hover"}>
                                <div>
                                    <span>MOVIES</span>
                                    <p>The Source</p>
                                    <div className={"card__btn"}>
                                        <button>COMEDY</button>
                                        <button>DRAMA</button>
                                    </div>
                                </div>
                                <div className={"play"}>
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className={"seeMore"}>
                                    <StarRating index={0} />
                                    <img src={seeMore} alt="seemore"/>
                                </div>
                            </div>
                            <img src={movieImg} alt="Gogetor" width="100%" className={"movie__img"} />
                        </div>
                        :
                        <div className={"movie__card"}>
                            <div className={"movie__detail"}>
                                <span>MOVIES</span>
                                <p>The Source</p>
                                <div>
                                    <StarRating index={0} />
                                </div>
                            </div>
                            <img src={movieImg} alt="Gogetor" width="100%" className={"movie__img"} />
                        </div>
                }
            </div>
            <div onMouseOver={() => { setMouseHover(5) }} onMouseLeave={() => { setMouseHover(0) }}>
                {
                    particularCard(5) ?
                        <div className={"movie__card"}>
                            <div className={"movie__detail__on__hover"}>
                                <div>
                                    <span>MOVIES</span>
                                    <p>The Source</p>
                                    <div className={"card__btn"}>
                                        <button>COMEDY</button>
                                        <button>DRAMA</button>
                                    </div>
                                </div>
                                <div className={"play"}>
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className={"seeMore"}>
                                    <StarRating index={0} />
                                    <img src={seeMore} alt="seemore"/>
                                </div>
                            </div>
                            <img src={movieImg} alt="Gogetor" width="100%" className={"movie__img"} />
                        </div>
                        :
                        <div className={"movie__card"}>
                            <div className={"movie__detail"}>
                                <span>MOVIES</span>
                                <p>The Source</p>
                                <div>
                                    <StarRating index={0} />
                                </div>
                            </div>
                            <img src={movieImg} alt="Gogetor" width="100%" className={"movie__img"} />
                        </div>
                }
            </div>
        </div>
    )
}
export default MovieCard