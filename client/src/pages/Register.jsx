import axios from 'axios'
import React , {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false)
    
    try{
      const res = await axios.post("http://localhost:5000/api/auth/register", {
      username, 
      email, 
      password
    });
    res.data && window.location.replace("/login")
    console.log("registration", res)
    }catch(err){
      setError(true)
      console.log(err)
    }
  }

  return (
    <div className="Register h-[calc(100vh-64px)]  flex flex-col justify-center  bg-cover items-center">
        <span className="loginTitle text-5xl font-semibold">Register</span>
        <form className="registerform mt-5 flex flex-col md:max-w-2xl text-black " onSubmit={handleSubmit}> 
            <label>Username</label>
            <input type="text" className="" placeholder="Enter your username..." onChange={e=>setUsername(e.target.value)}/>
            <label>Email</label>
            <input type="email" className="" placeholder="Enter your email..." onChange={e=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" className="" placeholder="Enter your password..." onChange={e=>setPassword(e.target.value)}/>
            <button  type="submit" className="loginButton mt-5 bg-green-500 hover:bg-green-800 border-none text-white rounded-xl p-2">Register</button>
        </form>
        <button  className="loginRegister position absolute top-[90px] right-[30px] bg-red-400 hover:bg-red-800 px-4 py-2 rounded-lg text-white">
              <Link to="/login">
                Login
              </Link>
        </button>
        { error && <span className='text-red-800 font-bold text-3xl mt-5'>Something Went Wrong</span>}
    </div>
  )
}
