import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

 //env file
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  if (!API_URL || !API_KEY) {
    console.error("Missing VITE_API_URL or VITE_OPENWEATHER_KEY in env");
  }

  const getWeatherInfo = async () => {
    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const jsonResponse = await response.json();

    const result = {
      city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelslike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    return result;

    } catch(err) {
        throw err;
    }
  };

  const handleChange = (e) => setCity(e.target.value);

  const handleSubmit = async (e) => {
  try {
    e.preventDefault();
    const newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    setCity("");
    setError(false); 
  } catch(err) {
    setError(true);
  }
};


  return (
    <div className='search-box'>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
        <br /><br />
        <Button variant="contained" type='submit' endIcon={<SearchIcon />}>Search</Button>
        {error && <p style={{color: "red", fontFamily:"Arial"}}>No such place exist in our App!</p>}
      </form>
    </div>
  );
}
