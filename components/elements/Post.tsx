import { IPost } from "../../pages/Interfaces";

const Post : React.FC<{info:IPost}> = ({ info }) => {
  return (
    <div className="card border-secondary mb-3" style={{
      "width": "20rem", "height": "20rem"
    }}>
      <h3>{info.title}</h3>
      <p>{info.body}</p>
    </div>
  );
}

export default Post;