import React,{useState, useEffect} from 'react';
import './starRating.scss'

const StarRating = (props) => {
    const [state, setState] = useState({
        selected : false,
        selectStar: 0,
    })
    const handleStarToggle = (length, add) => {
        for (let index = 1; index <= length; index++) {
            var id = `star${index}`;
            var currentDocument = document.getElementById(id);
            if (currentDocument) {
                if (add) {
                    currentDocument.classList.add('checked');
                } else if (state.selected && (parseInt(state.selectedStar) < index)) {
                    currentDocument.classList.remove('checked');
                } else if (!state.selectStar) {
                    currentDocument.classList.remove('checked');
                } else if (state.selected && (parseInt(state.selectedStar) >= index)) {
                } else {
                    currentDocument.classList.remove('checked');
                }
            }
        }
    }
    const handlehover = (currentValue) => {
        if (currentValue.target) {
            var length = currentValue.target.attributes["data-key"].value;
            handleStarToggle(length, true)
        }
    }
    const handleMouseLeave = (currentValue) => {
        if (currentValue.target) {
            var length = currentValue.target.attributes["data-key"].value;
            handleStarToggle(length)
        }
    }
    const selectStar = (currentStar) => {
        currentStar.persist()
        var length = currentStar.target.attributes["data-key"].value;
        setState(...state, {selected: true, selectedStar: length }, () => {
            handlehover(currentStar);
            handleStarToggle(length);
        })
    }
    return (
        <div className="rating__star">
            <div className="fa fa-star star-size checked" id="star1" data-key="1"></div>
            <div className="fa fa-star star-size checked" id="star2" data-key="2" ></div>
            <div className="fa fa-star star-size checked" id="star3" data-key="3" ></div>
            <div className="fa fa-star star-size checked" id="star4" data-key="4" ></div>
            <div className="fa fa-star star-size" id="star5" data-key="5" ></div>
            {/* <div className="fa fa-star star-size" id="star1" data-key="1" onClick={selectStar} onMouseLeave={handleMouseLeave} onMouseOver={handlehover}></div>
            <div className="fa fa-star star-size" id="star2" data-key="2" onClick={selectStar} onMouseOver={handlehover} onMouseLeave={handleMouseLeave}></div>
            <div className="fa fa-star star-size" id="star3" data-key="3" onClick={selectStar} onMouseOver={handlehover} onMouseLeave={handleMouseLeave}></div>
            <div className="fa fa-star star-size" id="star4" data-key="4" onClick={selectStar} onMouseOver={handlehover} onMouseLeave={handleMouseLeave}></div>
            <div className="fa fa-star star-size" id="star5" data-key="5" onClick={selectStar} onMouseOver={handlehover} onMouseLeave={handleMouseLeave}></div> */}
        </div>
    )
}
export default StarRating