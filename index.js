import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker, message } from 'antd';

function disabledDate(current) {
  var today = new Date();
  today.setDate(today.getDate() - 1);
  return current && (current.valueOf() < today.getTime() || current.valueOf() > Date.parse("2017-09-01"))
}
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
    }
    render() {
        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker
                    format="YYYY-MM-DD"
                    disabledDate={disabledDate}
                    onChange={value => this.handleChange(value)}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
