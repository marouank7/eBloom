import React , {Component} from 'react';
import BoxQR from './BoxQR';

const CategoryBoxSurvey = ({category, size}) => {

    console.log("number of questions par category : " + size); //size will control how many questions are retrieved and displayed.

    const NumberofQAR = (numb) => { // >> NumberofQAR() = NumberofQuestionAndResponse()
        let listing = [];
        for(let i=0 ; i < numb ; i++) {listing.push(<BoxQR/>)}
        return listing;
    }

    //RRRRRRRRRRRRRRRR___  Rendering  ___RRRRRRRRRRRRRRRRRRR
    return(
    <>
        <h3>{category[1]} : {category[0]}</h3>
        {NumberofQAR(size)}
    </>
    )
    //RRRRRRRRRRRRRRRRRRRR__ __RRRRRRRRRRRRRRRRRRRRRRRRRR
}
export default CategoryBoxSurvey;