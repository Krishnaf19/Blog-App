import React from 'react'
import PostForm from '../components/PostForm/PostForm'
import  Container  from '../components/Container/Container'

function AddPost() {
  return (
    <div className='py-16 bg-white min-h-screen'>
        <Container>
            <div className='mb-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900'>Create New Article</h1>
                <p className='text-gray-600 mt-3 text-lg'>Share your thoughts and stories with our community</p>
            </div>
            <div className='glass-card p-10 border border-white/25'>
                <PostForm />
            </div>
        </Container>
    </div>
  )
}

export default AddPost