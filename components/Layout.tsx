import Head from 'next/head';
import Navbar from './elements/Navbar';

const Layout:React.FC = (props) => (
  <div>
    <Head>
      <title>PostMaker</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head>
    <Navbar/>
    <div className="container" >
      {props.children}
    </div>
  </div>
);

export default Layout;