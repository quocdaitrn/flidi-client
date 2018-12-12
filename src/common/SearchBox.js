import React,{Component} from 'react';
import ProvinceRepository from '../repositories/ProvinceRepository';
import {Input,Select} from 'antd';
import {
    withRouter
} from 'react-router-dom'

const Search = Input.Search;
const Option = Select.Option;
const ProvinceList = ProvinceRepository.List;

  
class SearchBox extends Component{
    position = 'header';
    selectAfter = (
        <Select onChange={(val)=>{this.setState({province_id:val})}} defaultValue="Hồ Chí Minh" style={{ width: 124 }}>
            {ProvinceList.map((item,key)=>{
                return <Option key={key} value={item.id}>{item.name}</Option>
            })}
        </Select>
    );
    constructor(props){
        super(props);
        console.log(this.props.match.params)
    }
    state = {
        province_id:1
    }

    handleSearch(keyword){
        var params = {
            keyword:keyword,
            pid:this.state.province_id
        };
        var search_url =  '/maps?'+Object.keys(params).map(key => key + '=' + params[key]).join('&');
        this.props.history.push(search_url);
    }

    render(){
        if(this.props.position=='banner'){
            return (<Search
                size={'large'}
                placeholder="Bạn muốn đi đâu?"
                onSearch={value => this.handleSearch(value)}
                enterButton="Tìm kiếm"
                className={'search-home'}
                style={{display:'inline-block',verticalAlign:'middle'}}
                addonBefore={this.selectAfter}
            />
        )
        }
        else{
            return (<Search
                placeholder="Bạn muốn đi đâu?"
                onSearch={value => this.handleSearch(value)}
                enterButton
                className={'search-home'}
                style={{display:'inline-block',verticalAlign:'middle'}}
                addonBefore={this.selectAfter}
            />
        )
        }
    }
}
export default withRouter(SearchBox)