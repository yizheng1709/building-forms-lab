export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      // debugger
      let array = { bands: [...state.bands, action.payload.name]}
      // debugger
      return array
    default:
      return state
    }
};
