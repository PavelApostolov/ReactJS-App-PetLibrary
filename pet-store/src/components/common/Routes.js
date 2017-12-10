import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import ListPetsPage from '../pets/ListPetsPage'
import RegisterPage from '../users/RegisterPage'
import LoginPage from '../users/LoginPage'
import LogoutPage from '../users/LogoutPage'
import CreatePetsPage from '../pets/CreatePetsPage'

class Routes extends Component {
    render() {
        return ( 
        <Switch >
            <Route path = '/' exact component = { ListPetsPage }/> 
            <Route path = '/users/register' component = { RegisterPage }/> 
            <Route path = '/users/login' component = { LoginPage }/> 
            <PrivateRoute path = '/users/logout' component = { LogoutPage }/>
            <PrivateRoute path = '/pets/add' component = { CreatePetsPage }/> 
        </Switch>
        )
    }
}

export default Routes;