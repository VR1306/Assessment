import React from 'react'
import './BI.css'
import Product1 from './Assets/Product1.png'
import Product2 from './Assets/Product2.png'
import Product3 from './Assets/Product3.png'
import {Card} from 'react-bootstrap'


function BI() {
  return (
    <div className='BackgroundImage mt-5'>
        <div className='mt-5'>
        <label className='content1 mt-5'>
          Super Flash Sale 
        </label>
        <div>
        <label  className='content2'>50% Off</label>   
        </div>
        </div>

        <Card className='mt-5 me-5'> 
          <div className='d-flex'>

          <div>
            <img src={Product1} height='100%' width='100%'></img>
            <div className='Conforimg1'>
            <label>FS-QUILTED MAXI</label><br></br>
            <label>CROSS BAG</label>
            </div>

            <div className='Con2forimg1'>
              <div className='d-flex'> <label className='colorfor53'>$534,33</label> <label className='off ms-3'>24% Off</label></div>
            </div>
           
           <div className='Con3forimg1'>
             <label>$299,43</label>
           </div>

          </div>  



          <div>

            <img src={Product2} height='100%' width='100%'></img>

            <div className='Con1forimg2 d-flex'>
            <div  className='Conforimg2'>
            <label>FS - Nike Air Max </label><br></br>
            <label>270 React...</label>
            </div> 


            <div className='Con3forimg2 ms-4'>
             <label className='Cont2forimg2'>$299,43</label>
           </div>

            </div>

            <div className='Con2forimg2'>
              <div className='d-flex'> <label className='colorfor53'>$534,33</label> <label className='off ms-3'>24% Off</label></div>
            </div>
           
           
            
            </div>


          <div>
            
            <img src={Product3} height='100%' width='100%' className='me-5' ></img>
          
        
            <div  className='Contentforimg3'>
            <label>FS - Nike Air Max </label><br></br>
            <label>270 React...</label>

            <div className='Con3forimg3'>
              <div className='d-flex'> <label className='colorfor53'>$534,33</label> <label className='off ms-5'>24% Off</label></div>
            </div>

            </div> 


            


           

            
             <label className='Cont3forimg3'>$299,43</label>

          </div>
          </div>
          </Card>

          

        
        
        
    </div>
  )
}

export default BI