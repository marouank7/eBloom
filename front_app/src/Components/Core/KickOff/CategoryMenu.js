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
