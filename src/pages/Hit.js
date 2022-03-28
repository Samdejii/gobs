import React from 'react'
import { Link } from 'react-router-dom'

export default function Hit() {
  return (
    <React.Fragment>
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
            <li class="active"><Link to="/HIT">How it Works</Link></li>
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

<div class="container-fluid">
        <div class="row p-2" style={{background:'#00AEAE'}}>
            <div class="col-md-5"></div>
            <div class="col-md-4 ">
            <nav class="main-na">
          <ul>
            <li><Link to="/#Personl">Personal</Link></li>
            <li><a href="/#Busisness">Busisness</a></li>
          </ul>
              </nav>
            </div>
            <div class="col-md-3"></div>
        
    </div>
</div>

<section id="why-us" class="wow fadeIn">
      <div class="container-fluid">

        <div class="row ">

        <div class="col-md-2"></div>
        <div class="col-md-4 mt-5 ">
            <div class="why-us-content">
                <span style={{color:' #008080'}}>Enhance Payment Experience in Your Store</span>
              <h3 class="mt-2"><b>Send money as easily as sending a message.</b></h3>
              <p>Gobs is a …player in the FINTECH space,
                   transforming financial transactions (payments and receipts), 
                   making them simple and secure.</p>

              

             </div>
             <div class="mt-3">
          <img src="assets/img/image 1.png" alt=""  class="p-1" />
          <img src="assets/img/image 2.png" alt=""  class="p-1"/>
          </div>

          </div><br/><br/>
          <div class="col-lg-6 d-flex justify-content-center mt-5">
            <div class="why-us-img">
            <img class="d-block" src="assets/img/Yellow.png" alt="First slide" style={{position:'relative'}}/>
            </div>
          </div>

          
            <br/>
        </div>

      </div>

     
    </section>

<div class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
            <h3 class="text-center"><b>How It Works</b></h3>
            </div>
            <div class="col-md-4"></div>
            
        </div>


        
        <div class="row mb-5">
            <div class="col-md-2"></div>
            <div class="col-md-8">
            <img class="d-block mb-5" src="assets/img/books-8.jpg" alt="First slide" style={{height:'50vh',}}/>


            <img class="mr-2 ml-2" src="assets/img/books-8.jpg" alt="First slide" style={{height:'15vh',}}/> 
            <img class="mr-2 ml-2" src="assets/img/books-8.jpg" alt="First slide" style={{height:'15vh',}}/>
            <img class="mr-2 ml-2" src="assets/img/books-8.jpg" alt="First slide" style={{height:'15vh',}}/>
          

            <h3 class="mt-5">We're Not in your country?</h3>
            <p class="mb-5">Add your country’s name to join the waitlist!</p>

            <form class="navbar-form navbar-left" role="search">
              <div class="form-group">
                <div class="row">
                  <div class="col-md-4">
                  <input type="text" class="form-control" placeholder="Enter your Country"/>
                  </div>
                  <div class="col-md-4">
                  <input type="text" class="form-control" placeholder="Enter your Email Address"/>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-3">
                  <button type="submit" class="btn btn-dark">Join Waitlist</button>
                  </div>
                </div>
              </div>
              
            </form>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</div>




<div class="container-fuild">
    <div class="container">
        <div class="row mt-5 mb-5">
            <div class="col-md-3"></div>
            <div class="col-md-6">
            <h3 class="text-center mt-5"><b>We're Not in your country?</b></h3>
            <p class="text-center">Add your country’s name to join the waitlist!</p>
            </div>
            <div class="col-md-3"></div>
            
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="container">
        <div class="row mb-5">
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <h4>The Community</h4>
                <p>By joining the community, 
                    you can support the side-hustlers before you even book.
                     You can also see what (and who) is trending on your campus.</p>
                     <nav class="main-nav">
                    <ul>
                    <li><button type="button" class="btn btn-dark ml-3 pl-5 pr-5 p-2 mt-3" href="/#Get Gobs">Get Gobs</button></li>    
                    </ul>
                    </nav>
            </div>
            <div class="col-md-5">
            <img class="d-block" src="assets/img/brand-voice.jpg" alt="First slide" style={{height:'40vh',}}/>
              </div>
            <div class="col-md-1"></div>
        </div>
    </div>
</div>

<div class="container-fluid mt-5">
    <div class="container">
        <div class="row mb-5 mt-5">
            <div class="col-md-6">
            <img class="d-block" src="assets/img/dance-3134828_1920.jpg" alt="First slide" style={{height:'40vh', }}/>
            </div>
            <div class="col-md-5">
                <h4>Frequently Asked Questions</h4>

                <section id="faq">

        <ul id="faq-list" class="wow fadeInUp">
          <li>
            <a data-toggle="collapse" class="collapsed" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i class="ion-android-remove"></i></a>
            <div id="faq1" class="collapse" data-parent="#faq-list">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.
                 Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq2" class="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i class="ion-android-remove"></i></a>
            <div id="faq2" class="collapse" data-parent="#faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq3" class="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i class="ion-android-remove"></i></a>
            <div id="faq3" class="collapse" data-parent="#faq-list">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq4" class="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i class="ion-android-remove"></i></a>
            <div id="faq4" class="collapse" data-parent="#faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>


        </ul>

    </section>
            </div>
            <div class="col-md-1"></div>
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

     
    </section>

    <section id="why-us" class="wow fadeIn">
      <div class="container-fluid">
        
        <header class="section-header">
        </header>

        <div class="row p-2">
          <div class="col-lg-1"></div>
          <div class="col-lg-10">
            <div class="card p-5"  style={{background:'#007F7F', color: 'white'}}>
              <div class="row">
                <div class="col-md-6">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do✨🎉🎉💖</h3>
    <p> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
       ullamco laboris nisi ut aliquip ex ea commodo consequat. .</p>
                
                </div>
                <div class="col-md-6 p-5">
                <form class="navbar-form navbar-left" role="search">
              <div class="form-group">
                <div class="row">
                  <div class="col-md-8">
                  <input type="text" class="form-control"  style={{background:'lightgrey', color: 'white'}} placeholder="Enter your Email Address"/>
                  </div>
                  <div class="col-md-4">
                  <button type="submit" class="btn btn-dark">Sign me up!</button>
                  </div>
                </div>
              </div>
              
            </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-1"></div>
         

          
            <br/>
        </div>

      </div>

     
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
                <li class="p-1 mb-1"><a href="/#"  style={{color:'black',}}><span>Terms of use</span></a></li>
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
    </React.Fragment>
  )
}
