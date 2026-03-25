import React from 'react'
import articles from './data'
import { Link } from 'react-router-dom'
import errorGif from '../assets/error.gif'



const NewsItems = ({ imgurl, author, title, content, publish, url, newschannel }) => {
    return (
        <div>
            {/* direct map with out props map */}
            {/* {articles.map((articles,index)=>  */}
            <div className="flex flex-wrap justify-around gap-8 items-center font-sans">
                <div className="w-[340px] bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group relative flex flex-col h-[500px]">
                    
                    {/* Source Badge */}
                    <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-red-900/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                            {newschannel}
                        </span>
                    </div>

                    {/* Image Section */}
                    <div className="relative overflow-hidden h-[200px] shrink-0">
                        <img
                            src={imgurl ? imgurl : errorGif}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            alt={title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                            <span className="text-red-800">
                                {new Date(publish).toLocaleDateString("en-GB", { day: 'numeric', month: 'short' })}
                            </span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span className="truncate">{author || 'Staff Writer'}</span>
                        </div>

                        <h2 className="text-slate-800 text-lg font-bold mb-3 leading-tight group-hover:text-red-900 transition-colors duration-300 line-clamp-3">
                            {title}
                        </h2>

                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                            {content}
                        </p>

                        <div className="mt-auto">
                            <Link to={url}
                                className="inline-flex items-center text-[12px] font-black uppercase tracking-widest text-red-900 group/btn">
                                Read Full Story
                                <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-900 to-red-600 transition-all duration-500 group-hover:w-full"></div>
                </div>
            </div>


            {/* )} */}

        </div>
    )
}

export default NewsItems