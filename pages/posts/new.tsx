import React from 'react'
import Layout from '../../components/Layout';
import FormCreator from '../../components/FormCreator';
const Cr = () => {
 return(
    <Layout>
    <FormCreator data={[['title', 'title'],['body', 'post']]} link={'posts'} id={NaN}  route={'/'}/>
    </Layout>
)
};

export default Cr;