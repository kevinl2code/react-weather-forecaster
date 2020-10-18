import { FETCH_WEATHER } from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_WEATHER: return {...state, city: action.payload.city}
        default:
            return state
    }
}