import React, {Component} from 'react'
import {Row,Col} from 'antd'
import {Switch,Route} from 'react-router-dom'

import Nav from '../../compontents/nav/nav'
import Header from '../../compontents/header/header'
import Footer from '../../compontents/footer/footer'
import router from '../../config/router'
import NoDevelopment from '../noDevelopment/noDevelopment'

import './main.less'


export default class Main extends Component {

    state = {
        routerList: [],
        // username:'dave'
    }
    componentWillMount(){

        this.renderRouter(router);
        const username = localStorage.getItem('username') || '';
        console.log(localStorage.getItem('username'))


        if (username === ''){
            this.props.history.push('/login')
        } else {
            this.setState({username})
        }
    }
    renderRouter = data => {
        data.forEach((item,index) => {

            if(item.children){// 如果子路由存在,渲染子路由
                this.renderRouter(item.children)
            }

            if (item.component) { // 如果组件属性存在。则渲染原本组件
                const router = <Route key = {index} path = {item.key} component = {item.component}  />;

                let routerList = this.state.routerList;
                routerList.push(router)
                this.setState({
                    routerList
                })
            }else{ // 组件不存在就渲染页面开发中的友好组件
                const router = <Route key = {index} path = {item.key} component = {NoDevelopment} />;

                let routerList = this.state.routerList;
                routerList.push(router)
                this.setState({
                    routerList
                })
            }

        })
    }
    render() {
        let username  = this.state.username
        return (
            <Row className="container">
                <Col span="3" className="nav-left">
                    <Nav />
                </Col>
                <Col span="21" className="main">
                    <Header  username={username}/>
                    <Row className="content">
                        <Switch>
                            {this.state.routerList}
                        </Switch>
                    </Row>
                    <Footer />
                </Col>
            </Row>
        )
    }
}