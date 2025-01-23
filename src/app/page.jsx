
const Home = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogs = await response.json()
  return (
    <div className="my-3 py-3 ">
      <h3 className="text-center text-xl">Here is the All Blogs Title</h3>
      <ul className="px-12 py-12">
        {
          blogs.map(blog => <li className="text-xl hover:underline py-2 hover:text-blue-300" key={blog.id}>{blog.title}</li>)
        }
      </ul>
    </div>
  );
};

export default Home;
