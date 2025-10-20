import { useState, useEffect } from "react";
import styles from "./switch.module.css";
function Switch() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const sun = "/images/light-theme-icon.svg";
    const moon = "/images/dark-theme-icon.svg";
    const iconPath = theme === "light" ? moon : sun;
    useEffect(() => {
        if (theme === "light") {
            document.body.classList.add("light-theme");
        } else {
            document.body.classList.remove("light-theme");
        }
    }, [theme]);

    const changeTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    return (
        <button type="button" onClick={changeTheme} className={styles.button}>
            <img className={styles.switch} src={iconPath} alt="Theme switcher" />
        </button>
    );
}

export default Switch;