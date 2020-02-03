import React, { useEffect, useState } from 'react';
import ModalBody from './ModalBody';
import AddReviewModal from './AddReviewModal';
// import AddSkillModal from '../addSkills/addSkillModal';

const CustomModal = (props) => {
    var [openModal, setOpenModal] = useState(false);
    if (openModal === true) {
        return (
            <ModalBody
                content={
                    props.type == "AddReview" ?
                        <AddReviewModal closeModal={() => { setOpenModal(false) }} />
                        :
                        ""
                }
                closeModal={() => setOpenModal(false)}
                keepOpen={() => setOpenModal(true)}
            />
        )
    } else {
        return (
            <div onClick={() => setOpenModal(true)} style={{ cursor: "pointer" }}>
                {props.content}
            </div >
        )
    }
}

export default CustomModal