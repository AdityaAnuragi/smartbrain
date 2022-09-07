import React from 'react';


const FaceRecognition = (props) => {
    let imageLink = props.imageLinkFromApp;
    let dataCoordinates = props.dataCoordinatesFromApp;
    let imageAspect = props.imageAspectFromApp;


    let widthData = (dataCoordinates.right_col - dataCoordinates.left_col)*imageAspect.imageWidth;
    let heightData = (dataCoordinates.bottom_row - dataCoordinates.top_row)*imageAspect.imageHeight;
    // dataCoordinates.top_row*imageAspect.imageHeight

    console.log("data coming up")
    console.log(widthData)
    console.log(heightData)

    if (imageLink !== "") {
        return(
            <div className='imageContainer'>
                <div className='boundingVis' style={{border: "5px solid blue",
                width: `${widthData}px`,
                height: `${heightData}px`,
                top: `${dataCoordinates.top_row*imageAspect.imageHeight}px`,
                left:`${dataCoordinates.left_col*imageAspect.imageWidth}px` }} >                                       
                </div>
                <img  id='inputimage' src={imageLink}  alt="placeholder" className='imageasdf' />
            </div>
        )
    }
}


export default FaceRecognition; 