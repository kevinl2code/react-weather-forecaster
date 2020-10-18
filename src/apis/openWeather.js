import axios from 'axios'

const KEY = 'b3f4d1f2e6774ca9bc1e1f7ed2ebd2ae'

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: KEY,
        units: 'imperial'
    }
})