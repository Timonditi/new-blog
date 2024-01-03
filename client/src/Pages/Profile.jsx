import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Profile() {
  const { current_user, logout } = useContext(AuthContext)
  return (
    <div className="font-serif pl-8 ml-80  max-w-xl min-h-[65vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=' pt-16 ml-40'>
        <img className="w-40 h-40 " src={current_user ? current_user.profile_image : ""} lt="user photo"/>
      </div>
        <div className="p-8 ml-40 text-xl">
          <h3 className='pb-4'>{current_user && current_user.username}</h3>
          <h3>{current_user && current_user.email}</h3>
        </div>  
            <button className='ml-40 border-2 border-orange-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-orange-500 hover:text-white' onClick={() => logout()}>
              Logout</button>
    </div>
  )
}




