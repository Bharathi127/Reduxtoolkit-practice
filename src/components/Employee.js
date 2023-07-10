import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
let Employee=()=>{
    let[state,setState]=useState({
        res:EmployeeService.getAllEmployeeList()
    })
    let {res}=state
    let updateData=(empId)=>{
        let selectedData=res.map((item)=>{
            if(item.id===empId){
                return{  
                  ...item,
                   isSelected: !item.isSelected

            }
        }
        else return item;
    })
    setState({
        ...state,
        res:selectedData
    })

}
    return(
        <React.Fragment>
            <pre>{JSON.stringify(state.res)}</pre>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col'>
                        <p className='h3 text-primary'>Employees</p>
                    </div>

                </div>
                <div className='row'>
                    <div className='col md-6'>
                        <ul className='list-group'>
                         {
                            res.length>0 &&
                            res.map((item)=>{
                                
                                return(
                                  <li key={item.id} className='list-group-item'>
                                    <input onChange={()=>updateData(item.id)} type="checkbox" className='form-check-input m-2'/>
                                    {item.name}
                                    {item.username}
                                    {item.email}
                                  </li>
                                     )
                            })
                         }
                         </ul>
                    </div>
                    <div className='col md-4'>
                        {   
                        res.length>0 &&
                         res.map((item)=>{
                            return(
                                <div key={item.id}>
                                         {
                                           item.isSelected &&
                                           <div className='card '>
                                              <div className='card-body'>
                                                 <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                       Name: <span>{item.name}</span>
                                                    </li>
                                                    <li className='list-group-item'>
                                                       email: <span>{item.email}</span>
                                                    </li>
                                                 </ul>
                                              </div>
                                           </div>
                                         }
                                </div>

                               )
                         })
                            
                        }
                    </div>
               </div>
            </div>
        </React.Fragment>
    )

}

export default Employee;