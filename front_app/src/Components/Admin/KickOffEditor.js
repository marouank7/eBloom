import React, {Component, useState} from 'react' ;
import './styles/BackOfficePage.css';
import CategoryMenu from "./CategoryMenu";
import SmartButton from "./SmartButton";
import MyTextArea from "./MyTextArea";
import axios from 'axios';
import InputsKickOffQuestions from "./InputsKickOffQuestions";

const KickOffEditor = ({
    categories,
    questions, // un array d'ensembles questions (array) par categ 
    submitSurveyConfig,
    ...rest
  }) => {
      console.log(questions, "the question in Editor")
    if(!categories.length) return null
    return (
     <div className="scrolable-content">
       <form onSubmit={submitSurveyConfig}>
         {categories.map((byCategory, catIndex) => (
           <div className="category-menu" /**className="category-box" */ key={catIndex}>
             <h2 /*className="category-head inBox-size"*/ >{categories[catIndex]}</h2>
             <InputsKickOffQuestions
               {...rest}
               category={catIndex}
               questions={questions[catIndex]}
             />
           </div>
         ))}
       </form>
     </div>
   )
  }
  export default KickOffEditor ;