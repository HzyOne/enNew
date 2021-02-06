import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import { Icon } from '@ant-design/compatible'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'
import logo from './logo.png';

class AppHeader extends Component {

    constructor (props) {
        super(props);
        this.state={
            list: []
        }
    }

    getMenuItems () {
        return this.state.list.map(item => {
            return (
                <Menu.Item key={item.id}>
                    <Link to={`/${item.id}`}>
                    {/* Link标签进行跳转，即在url地址后面加上item.id */}
                        <Icon type={item.icon}/>{item.title}
                    </Link>
                </Menu.Item>
            )
        })
    }

    componentDidMount () {
        axios.get('http://www.dell-lee.com/react/api/header.json')
            .then((res) => {
                this.setState({
                    list: res.data.data
                })
            })
    }

    render () {
        return (
            <Fragment>
                <Link to='/'>
                    <img
                        alt="logo"
                        src={logo} 
                        className="app-header-logo"
                    />
                </Link>
                <Menu mode="horizontal" className="app-header-menu">
                    {this.getMenuItems()}
                </Menu>
            </Fragment>
        )
    }
}

export default AppHeader;