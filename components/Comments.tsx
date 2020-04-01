import Comment from './elements/Comment'
import { IPost } from '../pages/Interfaces';
const Comments: React.FC<{comments:[IPost]}> =({comments})=> {
    return (
      <div style={{'width':'50%'}}>
          <h2>Comments:</h2>
          {comments.length?
          <ul className="list-group" >
          {comments.map(c=><Comment key = {c.id} info={c}/>)}
          </ul>
          :
          <div>You havent got any comments yet</div>}
      </div>
    );
  }
export default Comments;