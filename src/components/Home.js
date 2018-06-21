import React, {Component} from 'react'
import '../App.css';
import { connect } from 'react-redux'


const Home = ({searchReddit, onClick, onChange}) => {
	return(
		<div className='home-page'>
			This is the {searchReddit} <br/>
			<input onChange={onChange}/>
			<input type='button' value="Search Reddit" onClick={onClick}/>
		</div>
	)
}

export default Home