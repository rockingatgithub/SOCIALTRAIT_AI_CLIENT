import { useEffect, useState } from "react"
import { News } from "../Types/Main/news.types"
import styles from "./main.module.css"

const Main = () => {

    const [newsList, setNewsList] = useState<News[]>([])

    useEffect(() => {

        // function to fetch the lastet news items from the server.
        async function getLatestNews() {

            try {

                const newsResponse = await fetch('http://localhost:8000/latestNews')
                const newsData = await newsResponse.json()
                if (newsResponse.status === 200) {
                    setNewsList(newsData)
                } else {
                    alert("Error occured from server side!")
                }

            } catch (error) {
                alert("Error occured while fetching news data!")
            }

        }
        getLatestNews()

    }, [])

    return <div>

        <ul className={styles["news-list"]}>
            {newsList.map((news, index) => <li className={styles["news-item"]}>
                <span className={styles["item-number"]}>{index + 1}. &nbsp;</span>
                <span className={styles["item-title"]}> {news.title} </span> <br />
                <span className={styles["item-author"]}>by {news.author} &nbsp; {news.postedTime} </span>
            </li>
            )}
        </ul>

    </div>

}

export default Main