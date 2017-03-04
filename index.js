import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';

function disabledDate(current) {
  var today = new Date();
  today.setDate(today.getDate() - 1);
  return current && (current.valueOf() < today.getTime() || current.valueOf() > Date.parse("2017-08-31"))
}
function App() {
  return (
    <div style={{ margin: 200 }}>
      <DatePicker
          format="YYYY-MM-DD"
          disabledDate={disabledDate}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
