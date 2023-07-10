import React, { useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import {getUsers} from '../Redux/Feature/User.feature'
let UserReducer=()=>{
      let dispatch=useDispatch()
    let userState=useSelector((store)=>{
        return store["users"];
    })
    useEffect(()=>{
       
     dispatch(getUsers());
   
       
    },[dispatch]);
    let{users, loading, errorMessage}=userState;

 return(
    <React.Fragment>
       <pre> {JSON.stringify(users)}</pre>
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
                        !loading  && errorMessage && <h3 className='text-danger'>{errorMessage}</h3>
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
            export default UserReducer;
