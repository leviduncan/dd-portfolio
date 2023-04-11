import React, { useEffect, useState } from 'react';
import axios from 'axios'
    
export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios
          .get('https://dev.darrinduncan.com/wp-json/wp/v2/pages')
          .then((res) => {
              setPosts(res.data)
              console.log(res.data)
          })
          .catch((err) => {
              console.log("Woops! something went wrong!")
          })
  }, [])


  return (
    <>
      <div>
        {
          posts.map((post, index) => (
            <div key={index}>{post.title.rendered}</div>
          ))
        }
      </div>
    </>
 );
}