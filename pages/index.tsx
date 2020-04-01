import axios from 'axios';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { NextPage } from 'next'
import {IPost} from './Interfaces'

const Index:NextPage<{posts:[IPost]}> = ({posts}) => {
  return(
  <Layout>
    <div style={{"display":"flex", "flexDirection":"column", 
    "justifyContent":"center"}}>
      <h1>Last Posts</h1>
      <Posts posts={posts}/>
    </div>
    </Layout>
  )
};

Index.getInitialProps = async function() {
  const res = await axios.get('https://simple-blog-api.crew.red/posts');
  // console.log(res.data)
  const data = await res.data;

  return {
    posts: data
  };
}

export default Index;
