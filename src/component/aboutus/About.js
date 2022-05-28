import React from 'react'
import './about.scss'
const About = () => {
  return (
    <div className=' main-about'>

     <div className="abot">
        <h1>About Me........</h1>
        
       
           <h3>My technologies</h3>

           <ul>
           
           <li>react.js, redux , aos ,framer-motion ,node.js, sass</li>
           <li>figma</li>
           <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis veritatis distinctio dolorem quod numquam quos itaque exercitationem cumque corrupti unde, ipsum, voluptas odio! Aspernatur natus quo minus repudiandae nisi eaque!</li>
           <li>adipisicing elit. Corporis eaque velit ex, rem minus accusamus quasi cum officia quo ullam cumque numquam fugiat architecto facilis laboriosam libero nisi? Alias, consequuntur?</li>
        
           
          
           </ul>
           

           <h3>What can i do?</h3>

           <ul>
             <li>i'm frontend developer</li>
             <li>i'm a designer</li>
             <li>programmer</li>
              
           
           </ul>
      
     
     </div>
<a href="https://www.facebook.com/mdrisulhasan.hridoy.3/">



     <div className="img">
       
           <div className="imgbox">
              <img src={process.env.PUBLIC_URL + '/img/pic.png'} alt="" />
           </div>
           <h1>My name is raisul hasan redoy</h1>
       
     </div>
     </a>
    
    </div>
  )
}

export default About