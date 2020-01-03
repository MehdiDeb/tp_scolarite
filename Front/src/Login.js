import React, { Component, useReducer }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Menu, MenuItem } from 'material-ui';


class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  username2: [],
  password2: [],
  groupe:''
  }
 }

render() {
    const username=this.state.username2 
    const password=this.state.password2 
    return (
      <div>
        <MuiThemeProvider>
          <div className="loogin" >
              <AppBar title = 'Authentification'>
                    
          </AppBar>
           <TextField
           id='login'
             hintText="Entrez votre login"
             floatingLabelText="Login"
              onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
             id='mdp'
               type="password"
               hintText="Entrez votre mot de passe"
               floatingLabelText="Mot de passe"
                onChange = {(event,newValue) => this.setState({password:newValue})}
           // onChange = {(event,newValue) => window.$mdp = newValue}
               />
             <br/>
             {/* <Link to="/EDT/"> */}
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) =>{
                 const login =this.state.username ;
                 const mdp =this.state.password;
                 this.handleClick(event,login,mdp)
             }
             
                }/>

             
             {/* </Link> */}
             {/* <div>
             username: 
             
                                    <div key={username[0].id} className="card-body">{username.login} {username.mdp}</div>
                                
                 
                  password: 
             </div> */}
         </div>
         </MuiThemeProvider>
      </div>
    );
  }

handleClick(event,login,mdp){
    axios.get('http://127.0.0.1:8000/api/etu/'+login+'&'+mdp).then(response=> {
        window.$groupe = response.data.groupe
        this.setState({groupe : response.data.groupe})
        window.$login = response.data.login
        window.$mdp = response.data.mdp 
        localStorage.setItem("group",response.data.groupe)
        this.props.history.push('/EDT/:'+response.data.groupe)
        //alert('1 '+response.data.groupe)
    })
    
    }

  
}

  
const style = {
 margin: 15,
};
export default Login;