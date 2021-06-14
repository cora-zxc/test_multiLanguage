import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input, Space } from 'antd';
// import { FormattedMessage, IntlProvider } from "react-intl";
// import { useState, useEffect } from 'react';

const { Search } = Input;
const onSearch = value => console.log(value);
// //
// const [lang, setLang] = useState('en')
// const [locale, setLocale] = useState(undefined)

// useEffect(async() => {
//   const resp = await fetch(`./lang/${lang}.json`)
//   const data = await resp.json()
//   setLocale(data)
// },[lang])
//

class Searchbox extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
      return (
        <div>
          <Space>
              <Search 
                  placeholder="關鍵字搜尋" 
                  allowClear
                  onSearch={onSearch} 
                  style={{ width: 180 }} 
              />
          </Space>
          
          {/* <select
            value={lang}
            onChange={(evt) => {
              setLang(evt.target.value);
            }}
          >
            <option value="en">English</option>
            <option value="cn">中文</option>
            <option value="fr">Français</option>
            <option value="jp">日本語</option>
          </select> */}
        </div>
      );
    }
}

export default Searchbox