import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <React.Fragment>
    <body class="mobile-nav-active clearfix">
      <button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-times"></i></button>

<div id="container-fluid">

<header id="header">
      <div id="topbar">
      </div>
      <div class="container-fluid">
        <div class="logo float-left">
         
          
              <span class="pl-5 pr-5">
              <Link to="/"> <img src="assets/img/GOBS-COLOR-PLAIN.png" alt=""/></Link>
              </span>
              
          
        </div>
  
        <nav class="main-nav d-none d-lg-block">
  
        <nav class="main-nav float-left">
          <ul>
            <li><Link to="/">Merchant</Link></li>
            <li><a href="/#Busisness">Busisness</a></li>
          </ul>
              </nav>
  
              <nav class="main-nav float-right mr-3" >  
          <ul>
            <li><Link to="/HIT">How it Works</Link></li>
            <li><Link to="/developer">Developer</Link></li>
            <li class="active drop-down"><Link to="/about">About</Link>

            <ul>
            <li><Link to="/Investors">Investors</Link></li>
            <li><Link to="/Partners">Partners</Link></li>
            <li><Link to="/Team">Team</Link></li>
            <li class="disabled"><Link to="">Carrer</Link></li>
            <li class="disabled"><Link to="">News</Link></li>
            <li class="disabled"><Link to="">Leadership</Link></li>
            <li class="disabled"><Link to="">Financial Statments</Link></li>
          </ul>
          </li>
            <li><Link to="/Pp" type="button" class="btn btn-dark ml-3 p-2 mr-3" style={{color:'white'}}>Get Gobs</Link></li>

                      

          </ul>

          
           
          
          </nav>
        </nav>
             
      </div>
    </header>


   

 
    <section id="intro" class="clearfix mt-8 mb-5" style={{background:'white'}}>
    <div class="container-fluid">
    <div class="containe mb-5r">
      <div class="row justify-content-center align-self-center mb-5">
        <div class="col-md-6 col-sm-12 intro-info order-md-first order-first">
            <span>~</span>

          <h2 class="mb-2">Behind a great product, there’s a great team.</h2>

          <span>
          From product to a full ecosystem, we've built an incredible team
           of experienced people that share our passion for disruptive 
           technology and vision of a new digital payments landscape.<br/>
          </span>

          <br/>
          <Link to="/Pp">Learn more
            <img src="assets/img/arrow-circle-right.png" alt="" class="img-fluid ml-3"/>
            </Link><br/><br/><br/>
        </div>
  
        <div class="col-md-6 col-sm-12 intro-img order-md-last order-last clearfix mt-8">
            <img class="d-block" src="assets/img/brand-voice.jpg" alt="First slide" style={{height:'45vh',}}/>
        </div>
      </div>

    </div>
    </div>
  </section>

  <section id="intro" class="clearfix mt-8" style={{background:'white'}}>
    <div class="container-fluid">
    <div class="container">
      <div class="row justify-content-center align-self-center">
        
  
        <div class="col-md-12 col-sm-12 intro-img order-md-last order-last clearfix mt-8">
            <img class="d-block" src="assets/img/books-8.jpg" alt="First slide" style={{height:'80vh',}}/>
        </div>
      </div>

    </div>
    </div>
  </section>

  
  <section id="intro" class="clearfix mt-8" style={{background:'white'}}>
    <div class="container-fluid">
    <div class="container">
        <h2 class="mb-5 text-center">Developing a game-changing<br/> platform requires expertise from a<br/> wide spectrum of fields.</h2>
      <div class="row justify-content-center align-self-center">
  
        <div class="col-md-6 col-sm-12 intro-img order-md-first order-first clearfix mt-8">
            <img class="d-block" src="assets/img/brand-voice.jpg" alt="First slide" style={{height:'40vh',}}/>
        </div>

      
      <div class="col-md-6 col-sm-12 intro-info order-md-first order-first">

          <p class="mb-2">OUR VISION</p>

          <h3>
          To make payment seamless and reliable<br/>
          </h3>

        </div>
    </div>
    </div>  
      </div>
  </section>

  <div class="container-fluid p-3" style={{ padding: '30px',}}>
      <div class="container p-3">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6 col-lg-2 ml-2">
          <h3 style={{color: '#00AEAE', textAlign: 'center'}}>18M</h3>
          <p  style={{textAlign: 'center'}}>Sam <br/> Adewumi</p>
        </div>
        <div class="col-md-6 col-lg-2 ml-2">
          <h3 style={{color: '#00AEAE', textAlign: 'center'}}>18M</h3>
          <p  style={{textAlign: 'center'}}>Sam <br/> Adewumi</p>
          </div>
        <div class="col-md-6 col-lg-2 ml-2">
          <h3 style={{color: '#00AEAE', textAlign: 'center'}}>18M</h3>
          <p  style={{textAlign: 'center'}}>Sam <br/> Adewumi</p>
          </div>
        <div class="col-md-6 col-lg-2 ml-2">
          <h3 style={{color: '#00AEAE', textAlign: 'center'}}>18M</h3>
          <p  style={{textAlign: 'center'}}>Sam <br/> Adewumi</p>
          </div>
      </div>
      </div>
      </div>

 <br/><br/>
      <section id="intro" class="clearfix mt-8" style={{background:'white'}}>
    <div class="container-fluid">
    <div class="container">
      <div class="row justify-content-center align-self-center">
        <div class="col-md-6 col-sm-12 intro-info order-md-first order-first">
            <p><b>Who are we?</b></p><br/>
          <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
               culpa qui officia deserunt mollit anim id est laborum<br/>
          </span>

          <br/>
          <span><b>Meet our Leadership team
            <img src="assets/img/arrow-circle-right.png" alt="" class="img-fluid ml-3"/></b>
            </span><br/><br/><br/>
        </div>
  
        <div class="col-md-6 col-sm-12 intro-img order-md-last order-last clearfix mt-8">
            <img class="d-block" src="assets/img/brand-voice.jpg" alt="First slide" style={{height:'40vh',}}/>
        </div>
      </div>

    </div>
    </div>
  </section>

  <div class="container-fluid">
      <div class="container">
          <div class="row mt-4">
              <h3>Our Purpose</h3>
              <br/>
              </div>
              <div class="row">
              <div class="col-md-3 p-3 m-3">
              <img src="assets/img/GOBS-COLOR-PLAIN.png" alt="" style={{width:'20%'}}/>
              <p><b>Financial Aspiration</b></p>
            <span>New world financial literacy for the future of work. 
                Giving the youth the confidence to follow their calling.</span>              

              </div>
              <div class="col-md-4 p-3 m-3">

              <img src="assets/img/GOBS-COLOR-PLAIN.png" alt="" style={{width:'20%'}}/>
              <p><b>Financial Aspiration</b></p>
            <span>New world financial literacy for the future of work. 
                Giving the youth the confidence to follow their calling.</span>              

              </div>
              <div class="col-md-3 p-3 m-3">

              <img src="assets/img/GOBS-COLOR-PLAIN.png" alt="" style={{width:'20%'}}/>
              <p><b>Financial Aspiration</b></p>
            <span>New world financial literacy for the future of work. 
                Giving the youth the confidence to follow their calling.</span>              

              </div>
          </div>
      </div>
  </div>


  <section id="why-us" class="wow fadeIn">
      <div class="container-fluid">
        
        <header class="section-header">
          <p></p>
        </header>

        <div class="row">

          <div class="col-lg-8 d-flex justify-content-center ">
            <div class="why-us-img">
            <img class="d-block" src="assets/img/Yellow.png" alt="First slide" style={{position:'relative'}}/>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="why-us-content">
              <h3>Join the revoltion</h3>
              <h3>Download the app today!</h3>
            </div>

            <div>
          <img src="assets/img/image 1.png" alt=""  class="p-1" />
          <img src="assets/img/image 2.png" alt=""  class="p-1" />
          </div>

          </div>
            <br/>
        </div>

      </div>
