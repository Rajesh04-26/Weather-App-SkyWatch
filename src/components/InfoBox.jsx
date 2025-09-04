import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    
    let HOT_URL = "./src/assets/Hot.jpg";
    let COLD_URL = "./src/assets/Cold.jpg";
    let RAIN_URL = "./src/assets/Rain.jpg";

    return (
     <div className="info-box">
        <div className='card'>
        <Card sx={{ maxWidth: 450 }}>
        <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={
            info.humidity > 80 
            ? RAIN_URL
            : info.temp > 15
            ? HOT_URL 
            : COLD_URL
          }
          alt="Weather Img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
              info.humidity > 80 
            ? <ThunderstormIcon />
            : info.temp > 15
            ? <SunnyIcon />
            : <AcUnitIcon />
            }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature ~ {info.temp}&deg;C</p>
            <p>Humidity ~ {info.humidity}</p>
            <p>Min Temp ~ {info.tempMin}&deg;C</p>
            <p>Max Temp ~ {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelslike}&deg;C.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    )
}
