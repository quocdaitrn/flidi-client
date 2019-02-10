import React,{Component} from 'react'
import PostRepository from '../../repositories/PostRepository';
import { List, Avatar, Icon,Card, Carousel } from 'antd';
import { getAvatarColor } from '../../util/Colors';
import ItemPost from './Item';
import './Post.css';
/*const listData = [];
listData.push({
	href: '#',
	title: `An Nguyen`,
	avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
	description: '2018-01-12 12:20',
	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjs49pcEPvxA9eCcex-SzWWDGeAywZON29j2ejwbLO3DHo6ZmBxg',
	content: 'Với sân đỗ trực thăng độc đáo cùng nhiều văn phòng, khu mua sắm, vui chơi giải trí hiện đại, tòa tháp Bitexco là một trong những biểu tượng của TP HCM sau 40 năm giải phóng.Tọa lạc tại quận 1, tháp tài chính Bitexco nằm ở "trái tim" thành phố, biểu thị cho sự hiện đại, năng động và hội nhập của Sài Gòn',
});

listData.push({
	href: '#',
	title: `Dai Tran`,
	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhif7oo6UwnBf1c8x-OwPG90rPfVBUHR2grxF1OoLRRmBfS0-j',
	avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
	description: '2017-02-10 12:20',
	content: 'Tòa nhà Bitexco gồm 68 tầng lầu và 3 tầng hầm, tổng chiều cao là 262m. Bên trong tòa nhà bao gồm nhiều khu như văn phòng, khu nhà hàng, khu trung tâm mua sắm, khu thực phẩm, rạp chiếu phim, khu vui chơi giải trí v.v..giá dịch vụ cũng khá đắt đỏ nhưng hợp lý và khách tham quan cần tuân thủ một số qui định của tòa nhà',
});*/

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
			listData:[]
        }
        componentDidMount(){
            this.loadData();
        }

		loadData(){
            PostRepository.getList(this.props.location_id)
            .then(res=>{
                console.log(res);
                this.setState({
                    listData:res.data.items
                });
            })
            .catch(err=>{
                console.log(err);
            })
		}

		render(){
				return  <List
				itemLayout="vertical"
				size="large"
				dataSource={this.state.listData}
				renderItem={item => (
					<List.Item
					style={{ width: 550,marginTop:20 }}
						key={item.title}
						actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
					>
						<Card 
							style={{ width: 550 }}
							cover={
								<Carousel autoplay style={{height:600}}>
                                    {
                                        item.image.map(function(img_src){
                                            return <img src={img_src} />
                                        })
                                    }
								</Carousel>
							}
						>
						</Card>
						<List.Item.Meta
							avatar={<Avatar size={'large'} style={{ backgroundColor: getAvatarColor(item.user.first_name[0].toUpperCase()) }}>
                            {item.user.first_name[0].toUpperCase()}
                        </Avatar>}
							title={<a href={item.href}>{item.user.first_name + ' '+item.user.last_name}</a>}
							description={item.created_at_str}
						/>
						<div style={{marginTop:'10px'}}>
                            <h6>{item.blog_title}</h6>
                            <p>{item.detail}</p>
                        </div>
					</List.Item>
				)}
			/>
		}
}
export default PostList;