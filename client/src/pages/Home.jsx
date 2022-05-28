import React, {useState, useEffect} from 'react' 
import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import axios from 'axios';
import { useLocation } from "react-router";




export default function Home() {
  const [posts, setPost] = useState([]);
  const {search} = useLocation();

  console.log("location: " , location)

  useEffect(()=>{
    const fetchPosts = async ()=> {
      
        console.log("In Axios")
        // const res = await axios.get("/api/posts/")
        const res = await axios.get("http://localhost:5000/api/posts" + search)
        setPost(res.data)
        console.log("res.data: ", res.data);
        
    }

    fetchPosts()
  }, [search])

  return (
    
    <div>
        <Header/>
        <div className="py-6">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-[120rem] lg:px-8 lg:grid lg:grid-cols-12 lg:gap-5">
              
              <Posts posts={posts}/>
              <Sidebar/>
          
        </div>
      </div>
    </div>
  )
}
