import React, { useState } from 'react';
import './App.css';
import './services.css';
import './contact.css';


const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const showSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">KhAB PRIVATE LIMITED</div>
        <nav>
          <button onClick={() => showSection('home')}>Home</button>
          <button onClick={() => showSection('services')}>Services</button>
          <button onClick={() => showSection('contact')}>Contact</button>
          <button onClick={() => showSection('about')}>About</button>
        </nav>
      </header>

      {activeSection === 'home' && (
        <section className="hero">
          <div className="hero-text">
            <h1>KhAB PRIVATE LIMITED</h1>
            <p>
              At KhAB PRIVATE LIMITED, we are driven by a singular mission: to revolutionize the way businesses
              operate by providing cutting-edge software solutions. Founded by a team of passionate tech enthusiasts,
              we combine expertise with creativity to deliver tailor-made solutions that empower our clients to
              thrive in today's dynamic digital landscape. <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint praesentium itaque voluptatem consequuntur ullam dolorem, porro sit veritatis ad ipsum, alias facere deserunt magnam cumque saepe, suscipit consectetur repellat repudiandae.
              lorem500
            </p>
            <div className="buttons">
              <a onClick={() => showSection('services')} className="btn-primary">Get Started</a>
              <a onClick={() => showSection('contact')} className="btn-outline">Contact</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/public/KhaAB PRIVATE LIMITED.png" alt="KhAB PRIVATE LIMITED" />
          </div>
        </section>
      )}

      {activeSection === 'services' && (
        <section className="section">
          <h2>Our Services</h2>
          <div>
            <span class="services" id="services">
                <span class="sct">
                    <span class="service-card-t">
                        <h2>WEB + ANDROID + IOS APPLICATION</h2>
                        <h3>(CONTACT FOR MORE DETAILS AND COST)</h3>
                        <p>Reach your audience on the go with intuitive web + android + IOS Applications.</p>
              
                        <a onClick={() => showSection('contact')} >CLICK TO CONTACT</a>
                    </span>
                </span>
                
                <span class="scrow">
                   
                    <span class="service-card">
                        <h2>WEB APPLICATION</h2>
                        <h3>(CONTACT FOR MORE DETAILS AND COST)</h3>
                        <p>Reach your audience on the go with intuitive web Applications.</p>
                        <a onClick={() => showSection('contact')}>CLICK TO CONTACT</a>
                    </span>
                    
                    <span class="service-card">
                        <h2>ANDROID APPLICATION</h2>
                        <h3>(CONTACT FOR MORE DETAILS AND COST)</h3>
                        <p>Reach your audience on the go with intuitive android Applications.</p>
                        <a onClick={() => showSection('contact')}>CLICK TO CONTACT</a>
                    </span>
                </span>
                
                <span class="scrow">
                    
                    <span class="service-card">
                        <h2>IOS APPLICATION</h2>
                        <h3>(CONTACT FOR MORE DETAILS AND COST)</h3>
                        <p>Reach your audience on the go with intuitive IOS Applications.</p>
                        
                        <a onClick={() => showSection('contact')}>CLICK TO CONTACT</a>
                    </span>
                    <span class="service-card">
                        <h2>IOS + ANDROID APPLICATION</h2>
                        <h3>(CONTACT FOR MORE DETAILS AND COST)</h3>
                        <p>Reach your audience on the go with intuitive IOS + android Applications.</p>
                        <a onClick={() => showSection('contact')}>CLICK TO CONTACT</a>
                    </span>
                </span>
               
                <span class="scrow">
                    
                    <span class="service-card">
                        <h2>WEB + ANDROID APPLICATION</h2>
                        <h3>(CONTACT FOR MORE DETAILS AND COST)</h3>
                        <p>Reach your audience on the go with intuitive web + android Applications.</p>
                        
                        <a onClick={() => showSection('contact')}>CLICK TO CONTACT</a>
                    </span>
                    
                    <span class="service-card">
                        <h2>WEB + IOS APPLICATION</h2>
                        <h3>(CONTACT FOR MORE DETAILS AND COST)</h3>
                        <p>Reach your audience on the go with intuitive web + IOS Applications.</p>
                        
                        <a onClick={() => showSection('contact')}>CLICK TO CONTACT</a>
                    </span>
                </span>
          </span>
          </div>
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="section contacts">
          <h2>Contact Us</h2>
          <form id="contactForm" autocomplete="off">
                <div class="input-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>

                <div class="input-group">
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required/>
                </div>

                <div class="input-group">
                    <label for="phoneNumber">Phone Number:</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" onchange="validatePhoneNumber()" required/>
                </div>

                <div class="input-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <div class="displayflex">
                    
        

                    <div class="input-group">
                        <label for="interests">I am interested in:</label>
                        <div class="checkbox-group">
                            <div>
                                <input type="checkbox" id="interested-in-Web-Application"
                                    name="interested-in-Web-Application" value="Web-Application"/>
                                <label for="interested-in-Web-Application">Web Application</label>
                            </div>
                            <div>
                                <input type="checkbox" id="interested-in-android-application"
                                    name="interested-in-android-application" value="Android-Application"/>
                                <label for="interested-in-android-application">Android Application</label>
                            </div>
                            <div>
                                <input type="checkbox" id="interested-in-ios-application"
                                    name="interested-in-ios-application" value="ios-application"/>
                                <label for="interested-in-ios-application">iOS Application</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="response"></div>

                <div class="button-group">
                    <button type="submit" id="submitWhatsApp">Submit via WhatsApp</button>    
                </div>
            </form>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="section">
          <h2>About Us</h2>
          <p>We are a team of developers dedicated to digital transformation with Taqwa and compassion.</p>
        </section>
      )}

      <footer>
        &copy; 2026 Khedmat Al Barmajiat - All Rights Reserved
      </footer>
    </div>
  );
};

export default App;

