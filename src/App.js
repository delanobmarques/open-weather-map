import { useEffect, useState } from 'react';
import Forecast from './components/Forecast/forecast.component';
import Inputs from './components/Inputs/inputs.component';
import TemperatureAndDetails from './components/TemperatureAndDetails/temperature-and-details.component';
import TimeAndLocation from './components/TimeAndLocation/time-and-location.component';
import TopButtons from './components/TopButton/top-buttons.component';
import getFormattedWeatherData from './services/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  App = () => {

  const [query, setQuery] = useState({ q: "Halifax" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {

      const location = query.q ? query.q : "current location.";
      
      toast.info("Fetch weather for " + location);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
          toast.success(`Weather data successfully retrieved for ${data.name}, ${data.country}`);
          console.log(data);
          setWeather(data);          
        }
      );
    }
    fetchWeather();
  }, [query, units]);  

  const updateBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 68;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-4 
                    pt-4 pb-10 px-32 bg-gradient-to-br
                    h-fit shadow-xl shadow-gray-400 
                    ${updateBackground()}`}
    >
      {/* <TopButtons setQuery={setQuery} /> */}
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather = {weather}/>
          <TemperatureAndDetails weather = {weather} />    
          <Forecast title="Hourly Forecast" items={weather.formattedForecastWeather.hourly}  />
          <Forecast title="Daily Forecast" items={weather.formattedForecastWeather.daily} />
        </>
      )}

      <ToastContainer autoClose={3000} theme="colored" newestOnTop={true}/>
      
    </div>
  );
}

export default App;
