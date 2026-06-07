import React, { useEffect, useState } from 'react'
import service from '../appwrite/database'
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
  const [posts, setPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const authStatus = useSelector((state) => state.auth.status)

  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="w-full bg-gradient-to-b from-blue-50/40 via-white to-white min-h-screen">

      <div className="relative w-full h-90 md:h-120 bg-gradient-to-r from-indigo-600 to-cyan-600 overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500"><rect fill="%23dbeafe" width="1200" height="500"/></svg>)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/60 to-blue-500/40"></div>

        <Container>
          <div className="relative z-10 h-full flex flex-col justify-center pt-5">
            <div className="glass-card px-6 py-8 border border-white/30">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-sm">
                Discover Amazing
                <span className="block">Stories &amp; Ideas</span>
              </h1>

              <p className="text-lg text-blue-100 mb-8 max-w-2xl">
                Explore our collection of inspiring articles and creative content
              </p>

          
              <div className="flex gap-3 mb-6">
                <div className="flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 rounded-lg text-white placeholder-white focus:outline-none shadow-lg glass-input"
                  />
                </div>
                <button className="px-8 py-3 bg-white/12 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300 shadow-lg glass-btn">
                  Search
                </button>
              </div>

         
              <div className="flex gap-4 pt-4 flex-wrap">
                {authStatus ? (
                  <Link
                    to="/add-post"
                    className="px-7 py-3 bg-white/12 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300 inline-block border border-white/25 backdrop-blur"
                  >
                    Create Post
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="px-7 py-3 bg-white/12 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300 inline-block border border-white/25 backdrop-blur"
                  >
                    Get Started
                  </Link>
                )}

                <Link
                  to="/all-posts"
                  className="px-7 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 inline-block backdrop-blur"
                >
                  Explore All
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

   
      {filteredPosts.length > 0 && (
        <div className="py-20 bg-white">
          <Container>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Your Journey Begins Here
              </h2>
              <p className="text-lg text-gray-600">Handpicked stories and insights for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.$id}
                  className="transform transition-all duration-300 hover:translate-y-(-2)"
                >
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}

      
      {filteredPosts.length === 0 && posts.length === 0 && (
        <div className="py-32 bg-white">
          <Container>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">No Articles Yet</h3>
              <p className="text-lg text-gray-600 mb-10">Be the first to share your story!</p>
              {authStatus && (
                <Link
                  to="/add-post"
                  className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Create First Article
                </Link>
              )}
            </div>
          </Container>
        </div>
      )}

    
      {searchTerm && filteredPosts.length === 0 && posts.length > 0 && (
        <div className="py-32 bg-white">
          <Container>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">No Results Found</h3>
              <p className="text-lg text-gray-600">Try searching with different keywords</p>
            </div>
          </Container>
        </div>
      )}
    </div>
  )
}

export default Home

