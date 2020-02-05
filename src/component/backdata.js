import React, { Component } from 'react'
import {Button,Spinner} from 'reactstrap'
import {  Redirect } from 'react-router-dom';
import {getData} from '../redux/action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const mapStateToProps =(state)=>{
    console.log(state)
    return{data:state.data,lodding:state.lodding}
}
export class backdata extends Component {
    state={redirct:""}
   redi=()=>{
    
        this.setState({redirct:<Redirect to="/ThankYou"></Redirect>})
    
   }
    render() {
        return (
            <div>
                <br>
                </br>
                <Button onClick={()=>{this.props.getData(0)}}>Show Data</Button>
                <br>
                </br><br>
                </br>
                {this.props.lodding?<div><Spinner color="primary" /></div>:this.props.data}
                <br></br><br>
                </br>
                <Button onClick={this.redi}>GoBack</Button>
            {this.state.redirct}
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>
    bindActionCreators({getData},dispatch)
   

export default connect(mapStateToProps,mapDispatchToProps)(backdata)
