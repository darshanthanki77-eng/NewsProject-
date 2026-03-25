import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>

            <nav className='justify-center flex gap-10 bg-red-900 p-4 text-white '>
                <div className='text-4xl'>DT News</div>
                <ul className='flex gap-10  justify-center  items-center  ' >
                    <li className='hover:scale-110 transition duration-300 hover:font-bold'>
                        <NavLink to="/">Home</NavLink>
                    </li>


                    <li className='hover:scale-110 transition duration-300  hover:font-bold'>
                        <NavLink to="/health">Health</NavLink>
                    </li>

                    <li className='hover:scale-110 transition duration-300  hover:font-bold'>
                        <NavLink to="/entertainment">Entertainment</NavLink> </li>


                    <li className='hover:scale-110 transition duration-300  hover:font-bold'>
                        <NavLink to="/general">General</NavLink> </li>

                    <li className='hover:scale-110 transition duration-300  hover:font-bold'>
                        <NavLink to="/business">Business</NavLink> </li>

                    <li className='hover:scale-110 transition duration-300  hover:font-bold'>
                        <NavLink to="/science">Science</NavLink> </li>

                    <li className='hover:scale-110 transition duration-300  hover:font-bold'>
                        <NavLink to="/sports">Sports</NavLink></li>

                    <li className='hover:scale-110 transition duration-300  hover:font-bold'>
                        <NavLink to="/technologia">Technologia</NavLink></li>
                </ul>


            </nav>

        </div>
    )
}

export default Navbar