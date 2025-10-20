import { useEffect, useState } from "react";
import styles from "./time-label.module.css";
function TimeLabel() {
    const [timeNow, setTimeNow] = useState(new Date());
    useEffect(() => {
        setInterval(() => setTimeNow(new Date()), 1000);
    }, [timeNow]);
    const UTCtime = {
        "hour": `${timeNow.getUTCHours()}`,
        "minutes": `${timeNow.getUTCMinutes()}`,
        "seconds": `${timeNow.getUTCSeconds()}`
    }
    return <section className={styles.section}>
        <div className={styles.header}>
            <h2>Current Time (UTC)</h2>
            <img src="/images/clock-icon.svg" alt="Clock icon" />
        </div>
        <time dateTime={timeNow.toISOString()} className={styles.time}>
            <span>{UTCtime.hour.padStart(2, "0")}</span>:
            <span>{UTCtime.minutes.padStart(2, "0")}</span>:
            <span>{UTCtime.seconds.padStart(2, "0")}</span>
        </time>
    </section>

}

export default TimeLabel;