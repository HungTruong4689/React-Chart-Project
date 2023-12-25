// NavBar.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
    return (
        <nav className='bg-gray-800 py-4'>
            <ul className='flex justify-center space-x-4'>
                <li>
                    <Link to='/view' className='text-white hover:text-gray-300'>
                        View Page
                    </Link>
                </li>
                <li>
                    <Link to='/setting' className='text-white hover:text-gray-300'>
                        Setting Page
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
