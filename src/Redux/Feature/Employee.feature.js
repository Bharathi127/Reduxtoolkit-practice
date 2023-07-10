import { createSlice } from '@reduxjs/toolkit'
import EmployeeService from '../../services/EmployeeService'
const initialState={
    res: EmployeeService.getAllEmployeeList()
}

const EmployeeSlice=createSlice({
    name:'employees',
    initialState:initialState,
    reducers:{
          updateData: function(state,action){
             state.res=state.res.map((item)=>{
                if(item.id===action.payload){
                    return{  
                      ...item,
                       isSelected: !item.isSelected
    
                }
            }
            else return item;
        })
        }
    } 
})

export const {updateData}=EmployeeSlice.actions;
export default EmployeeSlice.reducer