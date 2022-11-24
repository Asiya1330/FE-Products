import React from 'react';
// import '../Assets/styles/generalstyles.css';

const LoadingScreen =(props)=>{
    return (
        <div className="loadingSpinnerDiv">
            <img className="loadingSpinner" src={require('../../Assets/images/loading.gif')} alt="loading..."/>   
            <div className="loadingMsg">{props.msg }</div> {/* props.msg || Loading.. if props is empty*/}
        </div>
    )
}
LoadingScreen.defaultProps={
    msg:'Loading..'
}
export default LoadingScreen;