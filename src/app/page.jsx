import Link from "next/link";

const Home = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogs = await response.json()
  return (
    <div className="my-3 py-3 ">
      <h3 className="text-center md:text-4xl bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text  text-2xl text-transparent leading-normal">Here is the All Blogs Title</h3>
      <ul className="md:px-12 py-12">
        {
          blogs.map(blog => <li className="text-xl hover:underline py-2 hover:text-green-800" key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>)
        }
      </ul>
    </div>
  );
};

export default Home;
