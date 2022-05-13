import React from "react";
import { Link } from 'react-router-dom'

class Contact extends React.Component{
  render() {
      return (
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
        <li class="drop-down"><Link to="/about">About</Link>
    
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
  
    <main id="main">
    
    <div id="container-fluid" style={{height:'80vh',}}>
      <div class="container">
        <div class="row p-5 mt-5 mb-5">
          <div class="col-md-1"></div>
          <div class="col-md-4 mt-5">
            <h4 class="mt-5">Contact Us</h4>
            <p>Get information about the entire integration process and make preparations.</p>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-4">
    
          <span>Send us a message</span>
          <form class="navbar-form navbar-left" role="search">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-12 mt-2 mb-2">
                      <input type="text" class="form-control" placeholder="Name"/>
                      </div>
                      <div class="col-md-12 mt-2 mb-2">
                      <input type="text" class="form-control" placeholder="Email Address"/>
                      </div>
                      <div class="col-md-12 mt-2 mb-2">
                      <input type="text" class="form-control" placeholder="Phone Nuber"/>
                      </div>
                      <div class="col-md-12 mt-2 mb-2">
                          <textarea class="form-control" placeholder="Your Message" rows="3"></textarea>
                      </div>
                      <div class="col-md-6 mt-2 mb-3">
                      <button type="submit" class="btn btn-dark">Send Message</button>
                      </div>
                    </div>
                  </div>
                  
                </form>
    
          </div>
        </div>
      </div>
    </div>
    
    
    
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
    
    
    </main>
    
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
  );
}
}

export default Contact;