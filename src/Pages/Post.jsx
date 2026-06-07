import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/database";
import bucket from "../appwrite/file";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor =
        post && userData
            ? post.userId === userData.$id
            : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                bucket.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="min-h-screen py-12">
            <Container>


                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl p-4 mb-8">

                    <img
                        src={bucket.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="w-full h-[600px] rounded-2xl object-cover]"
                    />

                    {isAuthor && (
                        <div className="absolute top-6 right-6 flex gap-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <button
                                    className="px-5 py-2 rounded-xl bg-emerald-500/60 backdrop-blur-md text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg
                                "
                                >
                                    Edit
                                </button>
                            </Link>

                            <button
                                onClick={deletePost}
                                className="px-5 py-2 rounded-xl bg-red-500/60 backdrop-blur-md text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg
                            "
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>

                <div >
                    <h1 className="text-4xl md:text-5xl font-bold text-black">
                        {post.title}
                    </h1>

                    <div className="mt-4 h-[1px] w-full bg-white/20"></div>
                </div>

                <div className="">
                    {parse(post.content)}
                </div>

            </Container>
        </div>
    ) : null;
}