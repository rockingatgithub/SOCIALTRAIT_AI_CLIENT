import styles from "./footer.module.css"

//  ================================= the footer component ===================================
const Footer = () => {

    return <div className={styles.footer} >
        <div className={styles["footer-links"]} >
            Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact
        </div>
        <div className={styles["search"]} >
            <label htmlFor="search">Search:</label>
            <input id="search" className={styles["search-input"]} type="text" />
        </div>
    </div>

}

export default Footer