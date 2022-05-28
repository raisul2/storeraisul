import React from 'react'
import './blgm.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const MainBLog = () => {
  return (
    <div className='main-blog'>
      
    <div className="lefts">
    <Blog/>
    </div>
    
    <div className="rights">
    
     <div className="rbox">
       <div className="inputs">
       
        <input type="text" />
        <p>SEARCH</p>
       </div>
        
       <div className="pbox">
           <h3>RECENT POST</h3>
             <p>Lesbian Sex Stories Of Hollywood’s</p>
             <p>Lesbian Sex Stories Of </p>
             <p>Lesbian Sex Stories Of Hollywood’s</p>
             <p>Lesbian Sex Stories Of </p>
           
       </div>

       <div className="archive">
         <h3>ARCHIVE</h3>
         <p>October 2017</p>
         <p>October 2017</p>
       </div>
     
     </div>
    
    </div>
    
    
    </div>
  )
}

export default MainBLog




function Blog() {
    

    const data = [
        {
            img:'/img/blog1.jpg',
            title:"Lesbian Sex Stories Of Hollywood’s",
            p:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim.'
        },
        {
            img:'/img/blog1.jpg',
            title:"Lesbian Sex Stories Of Hollywood’s",
            p:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim.'
        },
        {
            img:'/img/blog2.jpg',
            title:"Lesbian Sex Stories Of Hollywood’s",
            p:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim.'
        },
        {
            img:'/img/blog1.jpg',
            title:"Lesbian Sex Stories Of Hollywood’s",
            p:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim.'
        },
        {
            img:'/img/blog1.jpg',
            title:"Lesbian Sex Stories Of Hollywood’s",
            p:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim.'
        },
        {
            img:'/img/blog1.jpg',
            title:"Lesbian Sex Stories Of Hollywood’s",
            p:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim.'
        },
        {
            img:'/img/blog2.jpg',
            title:"Lesbian Sex Stories Of Hollywood’s",
            p:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim.'
        },
        {
            img:'/img/blog1.jpg',
            title:"Lesbian Sex Stories Of Hollywood’s",
            p:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim.'
        },
        {
            img:'/img/blog2.jpg',
            title:"Lesbian Sex Stories Of Hollywood’s",
            p:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim.'
        },
     
    ]


    AOS.init()

    return(
      <>
      

        {
            data.map((item)=>(

                <div data-aos="fade-up" className="boxs">
                <div className="img">
                <img src={process.env.PUBLIC_URL + item.img} alt="" />
                </div>
           

                <div className="texts">
                <h4>{item.title}</h4>
              
                 <p>06 Oct</p>
                 <h5>{item.p}</h5>
                 </div>
               
           </div>
            ))
        }
      
        </>

    )


}