import React from 'react'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementBy } from '../Redux/Feature/Counter.feature'

let CounterRedux=()=>{
    let dispatch=useDispatch()
    let counterdata=useSelector((state)=>{
        return state["counter"]

    })
    let{count}=counterdata
    
    let Increment=()=>{
       dispatch(increment())
    }
    let Decrement=()=>{
        dispatch(decrement())
    }
    let IncrementBy=()=>{
        dispatch(incrementBy(5))
    }
    return(
        <React.Fragment>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='card '>
                            <div className='card-body'>
                                <p className='h3 fw-4 text-center'>COUNTER {count}</p>
                                <button onClick={Increment}className='btn btn-success m-1'>Increment</button>
                                <button  onClick={Decrement} className='btn btn-warning m-1'>Decrement</button>
                                <button onClick={IncrementBy} className='btn btn-danger m-1'>IncrementBy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}
export default CounterRedux;