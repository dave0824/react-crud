import React, {Component} from 'react'

export default class CompanyFrom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                { name: "测试1",age:'30',unit:'阿里', address: '杭州' },
                { name: "测试2",age:'16',unit:'腾讯', address: '深圳' },
                { name: "测试3",age:'18',unit:'百度', address: '北京' },
                { name: "测试4",age:'33',unit:'滴滴', address: '北京' }
            ]
        }
    }

    add = () => {
        let name = this.refs.name.value;
        let age = this.refs.age.value;
        let unit = this.refs.unit.value;
        let address = this.refs.address.value;
        let obj = { name, age,unit, address};
        let tempList = this.state.list;
        tempList.push(obj);
        this.setState({
            list: tempList
        })
        this.reset()
    }
    remove = (index) => {

        let tempList = this.state.list;
        tempList.splice(index,1);
        this.setState({
            list: tempList
        })
        this.reset()
    }

    Change = (key) => {
        let list = this.state.list;
        let name = this.refs.name.value;
        let age = this.refs.age.value;
        let unit = this.refs.unit.value;
        let address = this.refs.address.value;
        let obj = { name, age,unit, address};
        list.splice(key,1,obj);
        this.setState({
            list: list
        })
        this.reset()
    }
    watch=(key)=>{
        let list = this.state.list;
        this.refs.name.value =list[key].name;
        this.refs.age.value=list[key].age;
        this.refs.unit.value=list[key].unit;
        this.refs.address.value=list[key].address;
    }
    reset=()=>{
        this.refs.name.value =''
        this.refs.age.value=''
        this.refs.unit.value=''
        this.refs.address.value=''
    }
    render() {
        return (
            <div>
                <p>form</p>
                姓名:<input ref="name" type="text"/>
                年龄:<input ref="age" type="text"/>
                单位:<input ref="unit" type="text"/>
                地址:<input ref="address" type="textarea"/>
                <button onClick={this.add}>新增</button>
                <button onClick={this.reset}>重置</button>
                <p>表格</p>

                <table className="table">
                    <thead>
                    <tr>
                        <td>姓名</td>
                        <td>年龄</td>
                        <td>单位</td>
                        <td>地址</td>
                        <td>操作区</td>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        this.state.list.map((item,key)=>{
                            return (
                                <tr key={key}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.unit}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button onClick={this.remove.bind(this,key)}>删除</button>
                                        <button onClick={this.Change.bind(this,key)}>修改</button>
                                        <button onClick={this.watch.bind(this,key)}>查看</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}