import React, {Component} from 'react'
import { HashRouter,Switch,Route } from 'react-router-dom'

import Register from '../register/register'
import Login from '../login/login'
import Main from '../main/main'

export default class App extends Component {

    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/>
                    <Route component={Main}/>
                </Switch>
            </HashRouter>
        )
    }
}