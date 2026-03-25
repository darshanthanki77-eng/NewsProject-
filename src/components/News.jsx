import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import articles from './data'
import axios from 'axios'
// import 

const News = ({ pageSize, country, category, setProgress }) => {
    const [news, SetNews] = useState([])
    const [Pages, setpages] = useState(1)
    const [totalResults, setTotalResult] = useState()

    // import FROM env file
    // const apikey = process.env.API_KEY2
    console.log("category", category)


    const NewsApi = async () => {
        try {
            setProgress(10)
            let url

            if (country === 'in') {
                if (category === 'general') {
                    url = `/api/v2/top-headlines?q=india&apiKey=e8a40b658d2f45158ac586cecedef042&page=${Pages}&pageSize=${pageSize}`
                } else {
                    url = `/api/v2/everything?q=india ${category}&sortBy=publishedAt&apiKey=e8a40b658d2f45158ac586cecedef042&page=${Pages}&pageSize=${pageSize}`
                }
            } else {
                url = `/api/v2/top-headlines?country=${country}&category=${category}&apiKey=e8a40b658d2f45158ac586cecedef042&page=${Pages}&pageSize=${pageSize}`
            }
            setProgress(70)

            
            const data1 = await axios.get(url)
            console.log(data1)

            setTotalResult(data1.data.totalResults)
            SetNews(data1.data.articles)
            setProgress(100)

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 p-8 max-w-[1600px] mx-auto">
                {/* Props data              */}
                {news.map((articles, index) =>
                    <div key={index} className="flex justify-center">
                        <NewsItems imgurl={articles.urlToImage} author={articles.author} title={articles.title} content={articles.content} publish={articles.publishedAt} url={articles.url} newschannel={articles.source.name} />
                    </div>
                )}

            </div>
            <div className='flex items-center justify-center gap-8 my-16'>
                <button
                    disabled={Pages === 1}
                    onClick={() => { setpages(Pages - 1) }}
                    className='group px-6 py-2 border-2 border-red-900 rounded-full font-bold text-red-900 hover:bg-red-900 hover:text-white transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed flex items-center gap-2'
                >
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span> Prev
                </button>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-900 text-white font-black shadow-lg">
                    {Pages}
                </div>
                <button
                    disabled={(Pages * pageSize >= totalResults)}
                    onClick={() => { setpages(Pages + 1) }}
                    className='group px-6 py-2 border-2 border-red-900 rounded-full font-bold text-red-900 hover:bg-red-900 hover:text-white transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed flex items-center gap-2'
                >
                    Next <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
            </div>
        </>
    )
}

export default News
