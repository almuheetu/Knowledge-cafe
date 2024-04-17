import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] =useState([]);
    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, velit?</p>
        </div>
    );
};

export default Blogs;