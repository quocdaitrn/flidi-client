import React,{Component} from 'react'
import PostRepository from '../../repositories/PostRepository';
import { List, Avatar, Icon,Card, Carousel } from 'antd';
import ItemPost from './Item';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `An Nguyen ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: '2018-01-12 12:20',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class PostList extends Component{
    constructor(props){
        super(props);
    }
    state = {
        
    }

    loadData(){

    }

    render(){
        return  <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        footer={<div><b>ant design</b> footer part</div>}
        renderItem={item => (
          <List.Item
          style={{ width: 550 }}
            key={item.title}
            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
          >
            <Card
                style={{ width: 550 }}
                cover={
                    <Carousel autoplay dots={true}>
                        <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                        <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                    </Carousel>
                }
            >
            </Card>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    }
}
export default PostList;