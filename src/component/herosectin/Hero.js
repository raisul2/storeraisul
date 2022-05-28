import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

// Import Swiper React components
import {FaRegArrowAltCircleDown, FaBuffer} from 'react-icons/fa'
import './hero.scss'

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Databar from '../databar/Databar';




const data = [

    
  {
    img:"/img/banner41.jpg"
  },
    
  {
    img:"/img/banner42.jpg"
  },
    
  {
    img:"/img/banner43.jpg"
  }

]




   




const Hero = () => {



  const [categ, setCateg] = useState(true)



   AOS.init();


  return (
      <div className='main'>
      <div className='hero-section'>
      
      <div  data-aos="fade-up" className="left">
      
       <div className='title'>

         <span> <FaBuffer/> all category </span>

         <FaRegArrowAltCircleDown onClick={()=>setCateg(!categ)} />
       </div>

{
  categ &&  <Category/>
}
      
         
      
      </div>
 
      <div  data-aos="fade-up" className="middles">
        <img src={process.env.PUBLIC_URL + '/img/banner41.jpg'} alt="" />
      </div>
 
      
     
      <div  data-aos="zoom-in-up" className="right">
      
        <div  className='ti'>
          daly deals
        </div>
        
        <div className="div">
        <img src={process.env.PUBLIC_URL + '/img/phone1.jpg'} alt="" />
        
        <Time/>

        <p>impulse Ducffle</p>
        
        <h3>$70.00</h3>
        
        </div>
      </div>
      
      </div>

      <Databar   />

      </div>
  )
}

export default Hero






function Category() {
  

   const categorydata =[

    {
      name:"coumputer",
    },
    {
      name:"camera",
    },
    {
      name:"smartPhone",
    },
    {
      name:"destop",
    },
    {
      name:"tablet",
    },
    {
      name:"electtronic",
    },
    {
      name:"booxs",
    },
    {
      name:"sports",
    },

   ]


  return(
  
    <div className="category">
       
    {
      categorydata.map((item)=>(
        <p>{item.name}</p>
      ))
    }
    
    </div>
  )

}




function Time() {
  
   const [timeDays, setTimeDays] = useState()
   const [timeHours, setTimeHours] = useState()
   const [timeMin, setTimeMin] = useState()
   const [timeSec, setTimeSec] = useState()

   let interval;

   const startTimer =()=>{

     const counDownData = new Date("Novembar 30, 2022").getTime()

     interval=setInterval(()=>{
       const now = new Date().getTime()

        const distance = counDownData - now

        const days = Math.floor(distance /(24 * 60* 60 * 1000))
        const hour = Math.floor(distance %(24 * 60 * 60 * 1000)/(1000*60*60))
        const min = Math.floor(distance % (60 * 60 * 1000) / (60 * 1000))
        const sec = Math.floor(distance % (60 * 1000) / 1000)

        if (distance<0) {
             clearInterval(interval.current)
        }else{
          setTimeDays(days)
          setTimeHours(hour)
          setTimeMin(min)
          setTimeSec(sec)
        }
        


     })

   }

   useEffect(() => {
     
   
    startTimer()


   })
   

  return(

     <div className="app">
       
     <Clock
      timeDays={timeDays}
      timeHours={timeHours}
       timeMin={timeMin}
       timeSec={timeSec}
     
     />
     
     </div>


  )

}


function Clock({timeDays,timeHours,timeMin,timeSec}) {
  
  return (
     <div className="timer">
       
        <h1 className="time">{timeDays}</h1>
        <h1 className="time">{timeHours}</h1>
        <h1 className="time">{timeMin}</h1>
        <h1 className="time">{timeSec}</h1>
        
     </div>
  )

}



