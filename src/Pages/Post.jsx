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


  const isAuthor = !!(post && userData && post.userId === userData.$id);

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((postDoc) => {
        if (postDoc) setPost(postDoc);
        else navigate("/");
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
    <div className="py-16 bg-white min-h-screen">
      <Container>
        <div className="w-full mb-8 relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 glass-card">

          <img
            src={bucket.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="w-full object-cover max-h-96"
          />

          {isAuthor && (
          <div className="absolute right-6 top-6 flex gap-3">

              <Link to={`/edit-post/${post.$id}`}>
                <Button
bgColor="bg-blue-600 hover:bg-blue-700"
                  className="shadow-md text-white"
                >
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-red-600 hover:bg-red-700"
                onClick={deletePost}
                className="shadow-md text-white"
              >
                Delete
              </Button>
            </div>
          )}
        </div>

        <div className="w-full mb-8 glass-card px-6 py-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Published: {new Date(post.$createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="w-full prose prose-lg max-w-none text-gray-700 [&>*]:mb-4 [&>p]:leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-semibold [&>ul]:list-disc [&>ul]:ml-6 [&>ol]:list-decimal [&>ol]:ml-6 [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&_img]:mx-auto [&_img]:my-6 [&_img]:rounded-lg [&_img]:max-w-full [&_img]:h-auto">
          {(() => {
            // Make sure images embedded inside the RTE content render nicely on this page.
            // Also: if any image src is an Appwrite fileId, try resolving it to a preview URL.
            const resolveImgSrc = (src) => {
              if (!src || typeof src !== "string") return src;

              // If src is directly a fileId (common case)
              if (src.length >= 10 && !src.includes("/") && !src.startsWith("data:") && !src.startsWith("http")) {
                try {
                  return bucket.getFilePreview(src);
                } catch {
                  return src;
                }
              }

              // If src contains a fileId somewhere (best-effort)
              // (e.g., .../files/<fileId>/...)
              const match = src.match(/[-a-zA-Z0-9]{16,}/);
              if (match?.[0]) {
                try {
                  // Only replace when it doesn't look like a normal URL
                  if (!src.startsWith("http") && !src.startsWith("data:")) {
                    return bucket.getFilePreview(match[0]);
                  }
                } catch {
                  // ignore
                }
              }

              return src;
            };

            // html-react-parser returns React nodes; we can post-process images by inspecting props.
            const nodes = parse(post.content);

            const transformNode = (node) => {
              if (!node) return node;

              if (Array.isArray(node)) return node.map(transformNode);

              // React element
              if (typeof node === "object" && node.type === "img") {
                return React.cloneElement(node, {
                  src: resolveImgSrc(node.props?.src),
                  className: node.props?.className ? node.props.className + "" : "",
                });
              }

              // For element children, try recursion
              if (typeof node === "object" && node.props?.children) {
                return React.cloneElement(node, {
                  ...node.props,
                  children: transformNode(node.props.children),
                });
              }

              return node;
            };

            return transformNode(nodes);
          })()}
        </div>
      </Container>
    </div>
  ) : null;
}

