import React, { Component, useReducer }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
import axios from 'axios';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class Absence extends Component {
constructor(props){
  super(props);
  this.state={

    absence : [] 
}
  
 }

 componentDidMount(){
  axios.get('http://127.0.0.1:8000/api/absence/:1').then(response=> {
        this.setState({absence : response.data,})  })
  }

render() {
  const absence = this.state.absence

    return (
      <div>
        <MuiThemeProvider>
          <div className="loogin" >
          <AppBar
             title="Absences"
           >
             {/* <RaisedButton label="EDT" primary={true} style={style} onClick={(event) =>{
                 this.props.history.push('/EDT/'+ this.props.match.params.id_etudiant )
             }
                }/> */}
          </AppBar>
             
           
           <br/>
           <div className='Conteneur' >
                        <div className="card-header">
                            <br/>
                            
                            {absence.map(absence=>(
                                <Card><div key={absence.id} className="card-body"> {absence.jour} {absence.heureDebut} {absence.heureFin} {absence.module} justifiée : {absence.justifie}<br/><br/></div>
                                </Card>
                           ))}
                            </div>
                            </div >
                            </div>
                            <div className="jour">
                    <br/>
             
         </div>
         </MuiThemeProvider>
      </div>
    );
  }

  
}
const style = {
 margin: 15,
};
export default Absence;