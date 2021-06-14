import React from 'react';
import './index.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';

const columns = [
    {
      title: '設備類型',
      dataIndex: 'equiptype',
      
    },
    {
      title: '設備編號',
      dataIndex: 'equipno',
     
    },
    {
      title: '警報類型',
      dataIndex: 'alerttype',
      
    },
    {
      title: '警報次數',
      dataIndex: 'alerttimes',
      
    },
    {
      title: '警報總時間',
      dataIndex: 'alerttotaltime',
      
    }
];
const data = [
    {
      equiptype: 'test',
      equipno: 'test',
      alerttype: 'test',
      alerttimes: 'test',
      alerttotaltime:'test'
    },
    {
      equiptype: 'test',
      equipno: 'test',
      alerttype: 'test',
      alerttimes: 'test',
      alerttotaltime:'test'
    },
    {
      equiptype: 'test',
      equipno: 'test',
      alerttype: 'test',
      alerttimes: 'test',
      alerttotaltime:'test'
    },
    {
      equiptype: 'test',
      equipno: 'test',
      alerttype: 'test',
      alerttimes: 'test',
      alerttotaltime:'test'
    },
];

class AlertTable extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
      return (
        <Table
            pagination={false}
            columns={columns}
            dataSource={data}
        />
      );
    }
}



export default AlertTable