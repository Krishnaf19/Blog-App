import React from 'react'
import bucket from '../../appwrite/file'
import { Link } from 'react-router-dom'

export default function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-xl overflow-hidden border border-white/5 bg-white/2 shadow-2xs hover:shadow-md transition-all duration-300 group glass-card">
        <div className="w-full overflow-hidden bg-gray-100 h-56 relative">
          <img
            src={bucket.getFilePreview(featuredImage)}
            alt={title}
            className="w-100px h-200px object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/12 to-transparent pointer-events-none" />
        </div>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2 leading-snug mb-3">
            {title}
          </h2>
          <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Read article →</p>
        </div>
      </div>
    </Link>
  )
}

