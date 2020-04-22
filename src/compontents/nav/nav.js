import React, { Component } from 'react'
import router from '../../config/router'
import {Link} from 'react-router-dom'
import {Menu,Icon} from 'antd'
import './nav.less'
const SubMenu = Menu.SubMenu;

export default class Nav extends Component {
  componentWillMount(){
    const menuTreeNode = this.renderMenu(router);
    this.setState({
      menuTreeNode
    })
  }
  //菜单渲染
  renderMenu=(data)=>{
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}><Link to={item.key}>{item.title}</Link></Menu.Item>
    })
  }
  render() {
    return (
      <div>
        <div className='logo'>
          <h1>demo</h1>
        </div>
        <Menu theme="dark" mode="inline"
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}
