const initialState = {
  // empty!!
}


const reducer = (state = initialState, action) => {
  console.log("it works!");
  console.log('action', action);
  return state;
}

export default reducer;
