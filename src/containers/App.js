import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ReactLoading from 'react-loading';
import {connect} from 'react-redux';
import FeedData from './FeedData'
import Home from '../components/Home'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from './NavBar'


class App extends Component {

  constructor(props){
    super(props)
  }

  searchReddit(ev){
    ev.preventDefault()
    console.log(ev)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <NavBar />
          <ReactLoading id='loading' type='spin' color='#fffff' />
        </div>
      </ Router>
    );
  }
}

function mapStateToProps(state) {
  return {githubList: state.githubList}
}

const connector = connect(mapStateToProps)
const connectedComponent = connector(App)
 
export default connectedComponent;
