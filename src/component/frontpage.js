import React, { Component } from 'react'
import {Button} from "reactstrap"
import {  Redirect } from 'react-router-dom';

export class frontpage extends Component {
    constructor(props){
        super(props)
    }
    state={redirct:""}
    redi=()=>{
      
    this.setState({redirct:<Redirect to={'/backdata'}></Redirect>})
    }
    render() {
        return (
            <div align="center">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>{this.props.greetings?<React.Fragment>
                    {this.props.greetings} {this.props.names}
                    <br></br>
                    <br></br>
                    <br></br>
                    {this.props.names.length!==0?<Button color="danger" onClick={this.redi}>GO TO NEXT</Button>:''}
                    </React.Fragment>:""} </h4>
                    {this.state.redirct}
            </div>
        )
    }
}

export default frontpage
