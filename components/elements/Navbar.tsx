import Link from 'next/link';

const Navbar : React.FC = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
    <Link href={`/`} passHref><a className="navbar-brand">Postmaker</a></Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link href={`/posts/new`} passHref><button className="btn btn-outline-secondary">+ create own post</button></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;