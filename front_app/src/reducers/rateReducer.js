/*
 src/reducers/rateReducer.js
*/

let rateState = {
  test: 'test',
}


export default (state = rateState, action) => {

    switch (action.type) {
     case 'RATE_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }

   }