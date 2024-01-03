import { useEffect, useState } from "react";
import {createContext } from "react";
import { useNavigate } from "react-router-dom";
import  Swal from "sweetalert2"
export const PostContext = createContext()

export default function PostProvider({children}) {
    const nav = useNavigate()
    const [posts, setPosts] = useState([])
    const [onChange, setonChange] = useState(true)


    const deletePost = (id) =>{
        fetch(`/post/${id}`, {
         method: "DELETE",
                })
        .then((res)=>res.json())
        .then((response)=>{
            if(response.success)
            { 
                nav("/")
                Swal.fire(
                    'success',
                    response.success,
                    'success'
                  )
                  setonChange(!onChange)
            }
            else{
                Swal.fire(
                    'Error',
                    "Something went wrong",
                    'error'
                  )
            }
        })
     }

    useEffect(()=>{
        fetch("/post")
        .then((res)=>res.json())
        .then((response)=>{
            setPosts(response)
            console.log("post", response);
        })
    }, [onChange])

    const Addpost = (title, image, content) => {
        fetch("/post", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, image, content }),
        })
          .then((res) => res.json())
          .then((response) => {
            console.log('added', response);
      
            if (response.success) {
                nav("/")
              Swal.fire(
                'Success',
                response.success,
                'success'
              );
              setonChange(!onChange);
            } else {
              Swal.fire(
                'Error',
                'Something went wrong',
                'error'
              );
            }
          })
      };

        // Adding Comment
      const Addcomment = (username, comment) => {
        fetch("/comment/${id}", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({username, comment}),
        })
          .then((res) => res.json())
          .then((response) => {
            console.log('added', response);
          })
      };
      


    const contextData ={
        posts,
        deletePost,
        Addpost,
        Addcomment
    }
  return (
    <PostContext.Provider value={contextData}>
        {children}
    </PostContext.Provider>
  )
}
