import { FETCH_WEATHER } from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_WEATHER: return {...state, weather: action.payload.list }
        default:
            return state
    }
}