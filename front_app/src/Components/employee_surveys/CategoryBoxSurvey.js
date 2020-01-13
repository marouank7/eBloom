import React , {Component} from 'react';
import BoxQR from './BoxQR';

/* CategoryBoxSurvey displays a precise mass of questions per category. */

const CategoryBoxSurvey = ({ category }) => {  
    return (
        <div className="category-box-survey">
            <h3 className='catego-title'>{category.type}</h3>
                {category.questions.map((category) => <BoxQR sentence={category.question}/> )}
        </div>
    )
    
}

export default CategoryBoxSurvey;