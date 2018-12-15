import React,{Component} from 'react'
import PostRepository from '../../repositories/PostRepository';
import ItemPost from './Item';
class PostList extends Component{
    constructor(props){
        super(props);
    }
    state = {
        
    }

    loadData(){

    }

    render(){
        return <div>
            <ItemPost></ItemPost>
            <ItemPost></ItemPost>
        </div>
    }
}
export default PostList;