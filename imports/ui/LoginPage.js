import { UserCollections } from "../api/Collections"
import React, { useState } from "react"
import { Input, Button, Typography } from "@material-ui/core"
export const LoginPage = (props)=>{
    const [inputEmail, changeInputEmail] = useState('')
    const [inputPassword, changeInputPassword] = useState('')
    async function checkCredentials(){
        try{
            const x = await UserCollections.findOne({email:inputEmail,password:inputPassword})
            if(x.email === inputEmail){
                props.onChange(inputEmail)
            }
        }catch(e){
            alert('Wrong ID and Password')
            changeInputEmail('')
            changeInputPassword('')
        }
    }
    return (
        <div className="loginpage">
        <div style={{ textAlign:'center',fontSize:'180%', fontWeight:'600', padding:'30px'}}>Login</div>
        <div style={{padding:'30px'}}>
        <div style={{fontSize:'100%',padding: '5px',paddingLeft:'0px'}}>Email</div>
        <Input type="text" className="input-box" placeholder="Type your email" value={inputEmail} onChange={(e)=>{changeInputEmail(e.target.value)}} />
        <div style={{fontSize:'100%', padding: '5px',paddingLeft:'0px'}}>Password</div>
        <Input type="password"className="password-input" placeholder="Type your password" value={inputPassword} onChange={(e)=>{changeInputPassword(e.target.value)}} />
        </div>
        <div className="login-button" onClick={checkCredentials}>Login</div>
        </div>
    )
}