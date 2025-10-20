import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import styles from "./position.module.css";
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
function PositionMap({ data }) {
    const position = {
        lat: data.latitude ? parseFloat(data.latitude) : 0,
        lng: data.longitude ? parseFloat(data.longitude) : 0
    };
    const customMarkerDetails = {
        url: '/images/ISS-photo.png',
        size: { width: 200, height: 80 },
        scaledSize: { width: 140, height: 90 },
    }
    return (
        <APIProvider
            solutionChannel="GMP_devsite_samples_v3_rgmbasicmap"
            apiKey={API_KEY}
        >
            <div className={styles.container}>
                <Map
                    className={styles.map}
                    defaultZoom={3}
                    defaultCenter={position}
                    gestureHandling="greedy"
                    mapId="739af084373f96fe"
                    disableDefaultUI={true}
                >
                    <Marker position={position} icon={customMarkerDetails} />
                </Map>
            </div>
        </APIProvider>
    );
}

export default PositionMap;
