import React, { Component } from 'react'
import { Card, Avatar } from 'antd';

const { Meta } = Card;


export default class NoDevelopment extends Component {
    render() {
        return (
            <Card
                style={{ width: 300,marginLeft:'350px',marginTop:'100px' }}
                size='small'
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                hoverable= 'true'
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="dave"
                    description="功能暂未开发，敬请期待"
                />
            </Card>
        )
    }
}
