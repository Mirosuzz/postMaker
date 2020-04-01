import React, { useEffect, useState } from 'react'
import axios from "axios";
import Router from 'next/router';
import { IFormCreator } from '../pages/Interfaces';

const FormCreator:React.FC<IFormCreator> = ({data, link, id,  route}) => {
  let [isSending, changeIsSanding] = useState<boolean>(false)
  let [body, setBody] = useState<{}>({})
  useEffect(() => {
    const fetchData = async (body:{}) => {
      try {
        let data = await axios.post(`https://simple-blog-api.crew.red/${link}`, 
        body)
        setBody({})
        changeIsSanding(false)
        
        Router.push(route)
      } catch (e) {
        throw (e)
      }
    }
    isSending ? fetchData(body) : null;

  }, [isSending])

  const inputChange = (e:React.ChangeEvent<HTMLTextAreaElement>, f:string) => {
    id?
    setBody({postId: id, body:e.target.value})
    :
    setBody(Object.assign({}, body, {[f]: e.target.value}))
  }
  return (
    <div className="form-group">
      {data.map(d=><div key = {d[0]}>
        <label htmlFor="exampleTextarea">{d[1]}</label>
    <textarea className="form-control" id="exampleTextarea" onChange={e=>inputChange(e, d[0])}></textarea>
      </div>)}
    
    <button onClick={()=>changeIsSanding(true)} className="btn btn-outline-primary">send</button>
    <button  onClick={()=> Router.push('/')} className="btn btn-outline-success">back</button>
  </div>
    
    );
}

export default FormCreator;