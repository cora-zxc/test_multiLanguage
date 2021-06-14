import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { DatePicker, Space, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const { RangePicker } = DatePicker;

class PickDate extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
      return (
        <Space size={12}>
            <RangePicker />
            <Button icon={<SearchOutlined />}></Button>
        </Space>
      );
    }
};
export default PickDate