import React from 'react'
import { Card } from 'react-bootstrap'
import './Category.css'

function Category() {
  return (
    <div>
        <div className='cards'>
            <div className='d-flex justify-content-evenly '>
                <div>
                    <div>
                    <label className='Category mt-5'>Category</label>

                    <div className='d-flex catlog'>
                    <div>
                        <label className='mt-3'>Coporate Shoes </label><br></br>
                        <label className='mt-3'> Sneakers</label><br></br>
                        <label className='mt-3'>Sandals </label><br></br>
                        <label className='mt-3'> Sport Shoe</label><br></br>
                        <label className='mt-3'>Trainers</label>
                        </div>
                        <div className='ms-5'>
                        <label className='mt-3'>Coporate  Shoes</label><br></br>
                        <label className='mt-3'> Sneakers</label><br></br>
                        <label className='mt-3'>Sandals </label><br></br>
                        <label className='mt-3'> Sport Shoe</label><br></br>
                        <label className='mt-3'>Trainers</label>
                        </div>
                    </div>
                    </div>
                </div>

                <div>
                    <label className='Category  mt-5'>Category</label>



                    <div className='d-flex catlog'>

                    <div>
                        <label className='mt-3'>HOT DEAL  </label><br></br>
                        <label className='mt-3'>Sunglasses</label><br></br>
                        <label className='mt-3'>Belts </label><br></br>
                        <label className='mt-3'>Handbags</label><br></br>
                        <label className='mt-3'>Sneakers</label>
                        </div>

                        <div className='ms-5'>
                        <label className='mt-3'>HOT DEAL  </label><br></br>
                        <label className='mt-3'>Sunglasses</label><br></br>
                        <label className='mt-3'>Belts </label><br></br>
                        <label className='mt-3'>Handbags</label><br></br>
                        <label className='mt-3'>Sneakers</label>
                        </div>
                        </div>

                    
                </div>

                <div>
                    <label className='Category ms-5  mt-5'>Category</label>

                    <div className='ms-5 catlog'>
                        <label className='mt-3'>Coporate  Shoes</label><br></br>
                        <label className='mt-3'> Sneakers</label><br></br>
                        <label className='mt-3'>Sandals </label><br></br>
                        <label className='mt-3'> Sport Shoe</label><br></br>
                        <label className='mt-3'>Trainers</label>
                        </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Category