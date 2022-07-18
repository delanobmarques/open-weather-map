import UilReact from '@iconscout/react-unicons/icons/uil-react';
import Inputs from './components/Inputs/inputs.component';
import TemperatureAndDetails from './components/TemperatureAndDetails/temperature-and-details.component';
import TimeAndLocation from './components/TimeAndLocation/time-and-location.component';
import TopButtons from './components/TopButton/top-buttons.component';

const  App = () => {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-hit shadow-xl shadow-gray-400'>
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
    </div>
  );
}

export default App;
