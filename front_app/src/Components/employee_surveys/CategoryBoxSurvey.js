import React , {Component} from 'react';
import DisplayQuestionAndResponse from './DisplayQuestionAndResponse';

const CategoryBoxSurvey = ({category, length}) => {

    console.log("number of questions par category : " + length); //size will control how many questions are retrieved and displayed.

    const NumberofQAR = (numb) => { // >> NumberofQAR() = NumberofQuestionAndResponse()
        let listing = [];
        for(let i=0 ; i < numb ; i++) {listing.push(<DisplayQuestionAndResponse/>)}
        return listing;
    }

    //RRRRRRRRRRRRRRRR___  Rendering  ___RRRRRRRRRRRRRRRRRRR
        // category[*] are set within KickOffPage.js .

    return(
    <div className="category-box-survey">
        <h3 className='catego-title'>{category[1]} : {category[0]}</h3>
        {NumberofQAR(length)}
    </div>
    )
    //RRRRRRRRRRRRRRRRRRRR__ __RRRRRRRRRRRRRRRRRRRRRRRRRR
}
export default CategoryBoxSurvey;