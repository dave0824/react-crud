import React, {Component} from 'react'
import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined,EditOutlined,UnorderedListOutlined } from '@ant-design/icons';
import {getUserList} from "../../api";

export default class UserList extends Component {
    state = {
        listData: [],
        current: '',
        total: ''
    }

    handleClick = () => {
        alert("haha")
    }

    getData = (page,pageSize) => {
        getUserList(page,pageSize).then(res => {
            this.setState({
                listData: res.data.userList,
                total: res.data.total,
                current: res.data.page
            })
        })
    }

    componentWillMount(){
        this.getData(1,2)
        /*let listData = []
        for (let i = 0; i < 23; i++) {
            listData.push({
                href: 'http://ant.design',
                title: `ant design part ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description:
                    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }
        this.setState({listData})*/
    }
    render(){
        const {current,total} = this.state
        const IconText = ({ icon, text }) => (
            <span>
                {React.createElement(icon, { style: { marginRight: 8 } })}
                {text}
            </span>
        );
        return(
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        this.getData(page,2)
                    },
                    pageSize: 2,
                    current: current,
                    total: total
                }}
                dataSource={this.state.listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            <EditOutlined  onClick = {this.handleClick.bind(this)} />,
                            <UnorderedListOutlined />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href={item.href}>{item.name}</a>}
                            description={item.description}
                        />
                        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
                    </List.Item>
                )}
            />
        )
    }
}