import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/database'

function AllPosts() {
  const [posts, setPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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

      <div className="py-16">
        <Container>
         
          <div className="mb-12">
            <div className="max-w-md glass-card p-2 border-2 border-black">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-2 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none shadow-sm border-blue/20 glass-input"
              />
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.$id} className="transform transition-all duration-300 hover:translate-y-(-2)">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Articles Found</h3>
              <p className="text-gray-600">Try searching with different keywords</p>
            </div>
          )}
        </Container>
      </div>
    </div>
  )
}

export default AllPosts

