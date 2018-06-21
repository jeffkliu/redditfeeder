export default function gitHubListReducer(state=[], action){
	switch (action.type){
		case 'GET_GITHUB_LIST':
			return action.payload
		case 'GET_REDDIT_PAGE':
			return action.payload
		default:
			return state
	}
}