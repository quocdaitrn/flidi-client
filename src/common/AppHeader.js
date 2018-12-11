import React, { Component } from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import './AppHeader.css';
import {AppContext}  from "../app/context";
import { Layout, Menu, Dropdown, Icon,Input,Form,Row, Col,Select } from 'antd';
import ProvinceRepository from '../repositories/ProvinceRepository';

const Header = Layout.Header;
const Search = Input.Search;
const FormItem = Form.Item;
const Option = Select.Option;
const ProvinceList = ProvinceRepository.List;
const selectAfter = (
    <Select defaultValue="Hồ Chí Minh" style={{ width: 124 }}>
        {ProvinceList.map((item)=>{
            return <Option value={item.id}>{item.name}</Option>
        })}
    </Select>
  );
class AppHeader extends Component {
    showModalLogin = ()=>{
    };
    showModalSignup = ()=>{
    };
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick({ key }) {
        if (key === "logout") {
            this.props.onLogout();
        }
        if(key==="login"){
            this.showModalLogin();
        }
    }

    render() {
        let menuItems;
        if (this.props.currentUser) {
            menuItems = [
                <Menu.Item key="/">
                    <Link to="/">
                        <Icon type="home" className="nav-icon" />
                    </Link>
                </Menu.Item>,
                <Menu.Item key="/profile" className="profile-menu">
                    <ProfileDropdownMenu
                        currentUser={this.props.currentUser}
                        handleMenuClick={this.handleMenuClick} />
                </Menu.Item>
            ];
        } else {
            menuItems = [
                <Menu.Item onClick={()=>{this.showModalLogin()}} key="login">
                    Login
                </Menu.Item>,
                <Menu.Item onClick={()=>{this.showModalSignup()}} key="signup">
                    Signup
                </Menu.Item>
            ];
        }

        return (
            <AppContext.Consumer>
                {({showModalLogin,showModalSignup}) => {
                    this.showModalLogin = showModalLogin;
                    this.showModalSignup = showModalSignup;
                    return (
                <Header className="app-header">
                    <div className="container">
                    <Row>
                        <Col span={4}>
                        <div className="app-title" >
                            <Link to="/"><Icon type="environment" />Flidi</Link>
                        </div>
                        </Col>
                        <Col span={10}>
                            <Search
                                placeholder="Bạn muốn đi đâu?"
                                onSearch={value => console.log(value)}
                                enterButton
                                style={{display:'inline-block'}}
                                addonBefore={selectAfter}
                                    />
                        </Col>
                        <Menu
                            className="app-menu"
                            mode="horizontal"
                            selectedKeys={[this.props.location.pathname]}
                            style={{ lineHeight: '64px' }} >
                            {menuItems}
                        </Menu>
                        </Row>
                    </div>
                    </Header>)}}
            </AppContext.Consumer>
        );
    }
}

AppHeader.contextType = AppContext;
function ProfileDropdownMenu(props) {
    const dropdownMenu = (
        <Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
            <Menu.Item key="user-info" className="dropdown-item" disabled>
                <div className="user-full-name-info">
                    {props.currentUser.name}
                </div>
                <div className="username-info">
                    @{props.currentUser.username}
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="profile" className="dropdown-item">
                <Link to={`/users/${props.currentUser.username}`}>Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout" className="dropdown-item">
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            overlay={dropdownMenu}
            trigger={['click']}
            getPopupContainer={() => document.getElementsByClassName('profile-menu')[0]}>
            <a className="ant-dropdown-link">
                <Icon type="user" className="nav-icon" style={{ marginRight: 0 }} /> <Icon type="down" />
            </a>
        </Dropdown>
    );
}

export default withRouter(AppHeader);