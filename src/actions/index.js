import { FETCH_WEATHER } from '../actions/types'
import openWeather from '../apis/openWeather'

export const fetchWeather = (location) => async dispatch => {
    const response = await openWeather.get('/forecast', {
        params: {
            q: location
        }
    })
    dispatch({ type: FETCH_WEATHER, payload: response.data })
}