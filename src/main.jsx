import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import { PostForm, Protected } from './components/index.js'
import { createBrowserRouter } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import AllPost from './Pages/AllPost.jsx'
import AddPost from './Pages/AddPost.jsx'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'


const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },

      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
      },

      {
        path: "/all-posts",
        element: (
          <Protected authentication>
            {" "}
            <AllPost />
          </Protected>
        ),
      },

      {
        path: "/add-post",
        element: (
          <Protected authentication>
            {" "}
            <AddPost />
          </Protected>
        ),
      },

      {
        path: "/edit-post/:slug",
        element: (
          <Protected authentication>
            {" "}
            <EditPost />
          </Protected>
        ),
      },

      {
        path: "/post/:slug",
        element: <Post />,
      },

    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>

  </StrictMode>,
)
