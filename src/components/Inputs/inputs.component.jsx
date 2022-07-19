import React, { useState } from 'react';
import { UilSearchAlt, UilMapPinAlt } from '@iconscout/react-unicons';

const Inputs = ({setQuery, units, setUnits}) => {
    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        city && setQuery({q: city})
    }

    const handleLocationClick = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({ lat, lon });
            })
        }
    } 

    const handleUnitChange = (event) => {
        const selectedUnit = event.currentTarget.name;
        if(units !== selectedUnit) setUnits(selectedUnit);

    }

  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify center space-x-4">
            <input 
                value={city}
                onChange={(event) => setCity(event.currentTarget.value)}
                type="text" 
                placeholder='Search for a city...'
                className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"                 
            />
            <UilSearchAlt 
                size={25} 
                className="text-white cursor-pointer transtion ease-out hover:scale-125" 
                onClick={handleSearchClick}
            />
            <UilMapPinAlt 
                size={25} 
                className="text-white cursor-pointer transtion ease-out hover:scale-125" 
                onClick={handleLocationClick}
            />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
            <button 
                name="metric" 
                className="name=metric text-xl text-white font-light cursor-pointer transtion ease-out hover:scale-125"
                onClick={handleUnitChange}
            >
                ºC
            </button>
            
            <p className="text-xl text-white mx-2">|</p>
            
            <button 
                name="imperial" 
                className="name=metric text-xl text-white font-light cursor-pointer transtion ease-out hover:scale-125"
                onClick={handleUnitChange}
            >
                ºF
            </button>
        </div>
        
    </div>
  )
}

export default Inputs