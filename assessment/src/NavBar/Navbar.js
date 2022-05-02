import React from 'react'
import './Navbars.css'
import { IoCaretDownOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart,AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <div className='ms-4 d-flex'>
        <div className='text1 d-flex '>
            <div className='ms-5'>
                <label>EN</label>
                <IoCaretDownOutline size='15'/>
            </div>
            <div className='ms-4'>
              <label>USD</label>
              <IoCaretDownOutline size='15'/>
            </div> 
            </div>

            
        <div className='navend d-flex me-5'>
          <div className='me-5'>
            <HiOutlineUser size='25' />
            <label className='ms-2'>My Profile</label>
          </div>

          <div className='me-5 d-flex'>
            <div className='d-flex mt-1'>
              <AiOutlineShoppingCart size='25'/>  
              <div className='round'>
                2
              </div>
              <div></div>
            </div>
            <label className='ms-4'>Items</label>
          </div>

          <div className='me-2'>
            <label className='dollar'>$0.00</label>
            <AiOutlineSearch className='ms-2'/>
          </div>
        </div> 
        </div>

        
        <div className='underlines'>
        </div>


    </div>
  )
}

export default Navbar