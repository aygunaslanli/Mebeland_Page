import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './myredux/store/configureStore';
import { addBlog, editBlog, removeBlog,getBlogsFromDatabase } from './myredux/actions/blogaction';
import { store } from './features/store';




const mystore = configureStore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={mystore}>
  <AppRouter />
  </Provider>
  </React.StrictMode>
);