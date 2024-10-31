import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp() {
    let [weatherInfo,setWeatherInfo] = useState({
        city: "Birgunj",
        temp: 25,
        minTemp: 20,
        maxTemp: 30,
        humidity: 50,
        feelsLike: "rain",
        weather: "Blur"
    })
    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return (
        <>
          <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
          </div>
        </>
    )
}