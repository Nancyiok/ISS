import styles from "./header.module.css";

function Header() {
    return <header className={styles.header}>
        <div>
            <h1>International Space Station – Current Location</h1>
            <p>Track the ISS in real time: coordinates, crew, and position on the map.</p>
        </div>
        <img src="/images/ISS-icon.svg" />
    </header>
}

export default Header;