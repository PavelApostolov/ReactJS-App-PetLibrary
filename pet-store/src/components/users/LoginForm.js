import React from 'react';
import Input from '../common/input'

const LoginForm = (props) => (
    <form>
        <div>{props.error}</div>
        <Input name='email'
                type='email' 
                placeholder='E-mail' 
                value={props.user.email} 
                onChange={props.onChange}/>
        <br />
        <Input name='password'
                type='password' 
                placeholder='Password' 
                value={props.user.password} 
                onChange={props.onChange}/>
        <br />
        <input type='submit' onClick={props.onSave} value='Login'/>
    </form>
)

export default LoginForm;