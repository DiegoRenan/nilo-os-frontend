import {
  LOAD_SECTORS,
  SECTOR_CHANGED,
  SECTOR_ADDED,
  SECTOR_UPDATED,
  GET_SECTOR,
  LOAD_DEPARTMENTS
} from '../../../actions/actionTypes'

const INITIAL_STATE = { sectors: [], sector: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOAD_SECTORS:
      return { ...state, sectors: action.payload.data, sector: '' }

    case SECTOR_CHANGED:
      return { ...state, sector: action.payload }

    case SECTOR_ADDED:
      return { ...state, sector: '' }

    case SECTOR_UPDATED:
      return { ...state, sector: '' }

    case GET_SECTOR:
      return {
        ...state,
        sector: action.payload.data.data[0].attributes,
        department: action.payload.data.included[0].attributes
      }

    case LOAD_DEPARTMENTS:
      return { ...state, departments: action.payload.data.data }

    default:
      return state
  }
}
