import React, { Component } from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios';

class NewList extends Component {

    componentWillReceiveProps (nextProps) {
        //当父组件传过来的值this.props发生改变时，会触发componentWillReceiveProps函数
        //点击Header组件列表，父组件接收到的url地址后面的id值发生改变，从而使父组件传过来的this.props发生改变
        //触发componentWillReceiveProps函数，axios重新请求数据并返回
        const id = nextProps.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id)
            .then(res => {
                this.setState({
                    data: res.data.data
            })
        })
    }

    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount () {
        let url = 'http://www.dell-lee.com/react/api/list.json';
        const id = this.props.match.params.id
        if (id) {
            url = url + '?id' + id;
        }
        axios.get(url)
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })
    }

    render () {
        return (
            <List
                style={{background: '#fff'}}
                bordered
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <Link to={`/detail/${item.id}`}>
                            {item.title}
                        </Link>
                    </List.Item>
                )}
            />
        )
    }
}

export default NewList;