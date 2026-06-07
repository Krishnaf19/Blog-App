import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import service from '../appwrite/database';
import { useNavigate,  useParams } from 'react-router-dom';

export default function EditPost() {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((data) => {
                if (data) {
                    setPost(data)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-16 bg-white min-h-screen'>
            <Container>
                <div className='mb-12'>
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-900'>Edit Article</h1>
                    <p className='text-gray-600 mt-3 text-lg'>Update your article content</p>
                </div>
                <div className='glass-card p-10 border border-white/25'>
                    <PostForm post={post} />
                </div>
            </Container>
        </div>
    ) : null
}
