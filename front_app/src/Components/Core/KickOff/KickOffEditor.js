import React from 'react' ;
import '../../Admin/styles/BackOfficePage.css';
import InputsKickOffQuestions from "./InputsKickOffQuestions";

const KickOffEditor = ({
    categories,
    questions, // un array d'ensembles questions (array) par categ
    submitSurveyConfig,
  //   getKickOff,
  //   ...rest
  // }) => {
  //     console.log(questions, "the question in Editor")
  //     useEffect( () => { getKickOff()})
  //   if(!categories.length) return null
    fetchKickOff, //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< where is it used ?
    ...rest
  }) => {
    if(!categories.length && !questions) return null
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
         <button type="submit">update</button>
       </form>
     </div>
   )
  }
  export default KickOffEditor ;
