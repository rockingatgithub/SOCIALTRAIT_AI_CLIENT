import { useEffect, useState } from "react"
import { News } from "../Types/Main/news.types"
import styles from "./main.module.css"

const Main = () => {

    const [newsList, setNewsList] = useState<News[]>([])

    useEffect( () => {

        async function getLatestNews () {

            const newsResponse = await fetch('http://localhost:8000/scrap')
            
            if (newsResponse.status === 200) {
                const newsData = await newsResponse.json()
                setNewsList(newsData)
            }

        }
        getLatestNews()

    }, [])

    return <div>

        <ul>
            { newsList.map( news => <li>
                    <span> {news.title} </span> <br/>
                    <span> {news.author} &nbsp; by {news.postedTime} </span>
                </li> 
            )}
        </ul>

    </div>

}

export default Main