import './WeatherApp.css';
import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';
import Footer from './Footer.jsx';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "New Delhi",
    temp: 26.49,
    tempMin: 26.49,
    tempMax: 26.50,
    humidity: 85,
    feelslike: 26.49,
    weather: "overcast clouds",
  });

  const [darkMode, setDarkMode] = useState(true); 

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className={`main ${darkMode ? "dark" : "light"}`}>
      <header>
        <h1>🌦️ SkyWatch</h1>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
          label={darkMode ? "Dark Mode" : "Light Mode"}
        />
      </header>

      <p className="quote">
        "Wherever you go, no matter what the weather, always bring your own sunshine." 🌞
      </p>

      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
      <Footer />
    </div>
  );
}
