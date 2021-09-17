import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import Avatar, { ConfigProvider } from 'react-avatar';


ReactDOM.render(

  <BrowserRouter>
  <ConfigProvider colors={['red', 'blue', 'green', 'lightblue', 'yellow', 'purple', 'pink', 'orange' ]}>
    <App />
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
