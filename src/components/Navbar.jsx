import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faComments, faFlask, faHouse } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar() {
  const pages = [
    {
      link: '/',
      title: 'Home',
      icon: faHouse
    },
    {
      link: '/work',
      title: 'Work',
      icon: faBriefcase
    },
    {
      link: '/research',
      title: 'Research',
      icon: faFlask
    },
    {
      link: '/contact',
      title: 'Contact',
      icon: faComments
    },
  ]
  const location = useLocation()
  const [url, setUrl] = useState(null)
  useEffect(() => {
    setUrl(location.pathname)
  }, [location])

  return (
    <div>
      <nav>
        <ul>
          {
            pages.map((page) => (
              <li key={page.link}>
                <Link
                  to={page.link}
                  className={url === page.link ? 'Selected' : 'Default'}>
                  <span className='display-title'>
                    {page.title}
                  </span>
                  <FontAwesomeIcon
                    className='display-icon'
                    icon={page.icon}
                    size='lg'/>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar