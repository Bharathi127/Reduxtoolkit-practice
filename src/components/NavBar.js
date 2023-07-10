import React  from 'react'
import { Link } from 'react-router-dom';
let NavBar=()=>{
    return(
        <React.Fragment>
            <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <div className='container'>
                    <Link to={'/'} className="navbar-brand">Redux Toolkit</Link>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                            <Link to={'/employee'} className='nav-link'>Employee</Link>
                            </li>
                            <li className='nav-item'>
                            <Link to={'/counter'} className='nav-link'>Counter</Link>
                            </li>
                            <li className='nav-item'>
                            <Link to={'/userdata'} className='nav-link'>UserData</Link>
                            </li>
                        </ul>
                   
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )

}
export default NavBar;