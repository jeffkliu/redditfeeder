import React from 'react'
import Home from '../components/Home'
import FeedData from './FeedData'
import { BoxedContent, filler } from '../components/BoxedContent'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import '../App.css';

const link = {
		  width: '100px',
		  padding: '12px',
		  background: 'blue',
		  textDecoration: 'none',
		  color: 'white',
		}

const NavBar = () => {
	return(
		<Router>
			<div className='nav-bar'>
				<NavLink style={link} to='/'>Home</NavLink>
				<NavLink style={link} to='/data'>Loaded Data</NavLink>
				<Route exact path='/' component={Home,FeedData} />
				<Route exact path='/data' component={filler}/>
			</div>
		</Router>
	)
}

export default NavBar