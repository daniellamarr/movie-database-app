import React from 'react';
import dummyImage from '../assets/images/component.png';
import Rating from '../components/Rating';



const AddReviewModal = () => {
    return (
        <div className="add__review__modal__wrapper">
            <div className="row top mb-4">
                <div className={"col-md-12 d-flex align-items-center"}>
                    Review by Daniel Lamar
                </div>
            </div>
            <div className="row mb-3">
                <div className={"col-md-12"}>
                    <p>
                        Reviews are public and editable. Past edits are visible to the developer and users, unless you delete your review altogether.
                    </p>
                </div>
            </div>
            <div className="row mb-4">
                <div className={"col-md-4 d-flex justify-content-center"}>
                    <div className={"review_modal_img_wrapper"}>
                        <div className={"mb-2"}>
                            <img src={dummyImage} alt="photo" width="100%" />
                        </div>
                        <div className={"review_movie_name"}>
                            <b>The Source</b>
                        </div>
                    </div>
                </div>
                <div className={"col-md-8"}>
                    <textarea placeholder="Add reviews" />
                </div>
            </div>
            <div className="row mb-3">
                <div className={"col-md-8 d-flex justify-content-center align-items-center"}>
                    <Rating noOfStars={5} checkType="checked" />
                </div>
                <div className={"col-md-4 d-flex justify-content-around"}>
                    <button className={"cancel__modal__btn"}>Cancel</button>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddReviewModal