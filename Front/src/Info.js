import React, { Component, useReducer }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Card from 'material-ui/Card';
import axios from 'axios';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Menu, MenuItem } from 'material-ui';


class Info extends Component {
constructor(props){
  super(props);
  this.state={
    etudiant : [] 
}
  
 }

render() {
    const etudiant = this.state.etudiant
    return (
      <div>
        <MuiThemeProvider>
          <div className="loogin" >
              <AppBar title='Infos'>
                    <RaisedButton label="test" primary={true} style={style} onClick={(event) =>{
                 this.azerty()
             }
             
                }/>
          </AppBar>
          <br/>
          <Card>
          {etudiant.map(etudiant=>(
                                <Card><div key={etudiant.id} className="card-body"> {etudiant.nom} {etudiant.prenom} {etudiant.groupe} {etudiant.matricule} <br/><br/></div>
                                </Card>
                           ))}
          </Card>

         </div>
         </MuiThemeProvider>
      </div>
    );
  }

componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/etu/'+this.props.match.params.id).then(response=> {
        this.setState({etudiant : response.data})

    })
    
    }
  
}

  
const style = {
 margin: 15,
};
export default Info;