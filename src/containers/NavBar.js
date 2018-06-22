import React from 'react'
import Home from '../components/Home'
import FeedData from './FeedData'
import { DisplayContent } from '../components/BoxedContent'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux'

const link = {
		  width: '100px',
		  padding: '12px',
		  background: 'blue',
		  textDecoration: 'none',
		  color: 'white',
		}

const NavBar = ({redditList}) => {
	return(
		<Router>
			<div className='nav-bar'>
				<NavLink style={link} to='/'>Home</NavLink>
				<NavLink style={link} to='/data'>Loaded Data</NavLink>
				<Route exact path='/' component={Home, FeedData} />
				<Route exact path='/data' render={(props)=> (<DisplayContent {...props} redditList={redditList} />)}/>
			</div>
		</Router>
	)
}

function mapStateToProps(state){
	return{redditList: state.redditList}
}
export default connect(mapStateToProps)(NavBar)