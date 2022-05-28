import { Link } from "react-router-dom";


// const posts = [
//   {
//     title: 'Boost your conversion rate',
//     href: '#',
//     category: { name: 'Article', href: '#' },
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     imageUrl:
//       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//     readingTime: '6 min',
//     author: {
//       name: 'Roel Aufderehar',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     title: 'How to use search engine optimization to drive sales',
//     href: '#',
//     category: { name: 'Video', href: '#' },
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
//     date: 'Mar 10, 2020',
//     datetime: '2020-03-10',
//     imageUrl:
//       'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//     readingTime: '4 min',
//     author: {
//       name: 'Brenna Goyette',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     title: 'Improve your customer experience',
//     href: '#',
//     category: { name: 'Case Study', href: '#' },
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
//     date: 'Feb 12, 2020',
//     datetime: '2020-02-12',
//     imageUrl:
//       'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//     readingTime: '11 min',
//     author: {
//       name: 'Daniela Metz',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
       
//     },
//   },
//   {
//     title: 'adfasfsadfsaf',
//     href: '#',
//     category: { name: 'Article', href: '#' },
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     imageUrl:
//       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//     readingTime: '6 min',
//     author: {
//       name: 'Roel Aufderehar',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     title: 'Bodsafion rate',
//     href: '#',
//     category: { name: 'Article', href: '#' },
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     imageUrl:
//       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//     readingTime: '6 min',
//     author: {
//       name: 'Roel Aufderehar',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
// ]

export default function Post({post}) {
    const PF = "http://localhost:5000/images/";
  return (
   
              <>
                <div to={`/post/${post._id}`} key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    {post.photo &&
                      <img className="h-48 w-full object-cover" 
                        src={PF + post.photo} 
                        alt="" 
                        />
                      
                    }
                  </div>
                  <div className="flex-1 bg-monochromatic  p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-indigo-600">
                        {post.categories.map(c=> (
                          <Link key={c} to={c} className="hover:underline cursor-pointer mr-3" >
                            {c}
                          </Link>
                        ))}
                        {/* <a 
                          // href={post.category.href} 
                          className="hover:underline"
                        >
                          {post.categories}
                        </a> */}
                      </div>
                      <Link 
                        to={`/post/${post._id}`} 
                        className="block mt-2"
                        >
                        <p className="text-xl font-semibold text-textPrimary font-primary">{post.title}</p>
                        <p className="mt-3 text-base text-textPrimary">{post.excerpt}</p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a 
                          // href={post.author.href}
                          >
                          <span className="sr-only">{post.username}</span>
                          <img className="h-10 w-10 rounded-full" 
                            src={post.profilePicture} 
                            alt=""
                             />
                             {/* {console.log("post.profilePicture: ", postProfilePicture)} */}
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-textPrimary">
                          <a 
                            // href={post.author.href} 
                            className="hover:underline">
                            {post.username}
                            
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.createdAt}>{new Date(post.createdAt).toDateString()}</time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{post.readingTime} read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </>
  )
}
