import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

export default function Login() {

  const {login} = useContext(AuthContext)
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email+ " " +password);

      login(email, password)
  }
  return (
    <div className='bg-white ml-80 rounded-2xl shadow-2xl flex flex-r w-2/3 max-w-4xl min-h-[75vh]'>
      {/* signin section */}
      <div className='w-4/5 p-5 '>
        <div className='py-10'>
          <h1 className='font-bold text-3xl text-orange-500 mb-2'>Login</h1>
        </div>  
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">    
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"  placeholder="name@gmail.com.com" required />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required   autoComplete="current-password" />
            </div>
            <button type="submit" className="border-4 border-orange-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-orange-500 hover:text-white">
              Login</button>            
        </form>
      </div>
      {/* signup section */}
      <div className='w-3/5 bg-orange-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
        <h2 className='text-3xl font-bold mb-2'> Hello, Friend!</h2>
        <div className='border-2 w-10 border-white inline-block mb-8'></div>
        <p className='mb-8'>Fill up personal information and start journey with Us</p>
        <Link className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-orange-500' to="/register">
          Signup
        </Link>
      </div>
      </div>
  )
}
