import React , {useRef, useContext} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { Context } from "../context/Context"

// bg-[url('https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')] 
export default function Login() {

  const userRef = useRef()
  const passwordRef = useRef()
  const {user, dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e)=> {
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value
        })
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
      } catch (error) {
        dispatch({type: "LOGIN_FAILURE"});
    }
  }

  

  return (
    <div className="Login h-[calc(100vh-64px)]  flex flex-col justify-center  bg-cover items-center ">
        <span className="loginTitle text-5xl font-semibold">Login</span>
        <form className="loginform mt-5 flex flex-col md:max-w-2xl font-medium" onSubmit={handleSubmit}> 
            <label>User Name</label>
            <input 
              type="text" 
              className="" 
              placeholder="Enter your user name..."
              ref={userRef}
              />
            <label>Password</label>
            <input 
              type="password" 
              className="" 
              placeholder="Enter your password..."
              ref={passwordRef}
              />
            <button
             className="loginButton mt-5 bg-blue-500  hover:bg-blue-800 border-none text-white rounded-xl p-2 disabled:cursor-progress disabled:bg-red-200 " 
             disabled={isFetching}
             >
               Login
             </button>
        </form>
        <button className="loginRegister position absolute top-[90px] right-[30px] bg-green-500 hover:bg-green-800 p-2 rounded-lg text-white">
          <Link to="/register">
            Register
          </Link>
          </button>
    </div>
  )
}
