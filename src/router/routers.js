import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';
import Backdata from '../component/backdata';
import Name from '../component/name';
export class routers extends Component {
    render() {
        return (
            <div>
                
                <Switch>
                    
                    <Route exact path="/backdata" component={Backdata}/>
                    <Route path="/:state" component={Name}/>
                    <Route path="/" component={Name}></Route>
                    </Switch>
                    
            </div>
        )
    }
}

export default routers
