import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../Redux/Feature/Employee.feature';
let EmployeeRedux=()=>{
    let dispatch=useDispatch()
    let empdata=useSelector((state)=>{
        return state["employees"]
    })
    let {res}=empdata
    let moreupdateData=(empId)=>{
        dispatch( updateData(empId))
    }
    return(
        <React.Fragment>
            {/*<pre>{JSON.stringify(state.res)}</pre>*/}
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
                                    <input checked={item.isSelected} onChange={()=>moreupdateData(item.id)} type="checkbox" className='form-check-input m-2'/>
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

export default EmployeeRedux;