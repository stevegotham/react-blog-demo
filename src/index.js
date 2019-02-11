import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from './axios';

axios.interceptors.request.use(request => {
  console.log('request: ', request);
  return request;
}, error => {
  console.log('error: ', error);
  return Promise.reject(error);
});
axios.interceptors.response.use(response => {
  console.log('response: ', response);
  return response;
}, error => {
  console.log('error: ', error);
  return Promise.reject(error);
});

// TO REMOVE INTECEPTORS STORE THEM IN A VARIABLE AND CALL axios.interceptors.[request] OR [response].eject(myRequestInterceptor);
// SEE https://github.com/axios/axios#interceptors
// 
// const myRequestInterceptor = axios.interceptors.request.use(request => {
//   console.log('request: ', request);
//   return request;
// }, error => {
//   console.log('error: ', error);
//   return Promise.reject(error);
// });
// axios.interceptors.request.eject(myRequestInterceptor);
// 
// const myResponseInterceptor = axios.interceptors.response.use(response => {
//   console.log('response: ', response);
//   return response;
// }, error => {
//   console.log('error: ', error);
//   return Promise.reject(error);
// });
// axios.interceptors.response.eject(myResponseInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
