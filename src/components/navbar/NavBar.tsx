import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NavBar: React.FC = () => {
    const location = useLocation()
    const [selectedView, setSelectedView] = useState<string>('')
    console.log('show view page', location.pathname)

    // Set the selected view based on the current pathname
    useEffect(() => {
        setSelectedView(location.pathname)
    }, [location.pathname])

    return (
        <nav className='bg-gradient-to-r from-purple-500 to-blue-500 py-4'>
            <ul className='flex justify-center space-x-4'>
                <li>
                    <NavLink
                        to='/view'
                        className={`text-white hover:text-gray-300 transition duration-300 ease-in-out focus:text-yellow-300 focus:outline-none ${
                            selectedView === '/view' || selectedView === '/'
                                ? ' text-yellow-300 font-semibold'
                                : ''
                        }`}
                    >
                        View Page
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/setting'
                        className={`text-white hover:text-gray-300 transition duration-300 ease-in-out focus:text-yellow-300 focus:outline-none ${
                            selectedView === '/setting' ? 'text-yellow-300 font-semibold' : ''
                        }`}
                    >
                        Setting Page
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
