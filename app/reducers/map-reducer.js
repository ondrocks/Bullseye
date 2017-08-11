

// Action types

const SET_COORDS = 'SET_COORDS';


//Action Creators

export const setCoords = (x,y) => ({
  type: SET_COORDS,
  x,
  y
})


//Reducer

function mapReducer (state = {selectedMarker: {}, markers: []}, action) {
  const newState = Object.assign(state)
  switch (action.type){
    case SET_COORDS:
      newState.selectedMarker.x = action.x;
      newState.selectedMarker.y = action.y;
    default:
      return state
  }
  return newState
}

export default mapReducer;


//Thunks