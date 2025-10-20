import styles from "./error.module.css";
function Error({ err }) {
    return (
        <div className={styles.error}>
            <h2 className={styles.title}>{err.message}</h2>
            <img className={styles.img} src="/images/error-icon.svg" alt="Error icon" />
        </div>
    );
}

export default Error;
