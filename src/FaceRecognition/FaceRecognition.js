import React from 'react';


const FaceRecognition = (props) => {
    let imageLink = props.imageLinkFromApp;
    let dataCoordinates = props.dataCoordinatesFromApp;
    let imageAspect = props.imageAspectFromApp;
    let boxDisplay = props.boxDisplayFromApp;

    let widthData = (dataCoordinates.right_col - dataCoordinates.left_col)*imageAspect.imageWidth;
    let heightData = (dataCoordinates.bottom_row - dataCoordinates.top_row)*imageAspect.imageHeight;
    let boxHolderVariable = <div style={{display : 'none'}} ></div>

    if (boxDisplay){
        boxHolderVariable = <div className='boundingVis'
        style={{border: "5px solid blue",
        width: `${widthData}px`,
        height: `${heightData}px`,
        top: `${dataCoordinates.top_row*imageAspect.imageHeight}px`,
        left:`${dataCoordinates.left_col*imageAspect.imageWidth}px` }} ></div>
    }
    else{
        boxHolderVariable = <div style={{display : 'none'}} ></div>
    }
    
    if (imageLink !== "") {
        return(
            <div className='imageContainer'>
                {boxHolderVariable}
                <img  id='inputimage' src={imageLink}  alt="placeholder" className='imageasdf' />
            </div>
        )
    }
}


export default FaceRecognition; 