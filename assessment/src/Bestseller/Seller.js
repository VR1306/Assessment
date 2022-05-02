import React from 'react'
import './Seller.css'

function Seller() {
  return (
    <div>
        <div className='best text-center mb-3  '>
        <label> BEST SELLER</label>
        </div>

       <div className='d-flex justify-content-center '>
           <div className='All'>
               <label className='ms-5'>All</label>
           </div>

           <div className='Bags'>
               <label className='ms-5'>Bags</label>
           </div>

           <div className='Sneakers'>
               <label className='ms-5'>Sneakers</label>
           </div>

           <div className='Belt'>
               <label className='ms-5'>Belt</label>
           </div>

           <div className='Sunglasses'>
               <label className='ms-5'>Sunglasses</label>
           </div>

       </div>
        
    </div>
  )
}

export default Seller