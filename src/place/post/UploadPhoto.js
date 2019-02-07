import React,{Component} from 'react'
import { Upload, Icon, Modal } from 'antd';
import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../config';
console.log(FIREBASE_CONFIG);
firebase.initializeApp(FIREBASE_CONFIG);
const storage = firebase.storage();
class UploadPhoto extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleUpload(){
    const { fileList } = this.state;
    console.log(fileList);
    /*var storageRef = storage.ref('posts');
	var ref = storageRef.child('mountains.jpg');
	ref.put(file).then(function(snapshot) {
		console.log(snapshot);
    });
    */
	return false;
  }
  uploadFile(file,fileList){
      this.setState(state => ({
        fileList: [...state.fileList, file],
      }));
      console.log(this.state.fileList);
      return false;
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="camera" />
        <div className="ant-upload-text">Hình ảnh</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          listType="picture-card"
		  fileList={fileList}
		  beforeUpload={this.uploadFile.bind(this)}
		  multiple={true}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default UploadPhoto;