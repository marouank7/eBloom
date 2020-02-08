import React, {Component, useState} from 'react' ;
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EbloomButtonNavigator from '../EbloomButtonNavigator';
import { flexbox } from '@material-ui/system';


const useStyles = makeStyles({
    smart: {
        '& .MuiFab-root': {
            width: '40px',
            height: '40px',
            background: '#cb63e8',
            margin: '70px'
        },
        '& path': {
            color: '#fff'
        },
    },
});


const SmartButton = ({handleClick}) => {
    const classes = useStyles();

    return (

        <div onClick={() => handleClick()} className={classes.smart}>
            <Fab>
                <AddIcon />
            </Fab>
        </div>

    );
}

export default SmartButton;


// const SmartButton = ({role, process, stageNumber, lineNumber}) => {

//     //console.log("delete button num :" + num , "typof:" + process)
//     // const styles = {
//     //     toShow: "question-show-button hover",
//     //     toAdd: "question-add-button hover",
//     //     toRemove: "question-remove-button hover",
//     //     isValid : "question-checking-button hover"
//     // }
//     // const symbols = {
//     // // toShow: "[T]",
//     // // toAdd: "+",
//     // // toRemove: <>&#x2297;</>,
//     // // isValid : <>&#x221A;</>//<img src="./styles/symbols/validator.png" alt="V"/>

//     // }
//     // const act = {
//     //     toShow: ()=> console.log("set button to show questions"),
//     //     toAdd: ()=> console.log("set button to add a question"),
//     //     toRemove: ()=> console.log("set button to remove a question"),
//     //     isValid : ()=> console.log("set button to know the validation state of new question")
//     // }



//     return (
//         <div>
//             <Fab style={{background: "#cb63e8"}}>
//                 <AddIcon />
//             </Fab>



//             {/* <div className={styles[role]} onClick={(e)=>process(stageNumber, lineNumber, e)}>
//                 <div className="abstract-it">{symbols[role]}</div>
//             </div> */}
//         </div>

//     )
// }

// export default SmartButton ;
