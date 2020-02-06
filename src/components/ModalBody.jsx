import React,{useEffect, useState} from 'react';
import '../assets/css/customModal.css'


const ModalBody = (props) => {
    var [toCloseModal, setToCloseModal] = useState(false);
    useEffect(()=>{
        setToCloseModal(true)
    },[])
    return (
        <div className={"__modal__body__ d-flex justify-content-center align-items-center"} onClick={toCloseModal ? props.closeModal : ""}>
            <div className={"px-3"} style={{background:"#ffffff"}} onMouseOver={()=>{setToCloseModal(false)}} onMouseLeave={()=>{setToCloseModal(true)}}>
                <div className={"position-absolute justify-content-between"} style={{width:"95%", textAlign:"right", zIndex:"3"}}>
                <div></div>
                </div>
                {props.content}
            </div>
        </div>
    )
}

export default ModalBody