import './MCUShows.css';

function MCUShows ({dates}){

    return(
        <div className ="MCUShows">
            <h1 style ={{fontFamily:'Georgia', textDecoration: 'underline'}}>Disney+ </h1>
            <p>WandaVision: {dates.wandaVision}</p>
            <p>The Falcon and the Winter Soldier : {dates.falconWinter}</p>
            <p>Loki: {dates.loki}</p>
            <p>What If...?: {dates.whatIf}</p>
            <p>Hawkeye: {dates.hawkeye}</p>
            <button onClick>RANDOM MCU CHARACTER</button>
        </div>
    );
}

export default MCUShows;
