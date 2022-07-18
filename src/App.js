import UilReact from '@iconscout/react-unicons/icons/uil-react';
import Forecast from './components/Forecast/forecast.component';
import Inputs from './components/Inputs/inputs.component';
import TemperatureAndDetails from './components/TemperatureAndDetails/temperature-and-details.component';
import TimeAndLocation from './components/TimeAndLocation/time-and-location.component';
import TopButtons from './components/TopButton/top-buttons.component';
import getFormattedWeatherData from './services/weatherService';

// e5eef79e8d6857802d5c58ec8e6108c0
// https://api.openweathermap.org/data/2.5/weather?q=halifax&appid=e5eef79e8d6857802d5c58ec8e6108c0
const  App = () => {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: "halifax"})
    console.log(data);
  }

  fetchWeather();

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-hit shadow-xl shadow-gray-400'>
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />

      <Forecast title="Hourly Forecast"/>
      <Forecast title="Daily Forecast"/>
    </div>
  );
}

export default App;
