import React from 'react'

const WeatherCard = ({ day, date, time, icon, description, temp }) => {
    return(
        <div className="ui card">
            <div className="content center aligned">
                <h3 className="header center aligned">{day}</h3>
                <div className="meta center aligned">
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
                <img 
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png` } 
                    className="center aligned" 
                    alt={description}
                />
                <div className="description center aligned">
                    {description.charAt(0).toUpperCase() + description.slice(1)}
                </div>
                <div className="description center aligned">
                    {`Temperature: ${temp}`}
                </div>
            </div>
        </div>
    )
}


export default WeatherCard