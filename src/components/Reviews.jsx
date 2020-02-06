import React, { useState, useEffect } from 'react';
import dummyImage from '../assets/images/component.png';
import likeIcon from '../assets/images/Icon awesome-thumbs-up.svg';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import CustomModal from './customModal';



const Reviews = (props) => {
    const [movie, setMovie] = useState({});
    const [toRender, setToRender] = useState(false);
    useEffect(() => {
        setMovie({ ...movie, ...props.movieDetail });
        checkForData(props.movieDetail)
    }, [props.movieDetail]);

    const checkForData = (value) => {
        var data = Object.values(value).length
        if (data !== 0) {
            setToRender(true);
        } else {
            // set Loader here
        }
    }
    return (
        <div className={"review__wrapper"}>
            {
                toRender ?
                    <>
                        <div className={"mb-5"}>
                            <div className={"d-flex justify-content-between w-100 mb-4 review__top__col"}>
                                <span className={"review_text"}>
                                    Reviews
                                </span>
                                <CustomModal movieDetail={movie} type="AddReview" content={<Tag>write a review</Tag>} />
                            </div>
                        </div>

                        <div className={"row mb-5"}>
                            <div className={"col-md-3 d-flex align-items-center"}>
                                <div className={"rate__count"}>
                                    {movie.vote_average}
                                </div>
                            </div>
                            <div className={"rate__progress__bar col-md-9"}>
                                <div className="progress mb-2">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                                    </div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                    </div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                                    </div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "30%" }}>
                                    </div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {props.reviews.length > 0 && props.reviews.map((r, i)=>{
                            return(
                                <div key={i} className={"row w-100 mb-4"}>
                            <div className={"col-md-2 mb-3"}>
                                <div className={"review__image__wrapper"}>
                                    <img src={dummyImage} width="100%" height="100%" />
                                </div>
                            </div>
                            <div className={"col-md-10 review__section"}>
                                <div className={"w-100 d-flex justify-content-between"}>
                                    <div>
                                        <div className={"mb-2"}>
                                            <div className={"mb-2"}>
                                                <b>Daniel Lamar</b>
                                            </div>
                                            <Rating noOfStars={3} checkType="checked" />
                                        </div>
                                    </div>
                                    <div>
                                        <img src={likeIcon} alt="like" />
                                    </div>
                                </div>
                                <div className={"w-100"}>
                                    <p>{r.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                            )
                        })}
                       {props.reviews.length === 0 ?<></>:<div className={"row"}>
                            <div className={"col-md-12 d-flex justify-content-center"}>
                                <button>Read all Reviews</button>
                            </div>
                        </div>} 
                    </>
                    :
                    <div>

                    </div>
            }
        </div>
    )
}

export default Reviews