import background from '../Assets/background-img.jpg'
import { useState } from 'react'
const element = document.getElementsByClassName('cityInput')
const humidity = document.getElementsByClassName('humidity-percentage')
const wind = document.getElementsByClassName('wind-rate')
const weather = document.getElementsByClassName('weather-temp')
const location = document.getElementsByClassName('weather-location')
const time = document.getElementsByClassName('time')
const date = document.getElementsByClassName('date')
import { FaBolt, FaCloud, FaCloudMoon, FaCloudRain, FaCloudShowersHeavy, FaCloudSun, FaMoon, FaSmog, FaSnowflake, FaSun } from 'react-icons/fa6'

const Weather = () => {

  const [wicon, setWicon] = useState('')  
  
  let api_key = '4b6631a7948d6308f1f513f3173b84c3'
  
  const search = async () => {
    
    if (element[0].value === ''){
      return 0
    } 
    let url =  `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`
    
    let response = await fetch(url)
    let data = await response.json()

    let userLatitude = data.coord.lat
    let userLongitude = data.coord.lon
    let userDate = new Date()
    userDate.setTime(userDate.getTime() + (userDate.getTimezoneOffset() * 60 * 1000) +(userLatitude * 4 * 60 * 1000) +(userLongitude * 4 * 60 * 1000))
    let userHours =userDate.getHours()
    let userMinutes =userDate.getMinutes()
    let userDay =userDate.getDay()
    let userMonth =userDate.getMonth() + 1
    let userYear =userDate.getFullYear()
    
    time[0].innerHTML = userHours + ' : ' + userMinutes
    date[0].innerHTML = userDay + ' : ' + userMonth + ' : ' + userYear
    location[0].innerHTML = data.name + ', ' + data.sys.country
    wind[0].textContent =Math.floor(data.wind.speed * 3.6) + 'km/ h'
    humidity[0].innerHTML = data.main.humidity + '%'
    weather[0].innerHTML = Math.floor(data.main.temp / 10 )+ ' C'

    if(data.weather[0].icon === '01d') {
      setWicon(<FaSun/>)
    } else if (data.weather[0].icon === '01n') {
      setWicon(<FaMoon/>)
    } else if(data.weather[0].icon === '02d') {
      setWicon(<FaCloudSun/>)
    } else if (data.weather[0].icon === '02n') {
      setWicon(<FaCloudMoon/>)
    } else if(data.weather[0].icon === '03d') {
      setWicon(<FaCloud/>)
    } else if (data.weather[0].icon === '03n') {
      setWicon(<FaCloud/>)
    } else if(data.weather[0].icon === '04d') {
      setWicon(<FaCloud/>)
    } else if (data.weather[0].icon === '04n') {
      setWicon(<FaCloud/>)
    } else if(data.weather[0].icon === '09d') {
      setWicon(<FaCloudShowersHeavy/>)
    } else if (data.weather[0].icon === '09n') {
      setWicon(<FaCloudShowersHeavy/>)
    } else if(data.weather[0].icon === '10d') {
      setWicon(<FaCloudRain/>)
    } else if (data.weather[0].icon === '10n') {
      setWicon(<FaCloudRain/>)
    } else if(data.weather[0].icon === '11d') {
      setWicon(<FaBolt/>)
    } else if (data.weather[0].icon === '11n') {
      setWicon(<FaBolt/>)
    } else if (data.weather[0].icon === '13n') {
      setWicon(<FaSnowflake/>)
    } else if (data.weather[0].icon === '13n') {
      setWicon(<FaSnowflake/>)
    } else{
      setWicon(<FaSmog/>)
    }
    element[0].value = ''
  }
  return (
    <>
      <img className='background' src={background} alt="" />
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="Search"/>
          <div className="search-icon" onClick={() => {search()}}>
            &#128269;
          </div>
        </div>
        <div className="weather-location"></div>
        <div className="weather-icon-temp">
          <div className='weather-icon'>{wicon}</div>
          <div className="weather-temp"></div>
        </div>
        <div className="data-container">
          <div>
            <div className="data">
              <div className="humidity-percentage"></div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div>
            <div className="data">
              <div className="wind-rate"></div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
        <div className="date-time">
          <div className="time"></div>
          <div className="date"></div>
        </div>
      </div>
    </>
  )
}
export default Weather