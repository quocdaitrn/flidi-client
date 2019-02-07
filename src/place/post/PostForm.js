import React,{Component} from 'react';
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate,Input
  } from 'antd';
import UploadPhoto from './UploadPhoto';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea;


  class PostForm extends React.Component {
    uploader = React.createRef();
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.uploader.current.handleUpload());
        return false;
        this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    normFile = (e) => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
  
    render() {
        var formLayout = 'vertical'
        const formItemLayout = formLayout === 'horizontal' ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
          wrapperCol: { span: 14, offset: 4 },
        } : null;
        const { getFieldDecorator } = this.props.form;
        console.log(getFieldDecorator);
        return (
          <div>
            <Form layout={formLayout} onSubmit={this.handleSubmit}>
              <FormItem
                label="Tiêu đề"
                {...formItemLayout}
              >
               {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Vui lòng nhập tiêu đề' }],
                })(
                    <Input placeholder="Tiêu đề" />
                )}
              </FormItem>
              <FormItem
                label="Nội dung"
                {...formItemLayout}
              >
              {getFieldDecorator('content', {
                    rules: [{ required: true, message: 'Vui lòng nhập nội dung' }],
                })(
                    <TextArea rows={5} placeholder="Cảm nghĩ của bạn về nơi này" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Đánh giá"
                >
                {getFieldDecorator('rate', {
                    initialValue: 3.5,
                })(
                    <Rate />
                )}
                </FormItem>
                <Form>
                    <UploadPhoto ref={this.uploader} action={'//jsonplaceholder.typicode.com/posts/'}></UploadPhoto>
                </Form>
              <FormItem {...buttonItemLayout}>
                <Button type="primary"  htmlType="submit"><Icon type="form" /> Đăng bài</Button>
              </FormItem>
            </Form>
          </div>
        );
      }
  }
  
  export default Form.create()(PostForm);