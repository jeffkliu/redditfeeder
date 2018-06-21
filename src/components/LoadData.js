import React from 'react'

const LoadData = ({dict}) => {
	return(
		<div className='feeddata'>
  			<ul>
  				{dict.map(
  					(r,i) => <li key={i}>{r.data.title}</li>
  				)}
  			</ul>
  		</div>
  	)
}

export default LoadData