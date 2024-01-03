import { useEffect, useState } from "react";
import {createContext } from "react";
import { useNavigate } from "react-router-dom";
import  Swal from "sweetalert2"


export const AuthContext = createContext()

export default function AuthProvider({children}) {

    const nav = useNavigate()
    const [current_user, setCurrentUser] = useState([])
    const [onChange, setonChange] = useState(true)
    //LOGIN
    const login = (email, password) =>{
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email, password})
        })
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response)
            if(response.error)
            {
                Swal.fire(
                    'error',
                    response.error,
                    'error'
                  )
            }
            else if(response.success)
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

    //REGISTER
    const register = (username, email, profile_image, password) =>{
        fetch("/user", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({username, email, profile_image, password})
        })
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response)
            if(response.error)
            {
                Swal.fire(
                    'Error',
                    response.error,
                    'error'
                  )
            }
            else if(response.success)
            { 
                nav("/login")
                Swal.fire(
                    'Success',
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
    
    //logout
    const logout = () =>{
        fetch("/logout", {
         method: "DELETE",
                })
        .then((res)=>res.json())
        .then((response)=>{
         setCurrentUser(null)
         setonChange(!onChange)
         console.log(response)
         if(response.error)
         {
            nav("/")
         }
        })
     }

    useEffect(()=>{
        fetch("/current_user")
            .then((res)=>res.json())
            .then((response)=>{
                setCurrentUser(response)
            })
        }, [onChange])

    const contextData = {
        login,
        register,
        logout,
        current_user
    }
  return (
    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
  )
}
