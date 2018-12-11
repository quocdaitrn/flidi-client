import React,  {Component} from 'react';
import { GoogleMap,withGoogleMap,withScriptjs} from "react-google-maps"
import Item from './Item';
import SidebarItem from './SidebarItem';
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
                id:1,
                lat:-34.297,
                lng:150.844,
                des:'Duc Ba Church description',
                thumb:'https://giothanhle.net/wp-content/uploads/2016/02/duc-ba-church-3-1170x738.jpg',
                rating:3.5,
                address:'01 Công xã Paris, Bến Nghé, Quận 1, Hồ Chí Minh'
            },
            {
                name:'Bitexco Building',
                id:2,
                lat:-34.397,
                lng:150.644,
                des:'Bitexco Building description',
                thumb:'http://vn.savills.com.vn/_images/bitexco-financial-tower-4(2).jpg',
                rating:4.6,
                address:'2 Hải Triều, Bến Nghé, Hồ Chí Minh'
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
            {this.state.items.map(function(item,key){
                return <Item key={key} data={item}> </Item>
            })}
            </GoogleMap>
          }))
        
        return (
            <Layout>
                <Sider width={400} style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
            borderTop:1,
            backgroundColor:'#e7eaec'
            }}
            trigger={null}
          collapsible
          collapsed={this.state.collapsed}
            >
            <Menu theme="dark" style={{backgroundColor:'#e7eaec'}} mode="inline" defaultSelectedKeys={['4']}>
                {this.state.items.map(function(item,key){
                    return <SidebarItem data={item} key={key}></SidebarItem>
                })}
            </Menu>
            </Sider>
            <Layout style={{ marginLeft:400 }}>
            
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