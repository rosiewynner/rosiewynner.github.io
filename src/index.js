require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const appElement = document.getElementById('app');

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, appElement);