import React, { useState, useEffect } from 'react';
import Rating from '../components/Rating';
import Axios from 'axios';

const { API_ROOT } = process.env;



const AddReviewModal = (props) => {
    const [data, setData] = useState({});
    const [review, setReview] = useState({});
    const [username, setUsername] = useState('');
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setData({ ...data, ...props.data });
        var user = localStorage.getItem("token");
        setUsername(localStorage.getItem("userName"))
    },[]);

    const handleChange = (e) => {
        e.preventDefault()
        setReview({ ...review, [e.target.id]: e.target.value, movieId: data.id })
    };
    const handleSubmit = (e) => {
        var userToke = localStorage.getItem("token")
        e.preventDefault()
        setLoader(true)
        Axios.post(`${API_ROOT}/review`, review, {
            headers: {
                'x-access-token': `moviedb${userToke}`,
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.data.status == "success") {
                props.closeModal()
                setLoader(false)
            }
        }).catch((err)=>{
            alert(err)
            setLoader(false)
        })
    }
    return (
        <div className="add__review__modal__wrapper">
            <div className="row top mb-4">
                <div className={"col-md-12 d-flex align-items-center"}>
                    Review by {username}
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
                            <img src={data.poster_path} alt="photo" width="100%" />
                        </div>
                        <div className={"review_movie_name"}>
                            <b>{data.title}</b>
                        </div>
                    </div>
                </div>
                <div className={"col-md-8"}>
                    <textarea placeholder="Add reviews" id="review" onChange={handleChange} required />
                </div>
            </div>
            <div className="row mb-3">
                <div className={"col-md-8 d-flex justify-content-center align-items-center"}>
                    <Rating noOfStars={5} checkType="checked" />
                </div>
                <div className={"col-md-4 d-flex justify-content-around"}>
                    <button className={"cancel__modal__btn"}>Cancel</button>
                    <button onClick={handleSubmit}>{loader ? "Loading..." : "Submit"}</button>
                </div>
            </div>
        </div>
    )
}

export default AddReviewModal