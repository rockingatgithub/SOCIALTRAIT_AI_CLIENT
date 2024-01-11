import styles from './header.module.css'

const Header = () => {

    return <div className={styles.main}>
        <div>
            <div id="image" > 
                <img className={styles["brand-image"]} src="https://news.ycombinator.com/y18.svg" /> 
            </div>
            <div className={styles.menu} >
                <div className={styles.heading} >Hacker News</div> 
                <div id="links" >
                    new |
                    past | 
                    comments |
                    ask |
                    show |
                    jobs | 
                    submit
                </div>
            </div>
        </div>
        <div className={styles.login}>
            login
        </div>
    </div>

}

export default Header