import React, {Component} from 'react'
import { Form, Input, Button, Checkbox ,Row,Col,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

import './login.less'
import {login} from "../../api";

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    login = async () => await login(this.state)

    onFinish = values => {

        this.setState({
            username: values.username,
            password: values.password
        })

        this.login().then(response => {
            if (response.data === null || response.data === '') {
                message.error('账号或密码错误', 1);
            } else {
                window.localStorage.setItem('username',this.state.username);
                this.props.history.push({
                    pathname: '/home'
                });
            }
        })

    }
        render() {
            return (
                <div>
                    <Row>
                        <Col span="5" offset={9} className="row">
                            <h1>用户登录</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="5" offset={9}>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{remember: true}}
                                onFinish={this.onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{required: true, message: 'Please input your Username!'}]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                           placeholder="Username"/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{required: true, message: 'Please input your Password!'}]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon"/>}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    Or <Link to='/register'>register now!</Link>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </div>

            );
        }

}


