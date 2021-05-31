import React, { useEffect, useState } from "react";
import "./styles/style.css";
const Myapp=()=>{
    const[city,setCity]=useState(null);
    const[country,setCountry]=useState("Abohar");
    const[weather,setWeather]=useState("Abohar");
    const[search,setSearch]=useState("Abohar");
    const[dark,setDark]=useState(false);
    useEffect(()=>{
        const fetchApi1=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e36cd3cc293a484f8a379f69662b46ef`;
            const response= await fetch(url);
            const jsonResponse=await response.json();
            setCity(jsonResponse.main);
            setCountry(jsonResponse.sys);
            setWeather(jsonResponse.weather);
        }
        fetchApi1();
    },[search])
    return(
        <div className={dark?"backdark":"background"}>
            <h1 className="box-title">Weather</h1>
            <div className="sun"><i className={dark?"fas fa-sun sunin":"fas fa-sun sunout"}></i></div>
            <div className={dark?"boxdark":"box"}>
                <input type="search" className={dark?"input-dark":"input-city"} placeholder="Abohar" onChange={(event)=>{setSearch(event.target.value)}}/>
                <div className="switchdark">
                <i className={dark?"fas fa-moon dark-icons":"fas fa-moon light-icons"}></i>
                <label className="switch">
                <input className="switchcheck" type="checkbox" onChange={()=>setDark(!dark)}/>
                <span className="slider round"></span>
                </label>
                <i className={dark?"fas fa-sun dark-icons":"fas fa-sun light-icons"}></i>
                </div>
                {!city||!country||!weather?(
                    <h1 className="error">No Data Available</h1>
                ):(
                    <div class="flex-container">
                    <div className="info">
                    <h1 className="location"><i className="fas fa-street-view"></i>{search}, {country.country}</h1>
                    <h1 className="temp"><i className="fas fa-temperature-low"></i> {city.temp}°C</h1>
                    <h6 className="tempmin">Min: {city.temp_min}°C</h6>
                    <h6 className="tempmin">Max: {city.temp_max}°C</h6>
                    </div>
                    <div className="info2">
                        <h3 className="sky">{weather[0].main}</h3>
                        <h3 className="sky2">{weather[0].description}</h3>
                        <h3 className="pressure">Pressure: {city.pressure} Pa</h3>
                        <h3 className="humidity">Humidity: {city.humidity}</h3>
                    </div>
                    </div>
                )}
            </div>
            <div className="wave"></div>
            <div className="wave"></div>
        </div>
    )
}
export default Myapp;