/* <BackOffice> */
import React, {Component} from 'react' ;
import './BackOfficePage.css';

//___________________________

const BackOffQuestion = () => {
    return (
        <div className="back-off-question inBox-size">
        <p >My question</p>
        <QuestionRemover/>
        <ValidationIndicator/>
        </div>
    )
}

const QuestionRemover = () => {
    return (
        <div className="question-remove-button">[X]</div>
    )
}

const ValidationIndicator = () => {
    return (
        <div className="validation-indicator">(V)</div>
    )
}
//_____________________________

const CategoryHead = () => {
    return (
        <p className="category-head inBox-size">My categ title</p>
    )
   
}

const QuestionAdder = () => {
    return (
        <p className="question-add-button inBox-size">[+]</p>
    )

}

//____________________________

const CategoryMenu = () => {
    return (
        <div className="category-menu">menu of catego
            <CategoryBox/>
            <CategoryBox/>
            <CategoryBox/>
        </div>
    )
}

const CategoryBox = () => {
    return (
        <div className="category-box">
            <CategoryHead/>
            <BackOffQuestion/>
            <BackOffQuestion/>
            <BackOffQuestion/>
            <BackOffQuestion/>
            <QuestionAdder/>
        </div>
    )
}

//_____________________________

class BackOfficePage extends Component {

        constructor(props) {
            super(props) ;
            this.state = {lo:'lo'};
        }

        render() {

            return(
                <div className="back-office-page">
                    <CategoryMenu>
                    </CategoryMenu>
                </div>
            )
        }
}

export default BackOfficePage ;

