import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import articles from './data'
import axios from 'axios'

const News = ({ pageSize, country, category }) => {
    const [news, SetNews] = useState([])
    const [Pages, setpages] = useState(1)
    const [totalResults, setTotalResult] = useState()

    // import FROM env file
    // const apikey = process.env.API_KEY2
    console.log("category", category)


    const NewsApi = async () => {
        try {
            let url

            if (country === 'in') {
                if (category === 'general') {
                    url = `/api/v2/top-headlines?q=india&apiKey=f4068164b86c4de1bff9c382168dc49a&page=${Pages}&pageSize=${pageSize}`
                } else {
                    url = `/api/v2/everything?q=india ${category}&sortBy=publishedAt&apiKey=f4068164b86c4de1bff9c382168dc49a&page=${Pages}&pageSize=${pageSize}`
                }
            } else {
                url = `/api/v2/top-headlines?country=${country}&category=${category}&apiKey=f4068164b86c4de1bff9c382168dc49a&page=${Pages}&pageSize=${pageSize}`
            }

            // ✅ THIS IS THE FIX
            const data1 = await axios.get(url)
            console.log(data1)

            setTotalResult(data1.data.totalResults)
            SetNews(data1.data.articles)

            console.log(data1.data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        NewsApi();


    }, [Pages, category]);

    return (
        <>
            <div className="grid grid-cols-4 gap-10 p-10">
                {/* Static data */}
                {/* {articles.map((articles, index) =>
                <div key={index}>
                    <NewsItems imgurl={articles.urlToImage} author={articles.author} title={articles.title} content={articles.content} publish={articles.publishedAt} url={articles.url} />
                </div>
            )} */}

                {/* Props data              */}
                {news.map((articles, index) =>
                    <div key={index}>
                        <NewsItems imgurl={articles.urlToImage} author={articles.author} title={articles.title} content={articles.content} publish={articles.publishedAt} url={articles.url} newschannel={articles.source.name} />
                    </div>
                )}

            </div>
            <div className='flex justify-center gap-10 mb-10'>
                <button disabled={Pages === 1} onClick={() => { setpages(Pages - 1) }} className='p-2 border-1 border-red-800 rounded-xl hover:bg-red-900 text-red-900 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-red-300 '>Prev</button>
                <b>{Pages}</b>
                <button disabled={(Pages + 1 > Math.ceil(totalResults / 10))} onClick={() => { setpages(Pages + 1) }} className='p-2 border-1  border-red-800 text-red-800 rounded-xl hover:bg-red-900 hover:text-white  disabled:opacity-50 disabled:cursor-not-allowed'>Next</button>
            </div>
        </>
    )
}

export default News
