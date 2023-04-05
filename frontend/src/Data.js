import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'


function Data() {
  
 
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('/api')
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <div >    
        <ul>
            {
                posts.map(post => (
                <li key={post.id}>{post.description}</li>))
            }
        </ul>
    </div>
  );
}

export default Data;
