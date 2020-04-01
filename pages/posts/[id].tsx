import React, {useState} from 'react'
import axios from 'axios'
import Layout from '../../components/Layout';
import Post from '../../components/elements/Post';
import Comments from '../../components/Comments';
import FormCreator from '../../components/FormCreator';
import { NextPage } from 'next';
import { IPosts } from '../Interfaces'
const OnePost: NextPage<{post:IPosts}> = ({ post }) => {

return (
    <Layout>
      {post?
      <div style={{'display':'flex'}}>
      <div style={{}}>
      <Post info={post}/>
      <FormCreator data={[['body', 'Create your comment']]} link={'comments'}
       id={post.id}  route={`/posts/${post.id}`} />
      </div>
      <Comments comments={post.comments}/>
      </div>:
      <div>Your post isnt exist</div>}
    </Layout>
  )
};
OnePost.getInitialProps = async function ({query}) {
  const  id  = query.id
  try{
    const postResp = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
    const post = await postResp.data;
    return {
    post:post
  };
  }catch(e){
    return {
      post:null
    };
  }
    
  
}

export default OnePost;