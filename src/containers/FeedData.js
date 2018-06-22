import React, {Component} from 'react'
import {connect} from 'react-redux'
import Home from '../components/Home'
import LoadData from '../components/LoadData'
import { getRedditPage } from '../actions/gitHubActions'
import { BoxedContent, filler, DisplayContent } from '../components/BoxedContent'


class FeedData extends Component{
	constructor(props){
		super(props)

	this.state = {
      storeFetched:[],
      search: '',
      searched: false
    }

    this.onChange=this.onChange.bind(this)
    this.onClick=this.onClick.bind(this)

	}

  onClick(ev){
    ev.preventDefault()
    fetch(`https://www.reddit.com/r/${this.state.search}/hot.json`)
        .then(response => response.json())
        .then(data => this.setState({searched: true , storeFetched: data.data.children}))
        .catch(error => console.log('error'))
    const { getRedditPage } = this.props
    getRedditPage(this.state)
  }

  onChange(ev){
    this.setState({search: ev.target.value})
  }



  	render(){
  		return(
        <div>
    			<Home searchReddit={this.state.searched?this.state.search:'Home Page'} onClick={this.onClick} onChange={this.onChange}/>
          <LoadData dict={this.state.storeFetched} />
        </div>
  		)
  	}
}

export default connect(null, { getRedditPage })(FeedData)