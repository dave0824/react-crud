import React, { Component } from 'react'
import {Row,Col,Avatar,Popover } from 'antd'
import {Link} from 'react-router-dom'
import './header.less'
import { UserOutlined } from '@ant-design/icons';
export default class Header extends Component {
  render() {
      const content = (
          <div>
              <p>欢迎您，{this.props.username}</p>
              <p>
                  <Link to="/login" >详情</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/login"  onClick={() => {localStorage.removeItem('username')}}>退出</Link>
              </p>
          </div>
      )
    return (  
      <div className="header">
        <Row className="header-top">
          <Col span="24">
              <Popover content={content} placement="bottom">
                <Avatar className="header-link" icon={<UserOutlined />} />
              </Popover>

          </Col>
        </Row>
     </div>
    )
  }
}
