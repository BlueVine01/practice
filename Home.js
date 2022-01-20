import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum....', author: 'Mack', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'Nick', id: 2 },
        { title: 'Web Dev tools', body: 'lorem ipsum...', author: 'Mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("use effect ran");
        console.log(blogs);
    });

    return ( 
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs!" handleDelete={handleDelete} /> 
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Nick')} title="Nick's blogs!" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;

