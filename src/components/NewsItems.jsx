import React from 'react'
import articles from './data'
import { Link } from 'react-router-dom'
import errorGif from '../assets/error.gif'



const NewsItems = ({ imgurl, author, title, content, publish, url, newschannel }) => {
    return (
        <div>
            {/* direct map with out props map */}
            {/* {articles.map((articles,index)=>  */}
            <div className="flex flex-wrap justify-around gap-5  items-center bg-gray-50 font-sans" >

                <div className="w-[320px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">

                    <div className="absolute -top-12 -right-12 w-[100px] h-[100px] bg-[#580000] rotate-44 flex items-center justify-center text-white text-[8.3px] font-bold pt-20   ">
                        {newschannel}
                    </div>

                    <img
                        src={imgurl ? imgurl : errorGif}

                        className="w-full h-[180px] object-cover"
                    />

                    <div className="p-5 relative">

                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                            <span>{new Date(publish).toLocaleString("en-GB", {
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit"
                            })}</span>
                            <span>{author}</span>
                        </div>

                        <h2 className="text-[#580000] text-lg font-semibold mb-3 leading-snug">
                            {title}
                        </h2>

                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                            {content}
                        </p>

                        <Link to={url}
                            className="text-[#580000] text-sm font-semibold inline-flex items-center group">
                            Read More
                            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>


                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#580000]"></div>

                </div>

            </div>


            {/* )} */}

        </div>
    )
}

export default NewsItems