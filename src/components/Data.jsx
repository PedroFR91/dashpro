import React, { useEffect, useState } from 'react';
import axios from 'axios';
const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});
function Data() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client.get('?_limit=10').then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <div className='app'>
      {posts.map((post) => {
        return <div className='post-card' key={post.id}></div>;
      })}
    </div>
  );
}

export default Data;
