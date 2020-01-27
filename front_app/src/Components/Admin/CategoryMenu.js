import React, {Component, useState} from 'react' ;
import CategoryBox from "./CategoryBox";

const CategoryMenu = ({mainState, clef, inputs}) => {
    const position = 100 * clef ;
    return (
        <div className="category-menu">
            <CategoryBox 
                title={mainState.category} 
                contentList={mainState.questions} 
                smartAct={inputs} 
                stageHundred={position}
            />
        </div>
    )
}

export default CategoryMenu ;

/**
 * set = 
 *              {
                    category : "individual",
                    questions : [
                        {
                            content : "Qui es la ? ",
                            answer : 2,
                            notImportante : false
                        },
                        {
                            content : "Quel est le ",
                            answer : 3,
                            notImportante : false
                        },
                        {
                            content : "Quel est le ",
                            answer : 2,
                            notImportante : false
                        }
                    ]
                }
 * 
 * 
 */
