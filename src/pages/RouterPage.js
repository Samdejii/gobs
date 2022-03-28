import React from 'react'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from './home';
import About from './About';
import Developer from './Developer';
import Hit from './Hit';
import Investors from './Investors';
import Partners from './Partners';
import Team from './Team';
import Pp from './Pp';
import Sp from './Sp';
import Terms from './Terms';
import Pk from './Pk';
import Contact from './Contact';

export default function RouterPage() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/"  element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/developer" element={ <Developer /> } />
                <Route path="/HIT" element={ <Hit /> } />
                <Route path="/Investors" element={ <Investors /> } />
                <Route path="/Partners" element={ <Partners /> } />
                <Route path="/Team" element={ <Team /> } />
                <Route path="/Pp" element={ <Pp /> } />
                <Route path="/Sp" element={ <Sp /> } />
                <Route path="/Terms" element={ <Terms /> } />
                <Route path="/Pk" element={ <Pk /> } />
                <Route path="/Contact" element={ <Contact /> } />
            </Routes>
        </Router>
    </div>
  )
}
