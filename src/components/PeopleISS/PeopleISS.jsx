import styles from "./peopleISS.module.css"
function PeopleISS({ crew }) {
    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <h2>Current ISS Crew</h2>
                <p>Number of crew members: <strong>{crew.length}</strong></p>
            </header>
            <ul className={styles.peopleContainer}>
                {crew.map((human) => (
                    <li key={human.name} className={styles.humanInfo}>
                        <img src="/images/astronaut-icon.svg" alt="Astronaut-icon" />
                        <span>{human.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
export default PeopleISS;
