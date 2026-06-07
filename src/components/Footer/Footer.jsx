import React from 'react'
import Logo from '../logo/Logo'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className="bg-white/80 backdrop-blur-md border-t border-gray-400 relative z-20">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6 inline-flex items-center">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Discover amazing stories and connect with creative minds. Your platform for sharing and inspiring.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 hover:scale-125 transition-all duration-300 transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 hover:scale-125 transition-all duration-300 transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.915 10.009 10.009 0 01-2.8.856 4.926 4.926 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.822 4.822 0 00-8.335 4.39A13.74 13.74 0 011.671 3.149a4.822 4.822 0 001.493 6.43 4.784 4.784 0 01-2.191-.616v.06a4.823 4.823 0 003.864 4.734 4.822 4.822 0 002.033.085 4.823 4.823 0 004.514 3.336 9.678 9.678 0 01-5.999 2.042A10 10 0 008.04 21.332a13.707 13.707 0 007.429 2.176c8.915 0 13.773-7.382 13.773-13.773 0-.209-.005-.418-.015-.623a9.758 9.758 0 002.401-2.499z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 hover:scale-125 transition-all duration-300 transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-gray-900">Company</h3>

            <ul className="space-y-3">
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1" to="/">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1" to="/">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-gray-900">Support</h3>

            <ul className="space-y-3">
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1" to="/">
                  Help Center
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1" to="/">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1" to="/">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-gray-900">Legal</h3>

            <ul className="space-y-3">
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1" to="/">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1" to="/">
                  Terms
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1" to="/">
                  Cookies
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1" to="/">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8 mt-8">
          <p className="text-sm text-gray-600 text-center">&copy; Copyright 2024. All Rights Reserved by BlogApp. Made with care for creators.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer

