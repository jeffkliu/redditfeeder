import React from 'react'
import '../App.css'

const BoxedContent = ({card}) => {
	return(
		<div className = 'boxed-content'>
			{card.data.url}
		</div>
	)
}

const DisplayContent = ({dict}) => {
	return(
		<div className = 'display-count'>
			{
				dict.map((each,i) => <BoxedContent key={i} card={each} />)
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
