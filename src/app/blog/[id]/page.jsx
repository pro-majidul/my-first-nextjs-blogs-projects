import React from 'react';

const BlogsDetails = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    console.log(data)
    return (
        <div className='flex flex-col items-center justify-center gap-2 my-5 py-5 space-y-5'>
            <h3 className='text-2xl font-medium text-green-500'>{data.title}</h3>
            <p className='text-center md:w-1/2 mx-auto text-lg'>{data.body}</p>
        </div>
    );
};

export default BlogsDetails;