import React from 'react';
import '../../Assets/styles/generalstyles.css';
import LoadingImg from '../../Assets/images/loadingCricle.gif';

const LoadingScreen = (props) => {
    return (
        <div className="loadingSpinnerDiv">
            <img className="loadingSpinner" src={LoadingImg} alt="loading..." />
            <div className="loadingMsg">{props.msg}</div> {/* props.msg || Loading.. if props is empty*/}
        </div>
    )
}
LoadingScreen.defaultProps = {
    msg: 'Loading..'
}
export default LoadingScreen;