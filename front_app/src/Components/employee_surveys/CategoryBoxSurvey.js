import React , {Component} from 'react';
import BoxQR from './BoxQR';

/* CategoryBoxSurvey displays a precise mass of questions per category. */

const CategoryBoxSurvey = ({category, length, question}) => {
    // console.log(question);
    // console.log("number of questions par category : " + length); //size will control how many questions are retrieved and displayed.

    const NumberofQAR = (numb) => { // >> NumberofQAR() = NumberofQuestionAndResponse()
        let listing = [];
        for(let i=0 ; i < numb ; i++) {listing.push(<BoxQR sentence={question[i]}/>)}
        return listing;
    }

    //Rendering___________

        // category[*] props are set within KickOffPage.js .
        // length props is set within KickOffPage.js - give the number of questions to display. 

    return(
    <div className="category-box-survey">
        <h3 className='catego-title'>{category[1]} : {category[0]}</h3>
        {NumberofQAR(length)}
    </div>
    )
    
}
export default CategoryBoxSurvey;