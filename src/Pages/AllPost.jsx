import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/database'

function AllPosts() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  return (
    <div className="w-full bg-white min-h-screen">

      <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/50 to-blue-500/30"></div>

        <Container>
          <div className="relative glass-card px-8 py-10 border border-white/30">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-sm">All Articles</h1>
            <p className="text-blue-100 text-lg">Explore our complete collection of stories and insights</p>
          </div>
        </Container>
      </div>

      <h2 className=" text-4xl md:text-5xl font-bold text-blue-500 mb-2 drop-shadow-sm ml-32 mt-10">Find What's New Around You ?</h2>

      <div className="py-10">
        <Container>
          <div className='flex flex-wrap'>
            {posts.map((post) => (
              <div key={post.$id} className='p-2 w-1/4'>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default AllPosts

