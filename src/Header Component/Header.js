// import React from "react"

export default function Header() {
      return(
<header>

<div className="logo"> 
 {/* <img src="./public/image-12.jpeg" alt="" />  */}

 <div class="dropdown">
        <button class="dropbtn">Menu</button>
       <div class="dropdown-content">
    <a href="#What_you_should_already_know">Login</a>
    <a href="#What_you_should_already_know">CheckOut</a>
    <a href="#What_you_should_already_know">Link 3</a>
   </div>
  </div>

{/* 
  <img src={require("./public/header-logo-main.png" alt="")}/>  */}


   
         
     <div className="navigation">
        <ul>
            <li><a href="index.html">HOME</a></li>  
            <li><a href="index.html">DEMOS</a></li> 
            <li><a href="index.html">PAGES</a></li> 
            <li><a href="index.html">PORTFOLIO</a></li> 
            <li><a href="index.html">SHOP</a></li> 
            <li><a href="index.html">BLOG</a></li> 
            </ul>

         <div className="icons">
                <i class="fas fa-shopping-cart"></i>
                <i class="fas fa-search"></i>

         </div>

             <div className="heading">
                 <p>WOOCOMMERCE</p>
             </div> 

             
             <div className="button">
                 <a href="index.html">Discover</a>
             </div>
         </div>
     </div> 
    {/* </div>  */}
</header>
    
      )
}
   
