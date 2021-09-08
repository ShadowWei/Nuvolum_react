import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const header = React.createElement('h1', {}, "Page Heading"); 
const para = React.createElement('p', {}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis architecto neque illum eius error, totam mollitia reiciendis officiis quis magnam?"); 

ReactDOM.render(header, document.getElementById('header_div')); 
ReactDOM.render(para, document.getElementById('paragraph_div')); 

