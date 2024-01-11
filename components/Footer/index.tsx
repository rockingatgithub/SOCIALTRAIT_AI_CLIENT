import styles from "./footer.module.css"

const Footer = () => {

    return <div className={styles.footer} >
        <div id="footer-links" >
            Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact
        </div>
        <div id="search"> 
            <label htmlFor="search">Search:</label> 
            <input id="search" type="text"  /> 
        </div>
    </div>

}

export default Footer