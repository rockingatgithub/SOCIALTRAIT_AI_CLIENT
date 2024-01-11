import Footer from "../Footer"
import Header from "../Header"
import Main from "../Main"
import styles from "./home.module.css"

const Home = () => {
    return <div className={styles["home"]}>
        <Header/>
        <Main/>
        <Footer/>
    </div>
}


export default Home