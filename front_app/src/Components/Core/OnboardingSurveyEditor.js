import React from "react"
import InputsSurveyQuestions from "./InputsSurveyQuestions"

const OnboardingSurveyEditor = ({
  categories,
  questions,
  submitSurveyConfig,
  ...rest
}) => {
  if(!categories.length) return null
  return (
   <div className="scrolable-content">
     <form onSubmit={submitSurveyConfig()}>
       {categories.map((byCategory, catIndex) => (
         <div className="container" key={`${catIndex}-${byCategory}`}>
           <h2>{categories[catIndex]}</h2>
           <InputsSurveyQuestions
             {...rest}
             category={catIndex}
             questions={byCategory}
           />
         </div>
       ))}
     </form>
   </div>
 )
}

export default OnboardingSurveyEditor
