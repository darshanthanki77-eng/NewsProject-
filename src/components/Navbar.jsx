import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="sticky top-0 z-50">
            <nav className='flex items-center justify-between px-16 py-4 glass border-b border-red-50/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]'>
                <div className='text-3xl font-black tracking-tighter text-red-900'>
                    DT <span className="text-slate-800">NEWS</span>
                </div>
                
                <ul className='flex gap-8 items-center text-[13px] font-bold uppercase tracking-wider text-slate-500'>
                    {[
                        { to: "/", label: "Home" },
                        { to: "/health", label: "Health" },
                        { to: "/entertainment", label: "Entertainment" },
                        { to: "/general", label: "General" },
                        { to: "/business", label: "Business" },
                        { to: "/science", label: "Science" },
                        { to: "/sports", label: "Sports" },
                        { to: "/technologia", label: "Tech" }
                    ].map((link) => (
                        <li key={link.to} className='relative group'>
                            <NavLink 
                                to={link.to} 
                                className={({ isActive }) => 
                                    `transition-all duration-300 hover:text-red-900 px-1 py-2 ${isActive ? 'text-red-900' : ''}`
                                }
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-900 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar