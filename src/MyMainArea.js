import React from 'react';
import './index.css';
import Searchbox from './Searchbox';
import Table from './Table';
import DatePicker from './DatePicker';

class MyMainArea extends React.Component {
    constructor(props){
      super(props);
      this.state={
      }
    }
    render() {
      return (
        <div className="mainarea">
            <div>
                <span>日期區間 : <DatePicker /></span>
                <span style={{float:'right'}}><Searchbox /></span>
            </div>
            <div><Table /></div>
        </div>
      );
    }
  }
export default MyMainArea