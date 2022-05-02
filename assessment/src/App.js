import React from 'react'
import BI from './backgroundImage/BI'
import Seller from './Bestseller/Seller'
import BigS from './BigShoe/BigS'
import Category from './Categories/Category'
import ECom from './ECOM/ECom'
import Featured from './Featured/Featured'
import Footer from './Footer/Footer'
import Freeship from './Freeship/Freeship'
import Itemset from './Items/Itemset'
import Latest from './Latest/Latest'
import Load from './Load/Load'
import Navbar from './NavBar/Navbar'
import Search from './Search/Search'

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <ECom/>
      <Category/>
      <BI/>
      <Seller/>
       <Itemset/><br></br>
       <Load/>
       <BigS/>
       <Freeship/>
       <Latest/>
       <Featured/>
       <Search/>
       <Footer/>
    </div>
  )
}

export default App