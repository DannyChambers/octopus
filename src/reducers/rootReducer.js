
const initState = {
    products: [
      {id: 1, price: 12.99, available: 3, title: 'Energy saving light bulb', subtitle: '25W // Packet of 4', description: 'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wiaint around warm start and flicker free features...'},
    ]
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
