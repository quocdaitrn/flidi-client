import React, { Component } from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import './AppHeader.css';
import loginIcon from '../logo.svg';
import {AppContext}  from "../app/context";
import { Layout, Menu, Dropdown, Icon } from 'antd';
const Header = Layout.Header;


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
                        <div className="app-title" >
                            <Link to="/"><Icon type="environment" />Flidi</Link>
                        </div>
                        <Menu
                            className="app-menu"
                            mode="horizontal"
                            selectedKeys={[this.props.location.pathname]}
                            style={{ lineHeight: '64px' }} >
                            {menuItems}
                        </Menu>
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