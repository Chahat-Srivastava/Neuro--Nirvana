import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import './Home.css';
import App from './App';
import Login from './Login';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import Creativity from './Creativity';
import  Meditation from './Meditation';
import Suggestions from './Suggestions';
import Navigation from './Navigation';
import Chatbot from './Chatbot'
import Comics from './Comics'
import Dancing from './Dancing'
import Affirmation from './Affirmation'
import Affirmation_next from './Affirmation_next'
import Video from './video'
import NavBar from 'react'
import Outlet from 'react'
const main = () => {
  return (
    <>
    <Router>
    <div class="bgImage">
        <div class="header">
        <div class="Logo">  
          
        
        

        </div>
        <div class="main_data">
c3
        </div>
        <div class="user_photo Logo">
          

        </div>
        </div>
        
        <div class="sectionContainer">
            <section class="leftSection">
                <Navigation />
                
            </section>
            
                
                    
                    
                    <Routes>
                      
                        <Route path="/Home" element={<Home />}/>
                        <Route path="/Comics" element={<Comics />} />
                        
                        <Route path="/Chatbot" element={<Chatbot />} />
                        <Route path="/Creativity" element={<Creativity />} />
                        <Route path="/Meditation" element={<Meditation />} />
                        <Route path="/Suggestions" element={<Suggestions />} />
                         
                        <Route path="/Dancing" element={<Dancing />} />
                        <Route path="/Affirmation" element={<Affirmation />} />
                        <Route path="/Affirmation_next" element={<Affirmation_next />} />
                        
                        
                    </Routes>
                    
                    
                
        
        </div>
        </div>
        </Router>
    </>
  )
}

export default main