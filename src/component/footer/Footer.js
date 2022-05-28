import React from 'react'
import './footer.scss'
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
const Footer = () => {

    const service =[

          {
              name:"our blog"
              
          },

          {
              name:"about our shop"
              
          },

          {
              name:"returns"
              
          },

          {
              name:"order history"
              
          },

          {
              name:"secure shoping"
              
          },

    ]
    const customer =[

          {
              name:"site map"
              
          },

          {
              name:"specials"
              
          },

          {
              name:"returns"
              
          },

          {
              name:"order history"
              
          },

          {
              name:"my account"
              
          },

    ]

  return (
    <div className='footer'>
    
    <div className="main">
    
  

     <div className="box1">
        <p>
        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum [...]

Address: 123 Main Street, Anytown, CA 12345 - USA.

Phone: (012) 800 456 789</p>
     </div>


     <div className="box">
         <div>
              <h1>OUR SERVICES</h1>
              {
                service.map((item)=>(
                    <p>{item.name}</p>
                ))
              }
         </div>
     </div>
     <div className="box">
         <div>
              <h1>CUSTOMER SERVICES</h1>
              {
                customer.map((item)=>(
                    <p>{item.name}</p>
                ))
              }
         </div>
     </div>


      <div className="box2">
        <h1>FOLLOW USE</h1>

        <div className='icons'>
        <FaFacebook/>
        <FaInstagram/>
        <FaLinkedinIn/>
        <FaTwitter/>
        </div>
       

      
      </div>
      </div>
      <hr/>
      <p style={{ fontSize:'15px', display:'block', textAlign:"center"}} >create by raisul</p>
    </div>
  )
}

export default Footer