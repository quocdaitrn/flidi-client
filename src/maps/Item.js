/*global google*/ 
import React, {Component} from 'react';
import {Marker,InfoWindow} from "react-google-maps"
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
class  Item extends Component{
    constructor(props){
        super(props);
    }

    state = {
        visibleLabel:false
    }

    hoverMakerHandle(){
       this.setState({
            visibleLabel:true
       });
    }

    hoverOutMakerHandle(){
        this.setState({
            visibleLabel:false
       });
    }

    render(){
        console.log(this.props);
        return (
            <Marker
                position={{ lat: this.props.data.lat, lng:this.props.data.lng }}
                label={''}
                onMouseOver={()=>this.hoverMakerHandle()}
            >
                <MarkerWithLabel
                    onMouseOver={()=>this.hoverMakerHandle()}
                    onMouseOut={()=>this.hoverOutMakerHandle()}
                    visible={this.state.visibleLabel}
                    position={{ lat: this.props.data.lat, lng:this.props.data.lng}}
                    labelAnchor={new google.maps.Point(0, 0)}
                    labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
                >
                    <div>{this.props.data.name}</div>
                </MarkerWithLabel>
                {<InfoWindow>
                    <div style={{fontSize:'14px'}}>{this.props.data.name}</div>
                </InfoWindow>}
            </Marker> 
        )
    }
}
export default Item;