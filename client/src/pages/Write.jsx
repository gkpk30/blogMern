import React , {useState, useContext} from 'react'
import { AiOutlineFileAdd} from 'react-icons/ai';
import axios from 'axios'
import {Context} from '../context/Context'


import yellowHair from '../assets/images/model-pink-hair-yellow-background-min.jpeg'


export default function Write() {
const [title, setTitle] = useState("")
const [categories, setCategories] = useState("")
const [desc, setDesc] = useState("")
const [excerpt, setExcerpt] = useState("")
const [file, setFile] = useState(null)
const {user} = useContext(Context)


const handleSubmit = async (e)=> {
    e.preventDefault();
    const newPost = {
        username: user.username,
        title,
        desc,
        excerpt

    }

    if(file){
        const data = new FormData();
        //prevent user from uploading file with same name by using Date.now()
        const filename = Date.now() + file.name;
        data.append("name", filename)
        data.append("file", file)
        newPost.photo = filename;

        try {
            await axios.post("http://localhost:5000/api/upload", data)
        } catch (error) {
            console.log("error with photo upload" , error)
        }
    }
        try {
         const res =  await axios.post("http://localhost:5000/api/posts", newPost);
         window.location.replace("/post/" + res.data._id)
        } catch (error) {
            console.log("error with post upload" , error)
        }
    

}

  return (
    <div className="write pt-14 max-w-5xl mx-auto px-2 ">
        {file && 
            <img src={URL.createObjectURL(file)} 
            alt="" 
            className=" w-full lg:w-full h-[500px] rounded-xl object-cover object-top "
            />
        }
        
            <form className="writeform relative lg:max-w-6xl " onSubmit={handleSubmit}>
                    <div className="writeFormGroup  flex items-center my-8">
                        <label htmlFor="fileInput">
                        
                            <i className=" writeIcon text-3xl text-green-400 rounded-full border h-10 w-10 flex items-center justify-center border-textPrimary mr-3 "> <AiOutlineFileAdd/></i>
                            
                        </label>
                        <input onChange={e=> setFile(e.target.files[0])} type="file" id="fileInput" style={{display: 'none'}} />
                        <input 
                            type="text" 
                            placeholder='Title' 
                            autoFocus={true} 
                            className=" text-3xl border-none p-5 w-3/4 focus:outline-none writeInput" 
                            onChange={ e => setTitle(e.target.value)}
                            />
                        
                </div>
                <textarea 
                    type="text" 
                    placeholder='Brief Excerpt'  
                    className=" text-3xl border-none p-5 w-3/4 my-5 focus:outline-none writeInput"
                    onChange={ e => setExcerpt(e.target.value)} 
                    />
                <div className="writeformgroup  flex items-center "> 
                    <textarea 
                        onChange={ e => setDesc(e.target.value)}
                        placeholder="Tell your story" 
                        className=" writeInput writeText text-3xl border-none  p-5 w-full h-screen focus:outline-none "   
                        type="text" />
                    
                </div>
                <button type="submit" 
                    className=" writeSubmit absolute top-2 right-12 bg-green-600 hover:bg-green-800 text-slate-100 p-5 rounded-xl flex items-center "
                    >
                        Publish
                </button>
            </form>
    </div>
  )
}
