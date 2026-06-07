import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../features/authSlice'
import authservice from '../../appwrite/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form"
import Button from '../Button/Button'
import Input from '../Input/Input'
import Logo from '../logo/Logo'
import React, { useState, useEffect } from 'react'

function SignupForm() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const [error, seterror] = useState()
  const dispatch = useDispatch()
  const authStatus = useSelector((state) => state.auth.status)

  useEffect(() => {
    if (authStatus) {
      navigate("/")
    }
  }, [authStatus, navigate])

  const signupHandleSubmit = async (data) => {
    seterror("")
    try {
      const session = await authservice.createAccount(data)
      if (session) {
        const userData = await authservice.getCurrentUser()
        if (userData) dispatch(login({ userData }))
        navigate("/")
      }
    } catch (error) {
      seterror(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-12">
      <div className={`mx-auto w-full max-w-lg bg-white rounded-lg p-10 shadow-sm border border-gray-200`}>
        <div className="mb-8 flex justify-center transform hover:scale-110 transition-transform duration-300">
          <span className="inline-block w-full max-w-[80px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-3xl font-bold leading-tight text-gray-900">Create Account</h2>

        <p className="mt-3 text-center text-sm text-gray-600">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-semibold text-blue-600 transition-all duration-200 hover:text-blue-700"
          >
            Sign In
          </Link>
        </p>

        {error && <p className="text-red-600 mt-6 text-center font-medium text-sm">{error}</p>}

        <form onSubmit={handleSubmit(signupHandleSubmit)} className="mb-5">
          <div className="space-y-5 mt-8">
            <Input
              label="Full Name"
              text="full name"
              placeholder="Enter your name"
              autoComplete="name"
              {...register("name", {
                required: true,
              })}
            />

            <Input
              label="Email"
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)/.test(value) ||
                    "Email must be valid",
                },
              })}
            />

            <Input
              label="Password"
              placeholder="Enter a strong password"
              type="password"
              autoComplete="new-password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit" className="w-full cursor-pointer">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupForm

