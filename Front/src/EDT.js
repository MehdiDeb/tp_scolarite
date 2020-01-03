import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


export default class EDT extends Component {
    

    constructor(login,mdp)
    {
        super()
        this.state={
            seance_dim : [] ,
            seance_lun : [] ,
            seance_mar : [] ,
            seance_mer : [] ,
            seance_jeu : [] ,
            etudiant : [] ,
            test : ''
        }
    }

    componentDidMount()
{
    //  axios.get('http://127.0.0.1:8000/api/etu/'+this.props.match.params.id).then(response=> {
    //     this.setState({etudiant : response.data,})
    //  })
    
    const groupe = this.props.match.params.groupe
    axios.get('http://127.0.0.1:8000/api/seance/dim/'+groupe).then(response=> {
        this.setState({seance_dim : response.data,test : response.data.module}) 
    }
        )
    axios.get('http://127.0.0.1:8000/api/seance/lun/'+groupe).then(response=> {
        this.setState({seance_lun : response.data,})
    }
        )
    axios.get('http://127.0.0.1:8000/api/seance/mar/'+groupe).then(response=> {
        this.setState({seance_mar : response.data,})
    }
        )
    axios.get('http://127.0.0.1:8000/api/seance/mer/'+groupe).then(response=> {
        this.setState({seance_mer : response.data,})
    }
        )
    axios.get('http://127.0.0.1:8000/api/seance/jeu/'+groupe).then(response=> {
        this.setState({seance_jeu : response.data,})
    }
        )


}

render() {

    const seance_dim=this.state.seance_dim
    const seance_lun=this.state.seance_lun
    const seance_mar=this.state.seance_mar
    const seance_mer=this.state.seance_mer
    const seance_jeu=this.state.seance_jeu
    const etudiant = this.state.etudiant 

    return (
        <MuiThemeProvider>
            <AppBar title="Emploi Du Temps">
            <RaisedButton id='absences' label="Absences" primary={true} style={style} onClick={(event) =>{
                 this.props.history.push('/Absences/:'+ etudiant.id )
             }
                }/>
             </AppBar>
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="jour">
                    <br/>
                    <Card justify='center'>
                        <div className="card-header">
    <div className="tit">Dimanche{ this.state.etudiant.groupe }</div>
                            <br/>
                            
                            {seance_dim.map(seance=>(
                                <div key={seance.id} className="card-body">{seance.heureDebut} {seance.heureFin} {seance.module} {seance.enseignant}<br/><br/></div>
                                
                           ))}
                            </div>
                            </Card >
                            </div>
                            <div className="jour">
                    <br/>
                    <Card justify='center'>
                        <div className="card-header">
                            <div className="tit">Lundi{ this.state.test }</div>
                            <br/>
                            
                            {seance_lun.map(seance=>(
                                <div key={seance.id} className="card-body">{seance.heureDebut} {seance.heureFin} {seance.module} {seance.enseignant}<br/><br/></div>
                                
                           ))}
                            </div>
                            </Card >
                            </div>
                            <div className="jour">
                    <br/>
                    <Card justify='center'>
                        <div className="card-header">
                            <div className="tit">Mardi</div>
                            <br/>
                            
                            {seance_mar.map(seance=>(
                                <div key={seance.id} className="card-body">{seance.heureDebut} {seance.heureFin} {seance.module} {seance.enseignant}<br/><br/></div>
                                
                           ))}
                            </div>
                            </Card >
                            </div>
                            <div className="jour">
                    <br/>
                    <Card justify='center'>
                        <div className="card-header">
                            <div className="tit">Mercredi</div>
                            <br/>
                            
                            {seance_mer.map(seance=>(
                                <div key={seance.id} className="card-body">{seance.heureDebut} {seance.heureFin} {seance.module} {seance.enseignant}<br/><br/></div>
                                
                           ))}
                            </div>
                            </Card >
                            </div>
                            <div className="jour">
                    <br/>
                    <Card justify='center'>
                        <div className="card-header">
                            <div className="tit">Jeudi</div>
                            <br/>
                            
                            {seance_jeu.map(seance=>(
                                <div key={seance.id} className="card-body">{seance.heureDebut} {seance.heureFin} {seance.module} {seance.enseignant}<br/><br/></div>
                                
                           ))}
                            </div>
                            </Card >
                            </div>
                            

                    
                </div>
            </div>
        </div>
        </MuiThemeProvider>
 
        
    );
}
}
if (document.getElementById('edt')) {
    ReactDOM.render(<EDT />, document.getElementById('edt'));
  }
  const style = {
    margin: 15,
   };

