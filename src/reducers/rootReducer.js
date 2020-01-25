

const initState = {
    
}

const rootReducer = (state = initState, action) => {

switch(action.type){
    case 'CREATE' :

      console.log("CREATE");



      /*return {
        ...state,
        thoughts: newThoughts
      }*/

    break;
    case 'RETRIEVE' :

      console.log("RETRIEVE");



      /*return {
        ...state,
        thoughts: newThoughts
      }*/

    break;
    case 'UPDATE' :

      console.log("UPDATE");



      /*return {
        ...state,
        thoughts: newThoughts
      }*/

    break;
    case 'DELETE' :

      console.log("DELETE");



      /*return {
        ...state,
        thoughts: newThoughts
      }*/

    break;
    default:
    break;
  }

	return state;
}

export default rootReducer
