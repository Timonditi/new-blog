import React, { useContext } from 'react';
import { PostContext } from '../Context/PostContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { posts } = useContext(PostContext);

  return (
    <div>
      <h1 className='font-bold text-2xl py-4' >NEWS</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {posts && posts.map((post) => (
            <Link to={`/Post/${post.id}`} className='bg-grey-100' key={post.id}>
              <img className="h-auto max-w-full rounded-lg" src={post.image} alt="" />
              <div className='p-3'>
                <h4 className='font-bold text-xl'>{post.title}</h4>
                <p className='text-orange-500 font-bold'> Posted by {post.user.username}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
