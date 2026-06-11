import React, { useEffect, useState } from 'react'
import service from '../appwrite/database'
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {

  const [posts, setPosts] = useState([])
  const authStatus = useSelector((state) => state.auth.status)

  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="w-full bg-gradient-to-b from-blue-50/40 via-white to-white min-h-screen">

      <div className="relative w-full h-90 md:h-120 bg-gradient-to-r from-indigo-600 to-cyan-600 overflow-hidden group pt-8">
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


      {/*display card*/}
      <div className='w-full py-8'>
        <Container>
          <div className='flex flex-wrap'>
            {posts.map((post) => 
              <div key={post.$id} className='p-2 w-1/4'>
                <PostCard {...post} />
              </div>
            )}
          </div>
        </Container>
      </div>



    </div>
  )
}

export default Home

