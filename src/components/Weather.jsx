import React from "react";

const Weather = ({city, country, temp, pressure, sunset, error}) => {
    return (
        <div className="margin-below-xl">
            {city &&
                <div>
                    <p>Location: {city},{country}</p>
                    <p>Temperature: {temp}</p> 
                    <p>Pressure: {pressure}</p>
                    <p>Sunset: {sunset}</p> 
                </div>
            }
            <p className="text-warning">{error}</p>   
        </div>
    )
}
    
export default Weather;