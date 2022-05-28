import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios';
import { AiTwotoneEdit, AiTwotoneDelete} from 'react-icons/ai';
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Context} from '../context/Context'



export default function SinglePost() {

  const location = useLocation()
  console.log(location)
  const path = location.pathname.split("/")[2];
  console.log("path: ", path)
  const PF = "http://localhost:5000/images/";
  const {user} = useContext(Context)

  //update a post
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [updateMode, setUpdateMode] = useState(false)



  const [post, setPost] = useState({})

  useEffect(() => {
    const getSinglePost = async ()=> {
      
      const res = await axios.get("http://localhost:5000/api/posts/" + path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
      setExcerpt(res.data.excerpt)
      console.log("res.data: ", res.data);
    }
    getSinglePost()
    console.log("post Info: ", post)
  }, [path])



  const handleDelete = async ()=>{
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`,{
        data: {username: user.username}
      })
      window.location.replace("/")
    } catch (error) {
      console.log(error)
    }
    
  }

  const handleUpdate = async ()=> {
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}`,{
          username: user.username,
          title,
          desc,
          excerpt
      })
      // window.location.reload()
      setUpdateMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  
  

  return (
    <div className="lg:col-span-9 xl:col-span-10 font-primary ">
      <div className="singlePostWrapper p-5 pr-0 ">
        {/* check if post.photo exists otherwise stock image */}
        {post.photo ?  
           <img src={PF + post.photo} 
           alt={post.photo.alt} 
           className="singlePostImage w-full lg:h-[35rem] sm:h-80 object-cover rounded-lg lg:object-top sm:object-center" />
          :
          <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt="" className="singlePostImage w-full h-80 object-cover rounded-md" />
        // <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" className="singlePostImage w-full h-80 object-cover rounded-md" />
        }
        {/* https://unsplash.com/photos/oM5YoMhTf8E */}
        {/* https://source.unsplash.com/oM5YoMhTf8E/{WIDTHxHEIGHT} */}

        {updateMode ?
          <div className='mt-5'>
            <label htmlFor='titleInput' className='text-2xl font-bold' >Title</label>
            <input 
              type='text' 
              className="text-3xl text-center p-5 w-full focus:outline-none my-2 writeInput border-dotted border-4 border-textGold" 
              value={title} 
              autoFocus={true} 
              id="titleInput"
              onChange={(e)=>setTitle(e.target.value)}
              /> 
          </div>
          : 
        <h1 className=" md:w-[90%] text-left font-third text-3xl mr-3 mt-5 mb-3">
          {title} 

          {post.username === user?.username &&
          <div className="float-right flex flex-row gap-3  my-2">
            <button onClick={()=>setUpdateMode(true)}><i className="text-xl text-green-400 "><AiTwotoneEdit/></i></button>
                <i className="text-xl text-red-400" onClick={handleDelete} ><AiTwotoneDelete/></i>
          </div>
          }
        </h1>
        
        }
        {/* {post.category &&  */}
        <div >
          <h3 className='text-textGold font-secondary text-lg uppercase font-bold'>category</h3>
        </div>
        {/* } */}
        
        {updateMode &&
        //Post Excerpt update area
          <div className='mt-5'>
            <label htmlFor='titleInput' className='text-2xl font-bold text' >Brief Excerpt</label>
            <textarea 
              type='text' 
              className="text-3xl text-left p-5 w-full focus:outline-none my-2 writeInput border-dotted border-4 border-textGold" 
              value={excerpt} 
              id="excerptInput"
              onChange={(e)=>setExcerpt(e.target.value)}
              /> 
          </div> 
        }
        
        <div className=" my-12 flex justify-between text-lg font-fourth mr-20 text-textGold ">
          <span className="singlePostAuthor">Author: <Link className='hover:font-black' to={`/?user=${post.username}`}><b>{post.username}</b></Link> </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? 
          <div className='mt-5'>
            <label htmlFor='descInput' className='text-2xl font-bold'>Main Body</label>
            <textarea 
              type='text' 
              value={desc} 
              className="text-xl h-screen  text-left p-5 w-full focus:outline-none my-2 border-dotted border-4 border-textGold" 
              id="descInput"
              onChange={(e)=>setDesc(e.target.value)}
              />
          </div>
             :
            <p className="text-[#666] text-lg first-line:uppercase first-line:tracking-widest
                        first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                        first-letter:mr-3 first-letter:float-left "
            >
              {desc}
            </p>
        }
          {updateMode &&
          <div className='flex flex-col mt-5'>
            <button 
              className='bg-green-600 hover:bg-green-800 w-32 rounded-2xl p-2 text-white text-xl self-end'
              onClick={handleUpdate}
              >
                Publish
            </button>
          </div>
          }
      </div>

    </div>
  )
}
