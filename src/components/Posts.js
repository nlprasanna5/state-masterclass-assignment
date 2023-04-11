import React,{useState,useEffect} from "react";
import  axios  from "axios";
import postStyle from './posts.module.css';

function Posts(){
    const [data,setData]=useState([]);

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> setData(response.data))

    },[])

   function handleRemove(id){
    setData(
        data.filter((item)=> item.id !==id)
    )

   }


    return (
        <>
        <div className={postStyle.container}>
            <div>
                <h2>Table data</h2>
            </div>
            <table className={postStyle.table}>
                <thead>
                    <th>Id</th>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Remove</th>

                </thead>
                <tbody>
                   {
                    data.map((item)=> (
                        <>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td ><p className={postStyle.remove} onClick={()=>handleRemove(item.id)}>X</p></td>

                        </tr>
                        </>

                    ))
                   }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Posts;