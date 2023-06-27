import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import resume from '../../assets/Nusrat Resume.pdf'


const navLinks = [
    {
        id: "home",
        title: "Home",
        path: '/'
    },
    {
        id: "services",
        title: "Services",
        path: '/services'
    },
    {
        id: "projects",
        title: "Projects",
        path: '/projects'
    },
    {
        id: "contact",
        title: "Contact",
        path: '/contact'
    },
]

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // const { user, userLogout } = useContext(AuthContext)

    // const handleLogout = () => {
    //     userLogout()
    //         .then(toast.warning('User logged out!', { autoClose: '500' }))
    //         .catch(error => console.log(error))
    // }

    return (
        <div className="mx-auto text-white text-2xl container">
            <div className="flex items-center justify-between">
                <Link
                    to="/"
                    className="inline-flex font-bold text-3xl italic items-center"
                >
                    Nusrat Jahan
                </Link>
                <ul className="lg:items-center hidden space-x-8 lg:flex">
                    {
                        navLinks.map(navItem => (
                            <li key={navItem.id}>
                                <Link
                                    to={navItem.path}
                                    aria-label={navItem.title}
                                    title={navItem.title}
                                    className="font-semibold text-theme-body transition-colors duration-200 hover:text-orange-400 text-lg leading-21"
                                >
                                    {navItem.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <ul className="items-center hidden space-x-8 lg:flex">
                        <a download="Nusrat Resume" href={resume} target="_blank" rel="noopener noreferrer" className="btn bg-orange-400 text-white mr-8 hover:bg-white hover:text-black">Get Resume</a>
                    </ul>
                </div>
                <div className="lg:hidden flex items-center space-x-2">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-theme-body" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-3 left-0 w-full z-50">
                            <div className="p-5 bg-[#0e1527] border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            className="inline-flex  font-bold text-2xl"
                                        >
                                            Nusrat Jahan
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-white" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4 text-left">

                                        {
                                            navLinks.map(navItem => (
                                                <li key={navItem.id}>
                                                    <Link
                                                        to={navItem.path}
                                                        aria-label={navItem.title}
                                                        title={navItem.title}
                                                        className="font-semibold hover:text-orange-400 text-lg leading-21"
                                                    >
                                                        {navItem.title}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                        <a download="Nusrat Resume" href={resume} target="_blank" rel="noopener noreferrer" className="w-full btn bg-orange-400 text-white mr-8 hover:bg-white hover:text-black">Resume</a>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header