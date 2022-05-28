import React from 'react'
import './databar.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const Databar = () => {
AOS.init()
    const data =[
    
        {
            img:"/img/icon1.jpg",
            name:"free delevery",
            title:"Free shipping on all order"

        },
    
        {
            img:"/img/icon2.jpg",
            name:"free delevery",
            title:"Free shipping on all order"

        },
    
        {
            img:"/img/icon3.jpg",
            name:"free delevery",
            title:"Free shipping on all order"

        },
    
        {
            img:"/img/icon4.jpg",
            name:"free delevery",
            title:"Free shipping on all order"

        }


    ]


  return (
    <div  data-aos="fade-right" className='iconst'>
    
    {
        data.map((item)=>(

            <div className='box'>
            <img src={item.img} alt="" />

            <span>
              <h3>{item.name}</h3>
             <p>{item.title}</p>
            </span>
           
           </div>
        ))
    }
      
    
    </div>
  )
}

export default Databar