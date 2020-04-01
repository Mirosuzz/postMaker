const Comment : React.FC<{info:{body:string}}> =({info})=> {
    return (
    <>
          {info?
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {info.body}
          </li>
          :null}
      </>
    );
  }
export default Comment;