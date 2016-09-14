'use strict'

import * as t from './actionTypes'

export const toggleUserCard = (id) => ({
  type: t.TOGGLE_USER_CARD,
  id
})
