import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const pages = [
    {
      link: '/',
      title: 'Home'
    },
    {
      link: '/work',
      title: 'Work'
    },
    {
      link: '/research',
      title: 'Research'
    },
    {
      link: '/contact',
      title: 'Contact'
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
                  {page.title}
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