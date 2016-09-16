'use strict'

import * as t from './actionTypes'

// const dataObject = require('../dataObject')
const dataKeyed = require('../dataKeyed')

const initialState = dataKeyed

// Reduce over an array of objects

// export const userCardReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case t.TOGGLE_USER_CARD: {
//       const newState = [ ...state ]
//       const cardIdx = newState.findIndex((x) => x.id === action.id)
//       const updatedCard = newState
//       .slice(0, cardIdx)
//       .concat([{ ...newState[cardIdx], isActive: !newState[cardIdx].isActive }])
//       .concat(newState.slice(cardIdx + 1))
//       return updatedCard
//     }
//     default:
//       return state
//   }
// }

// Reduce over an keyed object

export const userCardReducer = (state = initialState, action) => {
  switch(action.type) {
    case t.TOGGLE_USER_CARD: {
      const newState = {
        ...state,
        [action.id]: {
          ...state[action.id],
          isActive: !state[action.id].isActive
        }
      }
      return newState
    }
    default:
      return state
  }
}
