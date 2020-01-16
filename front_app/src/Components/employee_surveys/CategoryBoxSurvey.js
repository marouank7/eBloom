import React , {Component} from 'react';
import BoxQR from './BoxQR';

/* CategoryBoxSurvey displays a precise mass of questions per category. */

const CategoryBoxSurvey = ({ category }) => {  
    console.log("ici333", category)
    return (
        <div className="category-box-survey">
                <h3 className='catego-title'>{category.type}</h3>
                {category.questions.map((question, index) => <BoxQR key={index} sentence={question.content}/> )}
        </div>
    )
    
}

export default CategoryBoxSurvey;