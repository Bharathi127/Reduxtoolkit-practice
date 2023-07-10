import React from 'react'
import {useState} from 'react'
let Counter=()=>{
    let[state, setState]=useState({
        count:0
    })
    let Increment=()=>{
        setState((state)=>({
            count:state.count+1
        }))
    }
    let Decrement=()=>{
        setState((state)=>({
            count:state.count-1>0?state.count-1:1
        }))
    }
    let IncrementBy=()=>{
        setState((state)=>({
            count:state.count+5
        }))
    }
    return(
        <React.Fragment>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='card '>
                            <div className='card-body'>
                                <p className='h3 fw-4 text-center'>COUNTER {state.count}</p>
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
export default Counter;