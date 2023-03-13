import { createReducer } from "@reduxjs/toolkit";
import eventsActions from './actions.js'
const {read_events} = eventsActions

const initialState = { 
  events: []
}

const reducer = createReducer ( 
  initialState, 
  (builder) => builder
    .addCase(
      read_events.fulfilled,
      (state, action) => {
        let newState = {
          ...state,
          events: action.payload.events
        }
        return newState
      }
    )
)

export default reducer