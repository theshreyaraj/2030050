import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './styles.css';

const App=()=>{
  const [trains,setTrains]=useState([]);
  useEffect(()=>{
    fetchTrainData();
  },[]);

  const fetchTrainData = async()=>{
    try{
      const response = await axios.get('http://20.244.56.144/train/register');
      const trainData = response.data;
      setTrains(trainData);
    }catch(error){
      console.error('Error in fetching the data',error);
    }
  };

  return(
    <div className ='container'>
      <h1>John Doe Railways-Train Schedules</h1>
      <div className="trauin-list">
        {trains.map((train)=>(
          <div key ={train.trainNumber} className="train">
            <h2>{train.trainName}</h2>
            <p>Departure Time:{train.departureTime}</p>
            <p>Delay:{train.delay} minutes</p>
            <p>Seat Availability(Sleeper):{train.sleeperSeats}</p>
            <p>Seat Availability(AC):{train.acSeats}</p>
            <p>Price(AC):{train.acPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;