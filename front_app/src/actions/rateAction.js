/*
 src/actions/rateAction.js
*/
export const rateAction = (rating) => dispatch => {
    dispatch({
     type: 'RATE_ACTION',
     payload: rating
    })
   }