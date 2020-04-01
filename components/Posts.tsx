import React from 'react'
import Link from "next/link";
import Post from './elements/Post'
import { IPost } from '../pages/Interfaces';


const Posts: React.FC<{posts:[IPost]}> = ({posts})=> {

  return (
      <div style={{'display':'flex', 'flexWrap':'wrap'}} className=''>
        {posts.map(p=><div key = {p.id} className='card' style={{"margin": "5px"}}>
        <Post info={p}/>
        <Link href={`/posts/${p.id}`} >
        <button className="btn btn-primary">see a full post</button>
      </Link>
      </div>
        )}
      </div>
    );
  }
export default Posts;
