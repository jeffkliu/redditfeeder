import React from 'react';
import ReactLoading from 'react-loading';
 
const Example = ({ type, color }) => (
	<div className = 'example-loader'>
    	<ReactLoading type={type} color={color} height={667} width={375} />
    </div>
);
 
export default Example;