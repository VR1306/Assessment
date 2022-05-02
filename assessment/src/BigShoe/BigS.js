import React from 'react'
import BigShoe from './Assets/BigShoe.png'
import './BigS.css'

function BigS() {
  return (
    <div className='padblue row'>
        <div className='col-5'>
        <div className='Adidas'>
       
            <label>Adidas Men Running </label><br></br>
            <label>Sneakers</label>
        </div>
        
        <div className='design'>
        <label>Performance and design. Taken right to the edge. </label><br></br>
        </div>

        <div className='Shop'>
            <label> Shop Now</label>
            <div className='underline'></div>
        </div>
    </div>

    <div  className='col-6'><img src={BigShoe} className='Shoe'></img></div>

    </div>
  )
}

export default BigS