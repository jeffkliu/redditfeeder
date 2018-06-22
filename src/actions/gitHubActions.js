import React from 'react'
import FeedData from '../containers/FeedData'

export function getGitHubList(){
	let hold=[{commit:{message:'hi'}},{commit:{message:'hi1'}},{commit:{message:'hi2'}},{commit:{message:'hi3'}}];

	return {type: 'GET_GITHUB_LIST', payload: hold}
}


export function getRedditPage(list){

	let hold=[{commit:{message:'hi'}},{commit:{message:'hi1'}},{commit:{message:'hi2'}},{commit:{message:'hi3'}}];

	return{type: 'GET_REDDIT_PAGE', payload: list}
}