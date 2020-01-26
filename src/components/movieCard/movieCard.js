import React, { Component } from 'react';
import './movieCard.scss';
import movieImg from '../../assets/images/hiclipart.com.png';
import StarRating from '../starRating/starRating';
import playIcon from '../../assets/images/play.svg';
import seeMore from '../../assets/images/addMore.svg';

class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mouseHover: 0
        }
    }
    checkForHoverdCard(card){
        if(card === this.state.mouseHover){
            return true
        }else{
            return false
        }
    }
    render() {
        return (
            <div className={"movie__card__wrapper"}>
                <div onMouseOver={() => { this.setState({ mouseHover: 1 }) }} onMouseLeave={() => { this.setState({ mouseHover: 0 }) }}>
                    {
                        this.checkForHoverdCard(1) ?
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
                                        <img src={seeMore} alt="seemore" />
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
                <div onMouseOver={() => { this.setState({ mouseHover: 2 }) }} onMouseLeave={() => { this.setState({ mouseHover: 0 }) }}>
                    {
                        this.checkForHoverdCard(2) ?
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
                                        <img src={seeMore} alt="seemore" />
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
                <div onMouseOver={() => { this.setState({ mouseHover: 3 }) }} onMouseLeave={() => { this.setState({ mouseHover: 0 }) }}>
                    {
                        this.checkForHoverdCard(3) ?
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
                                        <img src={seeMore} alt="seemore" />
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
                <div onMouseOver={() => { this.setState({ mouseHover: 4 }) }} onMouseLeave={() => { this.setState({ mouseHover: 0 }) }}>
                    {
                        this.checkForHoverdCard(4) ?
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
                                        <img src={seeMore} alt="seemore" />
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
                <div onMouseOver={() => { this.setState({ mouseHover: 5 }) }} onMouseLeave={() => { this.setState({ mouseHover: 0 }) }}>
                    {
                        this.checkForHoverdCard(5) ?
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
                                        <img src={seeMore} alt="seemore" />
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
}

export default MovieCard