import React from 'react'
import  './contact.scss'
const Contactus = () => {

    const data = [

        {
            name:"name"
        },

        {
            name:"email"
        },

        {
            name:"Number"
        },

     

    ]


  return (
      <div className="main-contact">
      
      
 
    <div className='contactuse'>


    <div className="contact-titile">
       <h1>CONTACT US</h1>

       </div>
       
       <hr />
    <div className="contact-input">
    
    {
        data.map((item)=>(

            <div className="wrap">
              <label htmlFor="">{item.name}</label>
            <input type="text" />
            </div>
        ))
    }
    

    <div className="wrap">
    <label htmlFor="">message</label>
    <textarea name="" id=""  rows="10"></textarea>
  </div>
  
  </div>
  
  
  <button>SEND  </button>
    

    
    </div>
    </div>
  )
}

export default Contactus