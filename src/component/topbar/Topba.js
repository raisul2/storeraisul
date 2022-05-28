import React, { useState } from 'react'
import { option1, option2, option3 } from '../Datadami'
import {ImMenu, ImCross} from 'react-icons/im'
import {FaSearch, FaStar, FaShoppingBasket} from 'react-icons/fa'
import './topbar.scss'
import { Link } from 'react-router-dom'
const Topba = () => {

  

  return (
    <div className='main-top'>
          <div className="top">
          <div className='langu'>
          <span>
       
          <Option option={option1} />
          </span>
          <span>
         
          <Option option={option2} />
          </span>
          </div>


            <div className='setting'>
                <p> Ordered before 17:30, shipped today - Support: (012) 800 456 789</p>

                <p> trac your order</p>
                <Option option={option3} />
            </div>

          </div> 
         <hr />

         <Middle/>

         
         <Navbar/>
     
        
          
           
    </div>
  )
}

export default Topba



function Option({option}) {
 

    return(

        <select id = "country">
        {
            option.map((item)=>(

                <option value ={item.name}>{item.name}</option>
            ))
        }
        </select>
        )

}


function Middle() {
       
      return(

         <div className="middle">
            
            <div className="logo">
              <svg viewBox='0 0 1800 400'>
                <text x="0%" y="100%" fill="transparent" 
                 >raisul</text>
              
              </svg>
            </div>

            <div className="search">
              <input type="text" name="" id="" />
           <span>
           <FaSearch/>
           </span>
            </div>

            <div className="icons">
             
            <span>
            <FaStar/>
            </span>
            <span>
            <FaShoppingBasket/>
            </span>
          
            </div>
         
         </div>

      )


}



function Navbar() {
     
     const [nav, setNav] = useState(false)
     

     const menu =  <ImMenu onClick={()=>setNav(true)} />

     const cros =  <ImCross onClick={()=>setNav(false)} />




       
 const [isnavs, setIsNavs] = useState(false)

 let lastKnownScrollPosition = 0;
 let ticking = false;
 
 function doSomething(scrollPos) {
     
     if (scrollPos > 200) {
         setIsNavs(true)
        } else if(scrollPos < 100){
            setIsNavs(false)
            
            
     }
 }
 
 document.addEventListener('scroll', function(e) {
   lastKnownScrollPosition = window.scrollY;
 
   if (!ticking) {
     window.requestAnimationFrame(function() {
       doSomething(lastKnownScrollPosition);
       ticking = false;
     });
 
     ticking = true;
   }
 });
  




     return(

          <div className={isnavs ? 'navba  active ' : 'navba '  }>
           <div className="mobile">
           <Links/>
           </div>

           <div className="mobile-m">
               
            {
                nav ? cros : menu
            }
             

           {
               nav && <div className="box">
               <Links/>
               </div>
           }

             
           
           </div>
             
          </div>

     )


}


function Links() {
    

    const linkdata  = [
        {
            name:"home",
            link:""
        },
        {
            name:"blog",
            link:"blog"
        },
        {
            name:"contact us",
            link:"contactus"
        },
        {
            name:"about us",
            link:"aboutus"
        },
    ]
    return(
        <>
        {
            linkdata.map((item)=>(
                <ul className="ul">
                <li><Link to={item.link}>{item.name}</Link></li>
                </ul>
                ))
            }
       </>
    )

}