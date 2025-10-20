import axios from "axios";
import { useEffect, useState } from "react";
import PositionMap from "../PositionMap/PositionMap";
import PositionLabel from "../PositionLabel/PositionLabel";
import TimeLabel from "../TimeLabel/TimeLabel";
import PeopleISS from "../PeopleISS/PeopleISS";
import styles from "./mission.module.css";
import { RingLoader } from "react-spinners";
import Error from "../Error/Error";
function MissionInfo() {
    const [coords, setCoords] = useState(null);
    const [crew, setCrew] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function getAPIData() {
            try {
                const [coordsResult, crewResult] = await Promise.all([
                    // Використала тут аналогічний API, бо він більш стійкий до великої кількості запитів
                    // і політика CORS не буде заважати.
                    // Тобто, замість http://api.open-notify.org/iss-now.json використала:
                    axios.get("https://api.wheretheiss.at/v1/satellites/25544"),
                    // axios.get("http://api.open-notify.org/iss-now.json"),
                    axios.get('http://api.open-notify.org/astros.json')
                ]);

                // const issPos = coordsResult.data.iss_position;
                const issPos = coordsResult.data;
                setCoords({
                    latitude: issPos?.latitude,
                    longitude: issPos?.longitude
                });

                const issCrew = crewResult.data?.people?.filter((p) => p.craft === "ISS");
                setCrew(issCrew);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        getAPIData();
        const interval = setInterval(getAPIData, 5000);
        return () => clearInterval(interval);
    }, []);

    if (error) {
        if (!error.response) {
            return <Error err={error} />;
        }
    }


    if (loading || !coords) {
        return (
            <div className={styles.loaderFullScreen}>
                <RingLoader color="#645d5dff" size={70} loading={true} />
            </div>
        );
    }

    return (
        <main className={styles.container}>
            <div className={styles.leftColumn}>
                <PositionMap data={coords} />
                <PositionLabel data={coords} />
            </div>
            <div className={styles.rightColumn}>
                <TimeLabel />
                <PeopleISS crew={crew} />
            </div>
        </main>
    );
}

export default MissionInfo;