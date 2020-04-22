import React, {Component} from 'react'
import { Form, Input, Button, Checkbox ,Row,Col,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

import './register.less'
import {register} from "../../api";

export default class Register extends Component {

    state = {
        username: '',
        password: ''

    }

    register = async () => await register(this.state)

    onFinish = values => {

        if(values.password !== values.rePassword){
            message.error("两次输入密码不一致!");
            return;
        }
        this.setState({
            username: values.username,
            password: values.password
        })

        this.register().then(response => {
           if (response.data.indexOf("成功") !== -1){
               message.success(response.data);
           } else {
               message.error(response.data);
           }
        })

    }
    render() {
        return (
            <div>
                <Row>
                    <Col span="5" offset={9} className="row">
                        <h1>用户注册</h1>
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
                            <Form.Item
                                name="rePassword"
                                rules={[{required: true, message: 'Please input your Password!'}]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="rePassword"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    register
                                </Button>
                                Or <Link to='/login'>login now!</Link>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>

        );
    }

}


