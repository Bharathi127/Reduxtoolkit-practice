import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

let UserData=()=>{
    let[state,setState]=useState({
        loading: false,
        users : [],
        errorMessage : ''
    })
    useEffect(()=>{
       
       try{
        let result=async ()=>{ 
            setState({ ...state,loading:true})      
            let dataUrl ="https://jsonplaceholder.typicode.com/users";
            let response= await axios.get(dataUrl);
            setState({
                ...state,
                users:response.data,
                loading: false
            })
            console.log(response)
       }
       result();
    }
       
       catch(error)
       {
        setState({
            ...state,
            errorMessage:error,
            loading: false
        })

       }
       
    },[]);
    let{users, loading, errorMessage}=state

 return(
    <React.Fragment>
       <pre> {JSON.stringify(state.users)}</pre>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col'>
                    <p className='h3 text-primary'>user list</p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    {
                        loading && <h2 className='fw-bold'>...Loading</h2>
                    }
                    {
                        !loading  && errorMessage.length>0&& <h3 className='text-danger'>{errorMessage}</h3>
                    }
                    {
                        !loading && users.length>0 &&
                        <table className='table table-hover text-center table-striped'>
                            <thead className=' bg-primary text-white'>
                                <tr>
                                    <th>
                                        SNO
                                    </th>
                                    <th>
                                        NAME
                                    </th>
                                    <th>
                                        EMAIL
                                    </th>
                                    <th>
                                        WEBSITE
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user=>{
                                        return(
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.website}</td>
                                            </tr>
                                        )
                                    })
                                }
                              </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    </React.Fragment>
 )
 }
            export default UserData;
