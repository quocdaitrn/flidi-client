import React,  {Component} from 'react';
import { GoogleMap,withGoogleMap,withScriptjs} from "react-google-maps"
import Item from './Item';
import {GOOGLE_MAPS_API_KEY} from '../constants/index';
import { Layout, Menu, Icon } from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;

class Maps extends Component{
    constructor(props){
        super(props);
    }
    state = {
        collapsed: false,
        items:[
            {
                name:'Duc Ba Church',
                lat:-34.297,
                lng:150.844,
                thumb:''
            },
            {
                name:'Bitexco',
                lat:-34.397,
                lng:150.644,
                thumb:''
            }
        ]
    }

    toggleSidebar = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }

    render(){
        const MyMapComponent = withScriptjs(withGoogleMap(props => {
            return <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
            {this.state.items.map(function(item){
                return <Item data={item}> </Item>
            })}
            </GoogleMap>
          }))
        
        return (
            <Layout>
                <Sider width={300} style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
            borderTop:1,backgroundColor:'#666'
            }}
            trigger={null}
          collapsible
          collapsed={this.state.collapsed}
            >
            <Menu theme="dark" style={{backgroundColor:'#666'}} mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
                </Menu.Item>
                <Menu.Item key="4">
                <Icon type="bar-chart" />
                <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="5">
                <Icon type="cloud-o" />
                <span className="nav-text">nav 5</span>
                </Menu.Item>
                <Menu.Item key="6">
                <Icon type="appstore-o" />
                <span className="nav-text">nav 6</span>
                </Menu.Item>
                <Menu.Item key="7">
                <Icon type="team" />
                <span className="nav-text">nav 7</span>
                </Menu.Item>
                <Menu.Item key="8">
                <Icon type="shop" />
                <span className="nav-text">nav 8</span>
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout style={{ marginLeft:300 }}>
            
            <MyMapComponent
                isMarkerShown
                googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+GOOGLE_MAPS_API_KEY+"&v=3.exp&libraries=geometry,drawing,places"}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `800px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
                </Layout>
                </Layout>
        );

    }
}
export default Maps;