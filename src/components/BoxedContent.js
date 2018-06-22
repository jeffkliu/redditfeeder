import React from 'react'
import '../App.css'
import { connect } from 'react-redux'

export const BoxedContent = ({card}) => {
	return(
		<div className = 'boxed-content'>
			{card.data.url}
		</div>
	)
}

export const DisplayContent = ({redditList}) => {
	return(
		<div className = 'display-count'>
			{
				redditList.searched ? redditList.storeFetched.map((r,i)=> <BoxedContent key={i} card={r} /> ) : null 
			}
		</div>
	)
}

export const filler = () => {
	return(
		<div className = 'boxed-content'>
			Filler. Nothing to see here.
		</div>
	)
}

const mapStateToProps = (state,myOwnProps) => {
	return { redditList: state.redditList }
}

 
export default connect(mapStateToProps)(DisplayContent);

