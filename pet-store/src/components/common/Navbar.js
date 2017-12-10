import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Auth from '../users/Auth'
import userStore from '../../stores/UserStore'

class Navbar extends Component{ 
    constructor(props){
        super(props)

        this.state = {
            username: Auth.getUser().name
        }

        this.handleUserLoggedIn = this.handleUserLoggedIn.bind(this)
        userStore.on(userStore.eventTypes.USER_LOGGED_IN, 
        this.handleUserLoggedIn)
    }

    handleUserLoggedIn(data){
        if(data.success){
            this.setState({
                username: data.user.name
            })
        }
    }

    render(){
        return(
    <div className='menu'>
        <Link to='/'className="home">Home</Link>
        { Auth.isUserAuthenticated() ? (
            <div>
                
                <div className="logout">
                    <span>Hello, {this.state.username}!</span>
                    <Link to='/users/logout' className="logout">Logout</Link>
                </div>
                <Link to='/pets/add' className="add-pet">Add pet</Link>
            </div>
        ) : (
            <div>
                <Link to='/users/register'>Register</Link>
                <Link to='/users/login'>Login</Link>
            </div>
        )}
    </div>
        )
    }
}
export default Navbar;