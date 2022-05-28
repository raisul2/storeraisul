import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './component/aboutus/About'
import Contactus from './component/contactus/Contactus'
import Databar from './component/databar/Databar'
import Footer from './component/footer/Footer'
import Hero from './component/herosectin/Hero'
import MainBLog from './component/mainBlog/MainBLog'
import Product from './component/Product/Product'
import Topba from './component/topbar/Topba'

const App = () => {
  return (
    
    <div className='App'>
       
      <Topba/>

      <Routes>
    <Route  index element={
      <div>
      <Hero/>

      <Product/>
      </div>} />

      <Route path='blog' element={<MainBLog/>}/>
      <Route path='contactus' element={<Contactus/>}/>
      <Route path='aboutus' element={<About/>}/>
      
      
      </Routes>


      
        
     <Footer/>
    
    </div>
  )
}

export default App