<br/>
     <h3 class="text-center mt-3">Put the FAQ here</h3>
    </section>


    <section id="call-to-action" class="wow fadeInUp">
          <div class="container-fluid">
            <div class="row p-2">
    
              <div class="col-md-3 mb-5 ml-5">
              <div class="logo float-left">
             <span>
             <Link to="/"> <img src="assets/img/GOBS-COLOR-PLAIN.png" alt="" style={{width:'20%',}} /></Link>
             </span>
             <p class="mt-3">Our goal is to create and sustain a seamless interface for transactions
                between merchants and users to maximise their …..by securing their 
                abilities to receive and pay without the fear of the unknown.</p>
    
                <br/>
              <div>
              <img src="assets/img/image 1.png" alt="" class="p-1" />
              <img src="assets/img/image 2.png" alt="" class="p-1" />
              </div>
    
              </div>
              </div>
    
              <div class="col-md-2 mt-5">
    
              <h5 class="ftco-heading-2" style={{color:'grey',}}>Gobbs</h5>
              <ul class="list-unstyled">
                <li class="p-1 mb-1"><Link to="/Pk"  style={{color:'black',}}><span>Press Kit</span></Link></li>
                <li class="p-1 mb-1"><a href="/#"  style={{color:'black',}}><span>Blog</span></a></li>
              </ul>
    </div>
    <div class="col-md-2 mt-5">
              <h5 class="ftco-heading-2" style={{color:'grey',}}>Company</h5>
              <ul class="list-unstyled">
                <li class="p-1 mb-1"><Link to="/about"  style={{color:'black',}}><span>About Us</span></Link></li>
                <li class="p-1 mb-1"><Link to="/Contact"  style={{color:'black',}}><span>Contact Us</span></Link></li>
              </ul>
    </div>
    <div class="col-md-2 mt-5">
              <h5 class="ftco-heading-2" style={{color:'grey',}}>Legal</h5>
              <ul class="list-unstyled">
                <li class="p-1 mb-1"><a href="/Terms"  style={{color:'black',}}><span>Terms of use</span></a></li>
                <li class="p-1 mb-1"><Link to="/Pp" style={{color:'black',}}><span>Privacy policy</span></Link></li>
                <li class="p-1 mb-1"><Link to="/Sp" style={{color:'black',}}><span>Security policy</span></Link></li>
              </ul>
    </div>
              <div class="col-md-2 mt-5">
                <nav class="main-nav">
              <h5 class="ftco-heading-2" style={{color:'grey'}}>Socials</h5>
              <ul clss="list-unstyled mt-2">
    
                <li><a href="/#"><span class="fa fa-facebook float-left d-block pl-3 pr-3 p-3"
                style={{color:'white',background:'#007F7F',borderRadius:'100%',width:'40px'}}></span></a></li>
    
                <li><a href="/#"><span class="fa fa-instagram float-left d-block p-3"
                style={{color:'white',background:'#007F7F',borderRadius:'50%',}}></span></a></li> 
    
                <li><a href="/#"><span class="fa fa-twitter float-left d-block p-3" 
                style={{color:'white',background:'#007F7F',borderRadius:'50%',}}></span></a></li>
    
              </ul>
              </nav>
              </div>
    
                </div> 
                </div>
        </section>


  <a href="/#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  
 

  
  <script src="assets/lib/jquery/jquery.min.js"></script>
  <script src="assets/lib/jquery/jquery-migrate.min.js"></script>
  <script src="assets/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/lib/easing/easing.min.js"></script>
  <script src="assets/lib/mobile-nav/mobile-nav.js"></script>
  <script src="assets/lib/wow/wow.min.js"></script>
  <script src="assets/lib/waypoints/waypoints.min.js"></script>
  <script src="assets/lib/counterup/counterup.min.js"></script>
  <script src="assets/lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="assets/lib/isotope/isotope.pkgd.min.js"></script>
  <script src="assets/lib/lightbox/js/lightbox.min.js"></script>
  
  <script src="assets/contactform/contactform.js"></script>

 
  <script src="assets/js/main.js"></script>

        </div>
        </body>
    </React.Fragment>
  )
}
