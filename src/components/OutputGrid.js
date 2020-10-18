import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import WeatherCard from './WeatherCard'
import OutputHeader from './OutputHeader'
 
const OutputGrid = ({ weather, city }) => {

    const renderCards = (weather) => weather.map((day, i) => {
        const days = [0, 8, 16, 24, 32]
        if (days.includes(i)) {
            return (
                <WeatherCard
                    day={moment.unix(day.dt).format('dddd')}
                    date={moment.unix(day.dt).format('MMM Do')}
                    time={moment.unix(day.dt).format('hA')}
                    icon={day.weather[0].icon}
                    temp={day.main.temp}
                    description={day.weather[0].description}
                    key={i}
                />
            )
        }
        return null
    })

    const renderOutputHeader = (city) => {
        if (city.city) {
            console.log(city.city.name)
            return <OutputHeader text={city.city.name}/>
        }
    }

    return(
        <React.Fragment>
            {renderOutputHeader(city)}
            <div className="ui five stackable cards">
                {renderCards(weather || []) }
            </div>
        </React.Fragment>

    )
}

const mapStateToProps = (state) => {
    return { 
        weather: state.weather.weather,
        city: state.city
    }
}

export default connect(mapStateToProps)(OutputGrid)