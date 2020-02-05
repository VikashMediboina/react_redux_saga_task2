import React, { Component } from 'react'
import { Button, Input,Row,Col  } from 'reactstrap';
import Frontpage from './frontpage';
import {  Redirect } from 'react-router-dom';
export class name extends Component {
    state={
        name:'',
        appear:'',
        frontpage:false,
        errOpen:false
    }
    
    nameChange =(e)=>{
        if(e.target.value.match(/^[A-Za-z]+[\w]*$/)){
            
            this.setState({name:e.target.value,errOpen:false})
        }
        else{
            this.setState({name:e.target.value,errOpen:true})
            
        }
        
    }
    show=()=>{
        if(this.state.name){
            
            this.setState({appear:<div><Redirect to="/welcome"></Redirect></div>,frontpage:true})

        }
        else{
            this.setState({frontpage:false})
            console.log("dfff")

        }

    }
    render() {
        return (
            <div>
                <br></br><br></br>
                <Row>
                    <Col md={4}>
                    </Col>
                    <Col md={3}>
                    <Input type="text" placeholder="Enter Name" value={this.state.name} onChange={this.nameChange} ></Input>
                {this.state.errOpen?"enter corectly":""}    
                </Col>
                    <Col md={1}>
                     <Button color="success" onClick={this.show}>start</Button>
                    </Col>
                  
                </Row>
                {this.state.appear}
                {this.props.match.params.state?<Frontpage names={this.state.name}greetings={this.props.match.params.state}></Frontpage>:""}
            </div>
        )
    }
}

export default name
