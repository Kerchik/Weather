import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather.jsx";
import Test from "./components/Test";

const API_KEY = "0ee6bd66c4f2ef133f03d43e9c14f56e";
class App extends React.Component {
    
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }
    gettingWeather = async (e) => {
        e.preventDefault();
        let city = e.target.elements.city.value;
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); 
            const data = await api_url.json();
        if(city){
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); 
            const data = await api_url.json();
            console.log(data);
            
             let sunsetInSec = data.sys.sunset;
             let date = new Date(sunsetInSec * 1000);
             let minutes; 
             if (date.getMinutes() < 10) {
                 minutes = "0" + date.getMinutes();
             } else {
                 minutes = date.getMinutes();
             }
             let sunset_date = date.getHours() + ":" + minutes;
        
            
        this.setState({
           temp: data.main.temp,
           city: data.name,
           country: data.sys.country,
           pressure: data.main.pressure,
           sunset: sunset_date,
            error: undefined
        }); 
        } else {
         this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            pressure: undefined,
            sunset: undefined,
            error: "Введите название города"
        }); 
        }
    }
    render() {
        return(
            <div className ="wrapper">
              <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 info">
                            <Info />
                        </div>
                        <div className="col-sm-7 form">
                           <Form weatherMethod={this.gettingWeather} />
                            <Weather 
                            temp={this.state.temp}
                            city={this.state.city}
                            country={this.state.country}
                            pressure={this.state.pressure}
                            sunset={this.state.sunset}
                            error={this.state.error}

                            />
                            <Test /> 
                        </div>
                    </div>
                </div>
            
                
               </div> 
                
            </div>
        );
    }
}
export default App;