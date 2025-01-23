import Link from "next/link";

const Home = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogs = await response.json()
  return (
    <div className="my-3 py-3 ">
      <h3 className="text-center text-2xl">Here is the All Blogs Title</h3>
      <ul className="px-12 py-12">
        {
          blogs.map(blog => <li className="text-xl hover:underline py-2 hover:text-blue-300" key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>)
        }
      </ul>
    </div>
  );
};

export default Home;
