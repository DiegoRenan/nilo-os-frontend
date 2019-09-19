import { LOAD_COMPANIES, 
         COMPANY_CHANGED, 
         COMPANY_ADDED, 
         GET_COMPANY, 
         COMPANY_UPDATED } from '../../../actions/actionTypes'

import setAuthHeader from '../../../services/setAuthHeader'

const INITIAL_STATE = { companies: [], company: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_COMPANIES:
      let data = action.payload.data || []
      return { ...state, companies: data, company: '' }
    case COMPANY_CHANGED:
      return { ...state, company: action.payload }
    case COMPANY_ADDED:
      return { ...state, company: '' }
    case COMPANY_UPDATED:
      return { ...state, company: '' }
    case GET_COMPANY:
        return { ...state, company: action.payload.data.data.attributes }
    default:
      return state
  }
}