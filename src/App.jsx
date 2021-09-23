import React, {useState} from "react";
import Info from "./components/Info.jsx";
import Form from "./components/Form.jsx";
import Weather from "./components/Weather.jsx";
import requests from "./api/requests.js";

const App = () => {
    const [state, setState] = useState({
        temp: null,
        city: null,
        country: null,
        pressure: null,
        sunset: null,
        error: null
    })
    const [city, setCity] = useState('')

    const setCityHandler = (value) => {
        setCity(value)
    }
    
    const getWeather = async (e) => {
        e.preventDefault();
        if (city) {
            const data = await requests.getWeather(city)
            if (data.cod === 200) {
                const sunsetInSec = data.sys.sunset;
                const date = new Date(sunsetInSec * 1000);
                let minutes; 
                if (date.getMinutes() < 10) {
                    minutes = "0" + date.getMinutes();
                } else {
                    minutes = date.getMinutes();
                }
                const sunset_date = date.getHours() + ":" + minutes;
            
                setState({
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    sunset: sunset_date,
                    error: null
                });
            } else {
                setState({
                    temp: null,
                    city: null,
                    country: null,
                    pressure: null,
                    sunset: null,
                    error: data.message
                }); 
            }
        } else {
            setState({
                temp: null,
                city: null,
                country: null,
                pressure: null,
                sunset: null,
                error: "Enter the name of the city"
            }); 
        }
    }

    return (
        <div className ="wrapper">
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 info">
                            <Info />
                        </div>
                        <div className="col-lg-7 form">
                            <Form weatherMethod={getWeather} city={city} setCityCallback={setCityHandler}/>
                            <Weather 
                                temp={state.temp}
                                city={state.city}
                                country={state.country}
                                pressure={state.pressure}
                                sunset={state.sunset}
                                error={state.error}
                            />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default App;