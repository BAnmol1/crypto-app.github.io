import React from 'react'

function Coin({name,icon,price,symbol,rank}) {
  return (
    <div className='coin'>
      <h1> Name :{name}</h1>
      <img src={icon} alt={name}/>
      <h3> Price :{price}</h3>
      <h3> Symbol :{symbol}</h3>
      <h3> Rank :{rank}</h3>
    </div>
  )
}

export default Coin