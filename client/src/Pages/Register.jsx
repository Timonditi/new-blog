import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import  { AuthContext } from '../Context/AuthContext'

export default function Register() {

  const {register} = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [profile_image, setProfile_image] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(username+ " " +email+ " " +profile_image+ " " +password);

    register(username, email, profile_image, password)
  }
  return (
    <div className='bg-white ml-80 rounded-2xl shadow-2xl flex flex-r w-2/3 max-w-4xl min-h-[75vh]'>
      {/* sibnup section */}
      <div className='w-4/5 p-5 '>
      <div className='py-10'>
          <h1 className='font-bold text-3xl text-orange-500 mb-2'>Sign Up</h1>
        </div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
        <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" required/>
        </div>
        <div className="mb-5">
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile image</label>
          <input type='text' value={profile_image} onChange={(e)=> setProfile_image(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" required/>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" required/>
        </div>
        <button type="submit"  className="border-4 border-orange-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-orange-500 hover:text-white">
          Register</button>
      </form>
      </div>
      {/* signin section */}
      <div className='w-3/5 bg-orange-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
      <div className='text-xl font-serif font-semibold mb-8'>
        <p> Already have an account?</p>
      </div>
      <Link className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-orange-500' to="/Login">
            Sign in
          </Link>
      </div>
    </div>
  )
}
