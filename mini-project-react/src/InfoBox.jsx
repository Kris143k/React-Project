import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? "../rain.jpg" : info.temp > 25 ? "../hot.jpg" : "../cold.jpg"}
                        title="Weather Image"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Minimum temperature: {info.minTemp}</p>
                            <p>Maximum temperature: {info.maxTemp}</p>
                            <p>Humidity: {info.humidity}</p>
                            <p>The weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelsLike}.</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}