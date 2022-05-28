import Sidebar from "../components/Sidebar";
import {FaUserCircle} from 'react-icons/fa'
import manSuit from "../assets/images/man-suit-gray-min.jpeg"
import {useContext, useState} from 'react';
import {Context} from '../context/Context'
import axios from 'axios'


export default function Settings() {

    
    const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)

    const {user, dispatch} = useContext(Context)
    const PF = "http://localhost:5000/images/"

    

    const handleSubmit = async (e)=> {
        e.preventDefault();
        dispatch({type: "UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
    
        }
    
        if(file){
            const data = new FormData();
            //prevent user from uploading file with same name by using Date.now()
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePicture = filename;
            console.log(updatedUser.profilePicture);
    
            try {
                await axios.post("http://localhost:5000/api/upload", data)
                
            } catch (error) {
                console.log("error with photo upload" , error)
            }
        }
            try {
                const res = await axios.put("http://localhost:5000/api/users/" + user._id, updatedUser);
                setSuccess(true)
                dispatch({type: "UPDATE_SUCCESS", payload: res.data})

            } catch (error) {
                console.log("error with post upload" , error)
                dispatch({type: "UPDATE_FAILURE", payload: res.data})
            }
        
    
    }

  return (
    <div className="settings flex max-w-6xl m-auto">
        
        <div className="settingsWrapper sm:px-6 lg:max-w-[50rem] lg:px-8 flex gap-5 flex-[9] flex-col  ">
            <div className="settingsTitle flex justify-between items-center flex-[6]">
                <span className="settingsUpdateTitle text-3xl mb-5 text-red-700">Update Your Account</span>
                <span className="settingsUpdateTitle  text-xs text-red-700" >Delete Your Account</span>
            </div>
            
            <form 
                className="settingsForm flex flex-col flex-[3]"
                onSubmit={handleSubmit}
             >
                <label>Profile Picture</label>
                <div className="settingsPP flex items-center mx-3">
                    <img
                        src={file ? URL.createObjectURL(file) : PF+user.profilePicture }
                        alt=""
                        className="w-20 h-20 rounded-lg object-cover"
                    />
                    <label htmlFor="fileInput" className="bg-red-400 text-white rounded-full ml-2">
                        <i className="text-3xl "><FaUserCircle/></i>
                    </label>
                    <input type="file" id="fileInput"  className="hidden" onChange={e=> setFile(e.target.files[0])}/>
                </div>
                    <label>UserName</label>
                    <input type="text" placeholder={user.username} onChange={ e => setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={ e => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder="Kooms" onChange={ e => setPassword(e.target.value)}/>
                    <button 
                        className="settingsSubmit w-32 self-center rounded-xl border-none bg-green-500 hover:bg-lime-700 text-white p-2"
                        type="submit"
                    >
                        Update
                    </button>
                    {success && <span className="text-3xl text-blue-700">Profile Updated</span>}
            </form>
        </div>
        <div className="flex-[3]" >
        <Sidebar />
        </div>
        


    </div>
  )
}
