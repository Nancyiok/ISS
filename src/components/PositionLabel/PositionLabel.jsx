import styles from "./position.module.css"
function Label({ data }) {
    return <section className={styles.section}>
        <header className={styles.header}>
            <h2>Current Coordinates</h2>
            <img src="/images/map-label.svg" alt="Map icon" />
        </header>
        <dl className={styles.coordsList}>
            <div>
                <dt>Latitude:</dt>
                <dd>{data.latitude}</dd>
            </div>
            <div>
                <dt>Longitude:</dt>
                <dd>{data.longitude}</dd>
            </div>
        </dl>
    </section>
}

export default Label;