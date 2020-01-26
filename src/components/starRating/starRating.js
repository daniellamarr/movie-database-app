import React,{Component} from 'react';
import './starRating.scss'
class StarRating extends Component {
    render () {
        return (
            <div className="rating__star">
                <div className="fa fa-star star-size checked" id="star1" data-key="1"></div>
                <div className="fa fa-star star-size checked" id="star2" data-key="2" ></div>
                <div className="fa fa-star star-size checked" id="star3" data-key="3" ></div>
                <div className="fa fa-star star-size checked" id="star4" data-key="4" ></div>
                <div className="fa fa-star star-size" id="star5" data-key="5" ></div>
            </div>
        )
    
    }
}

export default StarRating