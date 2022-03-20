import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render() {
        return (
          <body>
<div class="container-fluid">

<header id="header">
      <div id="topbar">
      </div>
      <div class="container-fluid">
        <div class="logo float-left">
         
          
              <span class="pl-5 pr-5">
              <img src="assets/img/GOBS-COLOR-PLAIN.png" alt=""/>
              </span>
              
          
        </div>
  
        <nav class="main-nav d-none d-lg-block">
  
        <nav class="main-nav float-left">
          <ul>
            <li class="active"><Link to="/">Merchant</Link></li>
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
          </ul>
          </li>
            <li><Link to="/Pp" type="button" class="btn btn-dark ml-3 p-2 mr-3" style={{color:'white'}}>Get Gobs</Link></li>
          </ul>
          </nav>
        </nav>
      </div>
    </header>


  <section id="intro" class="clearfix mt-8">
    <div class="container-fluid">
    <div class="container">
      <div class="row justify-content-center align-self-center">
        <div class="col-md-8 col-sm-12 intro-info order-md-first order-first">
            <span>Enhance Payment Experience in Your Store</span>

          <h2 class="mb-2">Seamless Payment Terminal Service</h2>

          <span>
          Gobs is a …player in the FINTECH space, transforming financial transactions (payments and receipts), 
          making them simple and secure.We commit to efficient and sustainable service delivery driven by 
          ethical professionals who love what they do.<br/>
          </span>

          <br/>
          <div>
          <img src="assets/img/image 1.png" alt="" class="p-1" />
          <img src="assets/img/image 2.png" alt="" class="p-1" />
          </div>
        </div>
  
        <div class="col-md-4 col-sm-12 intro-img order-md-last order-last clearfix mt-8 p-5">
          <img src="assets/img/Group 21.png" alt="" style={{position:'absolute', width:'90%', }}/>
          <img src="assets/img/image 9.png" alt="" style={{position:'relative', width:'90%', }}/>
        </div>
      </div>

    </div>
    </div>
  </section>

  <main id="main">

    
    <section id="about" style={{background:'#E0ECEC'}}>

      <div class="container clearfix mt-8">
        <div class="row">

          <div class="col-lg-12 text-center">
            
            <div class="about-content">
              <h5><b>Powering physical commerce for</b></h5>
            </div>
</div>
</div>
<div class="container-fluid">
  <div class="row p-2">
    <div class="col-lg-1 text-center"></div>

    <div class="col-lg-2 text-center">
    <img src="assets/img/bolt 1.png" alt="" class="mr-1 p-3 mt-4" style={{width:'50%', background:'white'}}/>
    </div>
    <div class="col-lg-2 text-center">
    <img src="assets/img/printivo 1.png" alt="" class="mr-1 p-3 mt-4" style={{width:'60%', background:'white'}}/>
    </div>
    <div class="col-lg-2 text-center">
    <img src="assets/img/air_peace 1.png" alt="" class="mr-1 p-3 mt-4" style={{width:'60%', background:'white'}}/>
    </div>
    <div class="col-lg-2 text-center">
    <img src="assets/img/hotels_ng 1.png" alt="" class="mr-1 p-3 mt-4" style={{width:'60%', background:'white'}}/>
    </div>
    <div class="col-lg-2 text-center">
    <img src="assets/img/eyowo 1.png" alt="" class="mr-1 p-3 mt-4" style={{width:'60%', background:'white'}}/>
    </div>

    <div class="col-lg-1 text-center"></div>
    </div>
    <div>
            <br/>

            <div class="row p-2">
    <div class="col-lg-1 text-center"></div>

    <div class="col-lg-2 text-center">
    <img src="assets/img/oando 1.png" alt="" class="mr-1 p-3 mt-4" style={{width:'60%', background:'white'}}/>
    </div>
    <div class="col-lg-2 text-center">
    <img src="assets/img/eden-logo_lcepc6.png" alt="" class="mr-1 p-3 mt-4" style={{width:'50%', background:'white'}}/>
    </div>
    <div class="col-lg-2 text-center">
    <img src="assets/img/iroko_tv 1.png" alt="" class="mr-1 p-3 mt-4" style={{width:'60%', background:'white'}}/>
    </div>
    <div class="col-lg-2 text-center">
    <img src="assets/img/lendsqr 1.png" alt="" class="mr-1 p-3 mt-4" style={{width:'60%', background:'white'}}/>
    </div>
    <div class="col-lg-2 text-center">
    <img src="assets/img/ehealth_africa 1.png" alt="" class="mr-1 p-3 mt-4" style={{width:'60%', background:'white'}}/>
    </div>

    <div class="col-lg-1 text-center"></div>
    </div>
    <br/>
   </div>
        </div>
      </div>

    </section>


    
    <section id="services" class="section-bg">
      <div class="container">

        <header class="section-header text-center p-5">
          <h5>How does Gobs work</h5>
          <p>Just generate the amoutn and with some simple touches!</p>
        </header>

        <div class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" >
            <h3>User</h3>
            <p>1.  Create account <br/>
            Setup your account, genenrate payment ID and easily make transacions. 
            </p>
            <p>
            2. Generate Transaction ID <br/>
            Setup your account, genenrate payment ID and easily make transacions. <br/>
            </p>
            <p>
            3. Make payment<br/>
            Setup your account, genenrate payment ID and easily make transacions. <br/>
            </p><br/>
            <span>Learn more
            <img src="assets/img/arrow-circle-right.png" alt="" class="img-fluid ml-3"/>
            </span>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp mt-5">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active  d-flex justify-content-center">
      <img class="d-block" src="assets/img/Yellow.png" alt="First slide" style={{position:'absolute'}}/>
      <img class="d-block " src="assets/img/lf20_L6fWWq.json].png" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block" src="assets/img/Yellow.png" alt="First slide" style={{position:'absolute'}}/>
      <img class="d-block " src="assets/img/lf20_L6fWWq.json].png" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block" src="assets/img/Yellow.png" alt="First slide" style={{position:'absolute'}}/>
      <img class="d-block " src="assets/img/lf20_L6fWWq.json].png" alt="First slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only" style={{color:'black', position:'absolute'}}>Next</span>
  </a>
</div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp d-flex justify-content-center mb-5 ">
            <h3 class="mt-5 ml-5">Merchants</h3>
      <img class="d-block mt-5" src="assets/img/Group 1552.png" alt="First slide" style={{position:'absolute'}}/>
          </div>
         

        </div>

      </div>
      
    </section>
    
    <div class="container-fluid p-3" style={{background:'#E0ECEC', padding: '30px',}}>
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
    
    <section id="why-us" class="wow fadeIn">
      <div class="container-fluid">
        
        <header class="section-header">
          <p></p>
        </header>

        <div class="row">

          <div class="col-lg-6 d-flex justify-content-center">
            <div class="why-us-img">
            <img class="d-block" src="assets/img/Yellow.png" alt="First slide" style={{position:'relative'}}/>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="why-us-content">
              <h3>Get started with Gobs in 9-ish minutes!</h3>

              <div class="features wow bounceInUp clearfix">
                <i class="fa fa-diamond" style={{color: '#f058dc'}}></i>
                <p>Download Gobs from the Apple App Store or the Google Play Store.</p>
              </div>

              <div class="features wow bounceInUp clearfix">
                <i class="fa fa-object-group" style={{color: '#ffb774'}}></i>
                <p>Sign up with your phone number.</p>
              </div>
              
              <div class="features wow bounceInUp clearfix">
                <i class="fa fa-language" style={{color: '#589af1'}}></i>
                <p>You may be placed on a waitlist when you sign up.</p>
              </div>

              <div class="features wow bounceInUp clearfix">
                <i class="fa fa-language" style={{color: '#589af1'}}></i>
                <p>Start sending and receiving money</p>
              </div>
              
            </div>

            <div>
          <img src="assets/img/image 1.png" alt=""  class="p-1" />
          <img src="assets/img/image 2.png" alt=""  class="p-1"/>
          </div>

          </div>
            <br/>
        </div>

      </div>

     
    </section>

    
    <section id="call-to-action" class="wow fadeInUp">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 text-center text-lg-center">
            <h3 class="cta-title">Why choose Gobs</h3>
            <p class="cta-text">No credit checks, no hassle for the employer. Advances have never been so simple.</p>
          </div>
          <div class="container-fluid">
            <div class="row text-center p-3">
            <div class="col-md-1"></div>

            <div class="col-md-3">
              <img src="assets/img/lendsqr 1.png" alt="" class="mr-1 p-4 mt-4" style={{width:'40%', background:'white'}}/>
            <h4 class="mt-3">Why choose Gobs</h4>
            <p class="cta-text">No credit checks, no hassle for the employer. Advances have never been so simple.</p>

            </div>
            <div class="col-md-4">
              <img src="assets/img/lendsqr 1.png" alt="" class="mr-1 p-4 mt-4" style={{width:'30%', background:'white'}}/>
            <h4 class="mt-3">Why choose Gobs</h4>
            <p class="cta-text">No credit checks, no hassle for the employer. Advances have never been so simple.</p>
            </div>
            <div class="col-md-3">
              <img src="assets/img/lendsqr 1.png" alt="" class="mr-1 p-4 mt-4" style={{width:'40%', background:'white'}}/>
            <h4 class="mt-3">Why choose Gobs</h4>
            <p class="cta-text">No credit checks, no hassle for the employer. Advances have never been so simple.</p>
            </div>

            <div class="col-md-1"></div>
            </div>

            <div class="row text-center p-3">
            <div class="col-md-1"></div>

            <div class="col-md-3">
              <img src="assets/img/lendsqr 1.png" alt="" class="mr-1 p-4 mt-4" style={{width:'40%', background:'white'}}/>
            <h4 class="mt-3">Why choose Gobs</h4>
            <p class="cta-text">No credit checks, no hassle for the employer. Advances have never been so simple.</p>

            </div>
            <div class="col-md-4">
              <img src="assets/img/lendsqr 1.png" alt="" class="mr-1 p-4 mt-4" style={{width:'30%', background:'white'}}/>
            <h4 class="mt-3">Why choose Gobs</h4>
            <p class="cta-text">No credit checks, no hassle for the employer. Advances have never been so simple.</p>
            </div>
            <div class="col-md-3">
              <img src="assets/img/lendsqr 1.png" alt="" class="mr-1 p-4 mt-4" style={{width:'40%', background:'white'}}/>
            <h4 class="mt-3">Why choose Gobs</h4>
            <p class="cta-text">No credit checks, no hassle for the employer. Advances have never been so simple.</p>
            </div>

            <div class="col-md-1"></div>
            </div>

          </div>
        </div>

      </div>
    </section>


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

    <section id="call-to-action" class="wow fadeInUp">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 text-center text-lg-center">
            <h3 class="cta-title">We're changing the way people get paid.<br/> Your money, when you need it.</h3>
            <span>Learn more
            <img src="assets/img/arrow-circle-right.png" alt="" class="img-fluid ml-3"/>
            </span>
          </div>

          <div class="container-fluid p-5">
           
          <div class="row p-4">

<div class="col-lg-6 d-flex justify-content-center mb-2">
  <div class="why-us-img">
  <img class="d-block" src="assets/img/Yellow.png" alt="First slide" style={{position:'relative'}}/>
  </div>
</div>

<div class="col-lg-6 mt-2">
  <div class="why-us-content">
    <h3>Access the money you've already earnt instantly.</h3>
    <p>When life happens, why wait til pay day? With MyPayNow
     you can access up to a quarter of your pay early, each pay cycle.
      With real-time deposits, you can get the cash you need to get
       back on track in just 60 seconds! Whatever you situation, we've got you covered.</p>
  </div>

</div>
  <br/>
</div>

          </div>
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
                  <p>put in a form here</p>
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
        <div class="col-md-1"></div>

          <div class="col-md-4 mb-5">
          <div class="logo float-left">
         <span>
         <img src="assets/img/GOBS-COLOR-PLAIN.png" alt="" style={{width:'20%',}} />
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

          <h5 class="ftco-heading-2" style={{color:'grey',}}>Legal</h5>
          <ul class="list-unstyled">
            <li><a href="/#" style={{color:'black',}}><span>Home</span></a></li>
            <li><a href="/#" style={{color:'black',}}><span>Blog</span></a></li>
          </ul>
</div>
<div class="col-md-2 mt-5">
          <h5 class="ftco-heading-2" style={{color:'grey',}}>Legal</h5>
          <ul class="list-unstyled">
            <li><a href="/#" style={{color:'black',}}><span>Home</span></a></li>
            <li><a href="/#" style={{color:'black',}}><span>Blog</span></a></li>
          </ul>
</div>
<div class="col-md-2 mt-5">
          <h5 class="ftco-heading-2" style={{color:'grey',}}>Legal</h5>
          <ul class="list-unstyled">
            <li><a href="/#"  style={{color:'black',}}><span>Home</span></a></li>
            <li><a href="/#" style={{color:'black',}}><span>Blog</span></a></li>
          </ul>
</div>
          <div class="col-md-1">
            <nav class="main-nav">
          <ul clss="list-unstyled mt-2">
            <li><a href="/#" style={{color:'black',}}><span class="fa fa-twitter float-left d-block"></span></a></li>
            <li><a href="/#" style={{color:'black',}}><span class="fa fa-facebook float-left d-block"></span></a></li>
            <li><a href="/#" style={{color:'black',}}><span class="fa fa-instagram float-left d-block"></span></a></li> 
          </ul>
          </nav>
          </div>

            </div> 
            </div>
    </section>



  </main>

 

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
        );
    }
}

export default Home;