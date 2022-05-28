import React, { useState } from 'react'
import './product.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import {FaStar} from 'react-icons/fa'





 function Star() {


 const start = Array(5).fill(0)

 const [value, setValue] = useState(3)

 const [hover, setHover] = useState()

 const handleClick = (value) =>{
    
    setValue(value)

 }

 const handleMouseOver = (value)=>{
     setHover(value)

 }


 const MouseLave =() =>{
     setHover(undefined)
 }

      
      return(
        <div>
        
         {
             start.map((item, index)=>(
                 <FaStar
                  
                   key={index}
                   size={15}
                   style={{marginLeft:10, cursor:'pointer'}}

                   color={(hover || value ) > index ?  'orange' : 'gray' }
                   onClick={()=>handleClick(index +1)}
                     onMouseOver={()=> handleMouseOver(index +1)}
                     onMouseLeave={MouseLave}
                     
                 />
             ))
         }

            

        </div>
            )

 }







const Product = () => {

    const data = [
  
         {
             img:"/img/banner1.jpg"
         },
  
         {
             img:"/img/banner2.jpg"
         },
  
         {
             img:"/img/banner3.jpg"
         },

    ]
    AOS.init()
  return (

    <>
    <div className='product'>
    
    {
        data.map((item)=>(
           
            <div data-aos="fade-down"   className="box">
            
            <img  src={process.env.PUBLIC_URL + item.img} alt="" />
            </div>
            
            
            
            ))
        }
        
        
        
        </div>

     
          <div className="computer">
            <div className='title'> 
            
             <h3>COMPUTER & LAPTOP</h3>
               
            </div>

            <div className="pbox">
             
            <Prd/>
            
            </div>
            
          </div>

            <div className="banner">
            
               <img src={process.env.PUBLIC_URL + '/img/banner34.jpg'} alt="" />
            </div>

          <div className="all">
          <div className='title'> 
            
             <h3>ALL PRODUCTS</h3>
               
            </div>
            <div className="pbox">
            <Prdx/>
            </div>
          
          </div>

          <div className="all">
          <div className='title'> 
            
             <h3>FROM OUR BLOG</h3>
            </div>


            
            <div className="pbox">
            <Blog/>
            </div>
             
           
          
          </div>

        </>
        )
    }
    
    export default Product




    function Blog() {


     const data = [

        {
            img:"/img/blog1.jpg",
            title:"Lesbian Sex Stories Of Hollywood’s",
            date:"06 October 2017",
            p:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim."
        },
        {
            img:"/img/blog2.jpg",
            title:"Lesbian Sex Stories Of Hollywood’s",
            date:"06 October 2017",
            p:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim."
        },
     
      
     
     
     ]


        return(
            <>
            {
                data.map((item)=>(
                    <div className="blogbox">
                    <div className="imgb">
                    <img src={process.env.PUBLIC_URL + item.img}/>
                    </div>
                      
                      <div className="text">
                 
                        <h3>{item.title}</h3>
                        <p>{item.date}</p>
                        <p>{item.p}</p>
                      </div>
                      
                    
                    </div>
                ))
            }
               
            
            </>
        )


    }
  









function Prd() {


    const data =[


          {
              img:"/img/p1.jpg",
              name:"mh01-black",
              price:"5.00"
          },

          {
              img:"/img/p2.jpg",
              name:"mh01-black",
              price:"5.00"
          },

          {
              img:"/img/p3.jpg",
              name:"mh01-black",
              price:"5.00"
          },

          {
              img:"/img/p4.jpg",
              name:"mh01-black",
              price:"5.00"
          },

          {
              img:"/img/p5.jpg",
              name:"mh01-black",
              price:"5.00"
          },

    ]



     return(
<>
{
    data.map((item)=>(
        <div data-aos="fade-up" className="prd">
        <img src={process.env.PUBLIC_URL + item.img} alt="" />
        <Star/>
         <h1>{item.name}</h1>
         <h3>{item.price}</h3>
        
        
        </div>
        ))
    }
    
</> 
       

     )
    
}
function Prdx() {


    const data =[


          {
              img:"/img/p1.jpg",
              name:"mh01-black",
              price:"5.00"
          },

          {
              img:"/img/p2.jpg",
              name:"mh01-black",
              price:"5.00"
          },

          {
              img:"/img/p3.jpg",
              name:"mh01-black",
              price:"5.00"
          },

          {
              img:"/img/p4.jpg",
              name:"mh01-black",
              price:"5.00"
          },

          {
              img:"/img/p5.jpg",
              name:"mh01-black",
              price:"5.00"
          },
          {
              img:"/img/p6.jpg",
              name:"mh01-black",
              price:"5.00"
          },
          {
              img:"/img/p7.jpg",
              name:"mh01-black",
              price:"5.00"
          },
          {
              img:"/img/p8.jpg",
              name:"mh01-black",
              price:"5.00"
          },
          {
              img:"/img/p11.jpg",
              name:"mh01-black",
              price:"5.00"
          },
          {
              img:"/img/p10.jpg",
              name:"mh01-black",
              price:"5.00"
          },
          {
              img:"/img/p12.jpg",
              name:"mh01-black",
              price:"5.00"
          },
          {
              img:"/img/p13.jpg",
              name:"mh01-black",
              price:"5.00"
          },

    ]



     return(
<>
{
    data.map((item)=>(
        <div data-aos="fade-up" className="prd">
        <img src={ process.env.PUBLIC_URL + item.img} alt="" />
        <Star/>
         <h1>{item.name}</h1>
         <h3>{item.price}</h3>
        
        
        </div>
        ))
    }
    
</>
       

     )
    
}