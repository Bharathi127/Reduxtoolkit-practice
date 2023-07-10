import employeeReducer from './Feature/Employee.feature'
import counterReducer from './Feature/Counter.feature'
import userListReducer from './Feature/User.feature'
const RootReducer={ 
   
   
    counter:counterReducer,
    employees:employeeReducer,
    users: userListReducer
    
} 
export default RootReducer;