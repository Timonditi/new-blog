import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { PostContext } from '../Context/PostContext';
import Swal from 'sweetalert2';

export default function Singlepost() {
  const {deletePost} = useContext(PostContext)
  const {current_user} = useContext(AuthContext)
  const {Addcomment} = useContext(PostContext)
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");  
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/post/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setPost(response);
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  const handleDelete = ()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deletePost(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log();

      Addcomment(username, comment)
  }

  return (
    <div>
      {
        current_user && current_user?
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img className="mr-4 w-16 h-16 rounded-full" src={post && post.user && post.user.profile_image} alt=""/>
                <div>
                  <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">
                    {post && post.user && post.user.username}
                  </a>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    {post && post.created_at}
                  </p>
                </div>                    
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {post && post.title}
              </h1>
            </header>
            <figure>
              <img src={post && post.image} alt="" />
            </figure>
            <div className='flex justify-end mt-8' >
              {(post && post.user && post.user.username) === (current_user && current_user.username) &&
              <p onClick={handleDelete} className='text-red-600 hover:cursor-pointer hover:text-red-900' >
                Delete </p>
              }
            </div>
            <p className="mt-8">{post && post.content}</p>
          </article>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="ml-80 my-16 w-2/4 mb-4  rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">
                {current_user && current_user.username}
              </a>
              <label htmlFor="comment" className="sr-only">Your comment</label>
              <textarea
                value={comment} onChange={(e) => setComment(e.target.value)} rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required ></textarea>
            </div>
            <div className="bg-white flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button type="submit" className="border-2 border-orange-500 rounded-full px-10 py-2 inline-block font-semibold hover:bg-orange-500 hover:text-white">
                Post comment
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>:
            <p className='text-red-900 text-centre font-bold' >Not Authorized to view this page</p>
          }
        </div>
  );
}