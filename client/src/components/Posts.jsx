import Post from '../components/Post'
import { Link } from "react-router-dom";
/* This example requires Tailwind CSS v2.0+ */

 


  export default function Posts({posts}) {
    
    console.log("Posts comp", posts)
    return (
      <main className="lg:col-span-9 xl:col-span-10 ">
        <div className="relative bg-inherit pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 font-fourth ">
          <div className="absolute inset-0">
            <div className="bg-inherit h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-textPrimary sm:text-4xl font-primary ">From the blog</h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
              </p>
            </div>

            
             
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-none font-primary">
              {posts.map( (p, index) => 
                <Post key={index} post={p}/> 
                )}
            </div>
              
             
          </div>
        </div>
      </main>
    )
  }
  