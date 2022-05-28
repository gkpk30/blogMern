import Sidebar from '../components/Sidebar'
import SinglePost from '../components/SinglePost';


export default function Single() {
    
    return(
       <div className=" max-w-3xl mx-auto  sm:px-6 lg:max-w-[100rem] lg:px-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <SinglePost/>
        <Sidebar/>
       </div>

    );
}