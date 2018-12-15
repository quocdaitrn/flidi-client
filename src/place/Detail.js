import React, {Component} from 'react';
import { Tabs,Layout,Card,Icon} from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import PhotoList from './photo/PhotoList';
import PostList from './post/PostList';
const TabPane = Tabs.TabPane;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);

class Detail extends Component{
    render(){
        return(
            <div className="container">
                <Layout>
                <Card
                    height={300}
                    style={{maxHeight:'400px',overflow:'hidden'}}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                >
                </Card>
                    <StickyContainer>
                        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                            <TabPane tab={<span><Icon type="info-circle" />Giới thiệu</span>} key="1" style={{ height: 200 }}>Content of Tab Pane 1</TabPane>
                            <TabPane tab={<span><Icon type="picture" />Hình ảnh</span>} key="2">
                                <PhotoList></PhotoList>
                            </TabPane>
                            <TabPane tab={<span><Icon type="message" />Bình luận</span>} key="3">
                                <PostList></PostList>
                            </TabPane>
                            <TabPane tab={<span><Icon type="environment" />Bản đồ</span>} key="4">Content of Tab Pane 3</TabPane>
                        </Tabs>
                    </StickyContainer>
                </Layout>
            </div>
        )
    }
}

export default Detail;