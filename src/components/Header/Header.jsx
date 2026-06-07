import React from 'react'
import Logo from '../logo/Logo'
import LogoutBtn from './LogoutBtn'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()


  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ]

  return (
    <>
      <header className='py-5 shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200/30 bg-white/80 backdrop-blur-md'>

        <nav className='flex items-center justify-between max-w-full mx-auto px-22'>


          <div className='mr-12 flex-shrink-0 transform hover:scale-110 transition-transform duration-300'>
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <ul className='flex gap-12 ml-auto flex-wrap items-center justify-end'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className='flex-shrink-0'>
                  {item.name === 'Login' || item.name === 'Signup' ? (
                    <button
                      className='px-5 py-2 text-white font-medium bg-blue-600/30 hover:bg-blue-500/40 rounded-lg transition-all duration-300 text-sm ring-1 ring-blue-400/50 hover:ring-blue-300/70 hover:scale-105 transform'
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <button
                      className='text-gray-800 font-medium hover:text-blue-600 transition-all duration-300 text-md underline-offset-4'
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              ) : null
            )}

            {authStatus ?
              <li className='flex-shrink-0'>
                <LogoutBtn />
              </li>
              : null}

          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
