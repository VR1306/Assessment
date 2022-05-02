import React from 'react'
import logo from './Assets/logo.jpg'
import './ECom.css'


function ECom() {
  return (
  <div className='mt-5'>
    <div className='ms-3 mt-3 d-flex justify-content-between'>
      <div>
      <img src={logo} width='50' height='50' className='ms-5'></img>
      <label className='word1 ms-2'>E-Comm </label>
      </div>
    

    <div>
      <div className='d-flex headings me-5'>
        <div className='me-5'>
          <label className='hovering'>HOME</label>
        </div>

        <div className='me-5'>
          <label className='hovering'>BAGS</label>
        </div>

        <div className='me-5'>
          <label className='hovering'>SNEAKERS</label>
        </div>

        <div className='me-5'>
          <label className='hovering'>BELT</label>
        </div>

        <div className='me-5'>
          <label className='hovering'>CONTACT</label>
        </div>
      </div>
    </div>





    </div>
  </div>





  )
}

export default ECom