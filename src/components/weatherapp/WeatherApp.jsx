import React, { useState } from "react"
import "./weatherapp.css"

import search_icon from "../assets/search.png"
import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import drizzle_icon from "../assets/drizzle.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import wind_icon from "../assets/wind.png"
import humidity_icon from "../assets/humidity.png"

const WeatherApp = () => {
    const[wicon, setWIcon] = useState(cloud_icon);
    

    const api_key = "17a3b7fce3dcaab971f745c3b51d982a";
     async function search (){
        const element = document.getElementsByClassName("cityInput");
        if(element[0]===""){
            return 0;
        }


        // let url_loc = `http://api.openweathermap.org/geo/1.0/direct?q=${element[0].value}&units=Metric&limit=5&appid=${api_key}`;
        
        // let response_loc = await fetch(url_loc);
        // let data_loc = await response_loc.json();

        let URRL = `https://api.openweathermap.org/data/2.5/weather?units=Metric&q=${element[0].value}&appid=${api_key}`
        let response_urrl = await fetch(URRL);
        let data_URL = await response_urrl.json();


        // let url_lat_lon = `https://api.openweathermap.org/data/2.5/weather?lat=${data_loc.lat}&lon=${data_loc.lon}&units=Metric&appid=${api_key}`;
        // let response_lat_lon = await fetch(url_lat_lon);
        // let data_lat_lon = await response_lat_lon.json();
        
        let humidity = document.getElementsByClassName("humidity-percentage");
        let location = document.getElementsByClassName("weather-location");
        let temperature = document.getElementsByClassName("weather-temp");
        let wind = document.getElementsByClassName("wind-speed");

        humidity[0].innerHTML= data_URL.main.humidity;
        location[0].innerHTML= element[0].value;
        temperature[0].innerHTML= data_URL.main.temp+"℃";
        wind[0].innerHTML= data_URL.wind.speed;

        if(data_URL.weather[0].icon==="01d" || data_URL.weather[0].icon==="01n")
    {
        setWIcon(clear_icon);
    }
    else if(data_URL.weather[0].icon==="02d" || data_URL.weather[0].icon==="02n"){
        setWIcon(cloud_icon);
    
    }
    else if(data_URL.weather[0].icon==="03d"||data_URL.weather[0].icon==="03n"){
    setWIcon(drizzle_icon);
    }
    else if (data_URL.weather[0].icon==="04d"||data_URL.weather[0].icon==="04n"){
        setWIcon(drizzle_icon);    
    }
    else if(data_URL.weather[0].icon==="09d"||data_URL.weather[0].icon==="09n"){
        setWIcon(rain_icon);
        }
        else if (data_URL.weather[0].icon==="10d"||data_URL.weather[0].icon==="10n"){
            setWIcon(rain_icon);
        } else if (data_URL.weather[0].icon==="13d"||data_URL.weather[0].icon==="13n"){
            setWIcon(snow_icon);    
        } 
        else{
            setWIcon(snow_icon);
        }


     } 
    return ( 
        <div className="wap-container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search for city..."/>
                <div className="search-icon" onClick={search}>
                    <img src={search_icon}/>
                    </div>          
            </div>
            <div className="weather-img">
                <img src={wicon}/>
            </div>
           <div className="weather-temp"> 24°C</div>
           <div className="weather-location">London</div>
           <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percentage">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>

            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-speed">18 kmph</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>

           


           </div>

            
        </div>
     );
}
 
export default WeatherApp ;