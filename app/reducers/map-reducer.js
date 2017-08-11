

// Action types

const SET_COORDS = 'SET_COORDS';


//Action Creators

export const setCoords = (x,y) => ({
  type: SET_COORDS,
  x,
  y
})


//Reducer

function mapReducer (state = { markers: []}, action) {
  const newState = Object.assign(state)
  switch (action.type){
    case SET_COORDS:
      newState.selectedMarker.lat = action.x;
      newState.selectedMarker.lng = action.y;
    default:
      return state
  }
  return newState
}

export default mapReducer;


//Thunks
