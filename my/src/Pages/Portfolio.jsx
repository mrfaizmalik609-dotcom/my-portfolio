// src/Pages/Portfolio.jsx
import React, { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    // Add Font Awesome script to head
    const fontAwesomeScript = document.createElement('script');
    fontAwesomeScript.src = 'https://kit.fontawesome.com/a076d05399.js';
    fontAwesomeScript.crossOrigin = 'anonymous';
    document.head.appendChild(fontAwesomeScript);
    
    // Simple fade-in animation for elements
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(2rem)';
    });
    
    setTimeout(() => {
      fadeElements.forEach(element => {
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
    }, 100);
    
    // Clean up
    return () => {
      document.head.removeChild(fontAwesomeScript);
    };
  }, []);

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header>
        <div className="container header-content">
          <div className="logo">
            <div className="logo-icon">FM</div>
            <div className="logo-text">
              <div className="logo-name">Faiz Malik</div>
              <div className="logo-title">Full‑Stack Developer</div>
            </div>
          </div>
          
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          
          <div className="header-actions">
            <a href="https://wa.me/923145315196" target="_blank" className="whatsapp-btn" title="Contact via WhatsApp">
              <span className="whatsapp-icon">💬</span>
            </a>
            <a href="#contact" className="hire-btn">
              <span className="whatsapp-icon">💬</span> Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="availability fade-in">
              <div className="availability-dot"></div>
              Available for Projects • Remote Ready • Pakistan
            </div>
            
            <h1 className="hero-title fade-in delay-100">
              Hi, I'm <span className="gradient-text">Faiz Malik</span>
            </h1>
            
            <p className="hero-description fade-in delay-200">
              Full‑stack developer creating <strong className="emerald-text">fast</strong>, <strong className="blue-text">scalable</strong> and <strong className="purple-text">beautiful</strong> web experiences that drive real business results.
            </p>
            
            <div className="hero-actions fade-in delay-300">
              <a href="#projects" className="primary-btn">
                <span className="code-icon">💻</span>
                View My Work
                <span className="arrow-icon">↗</span>
              </a>
              <a href="#contact" className="secondary-btn">
                <span className="comment-icon">💬</span>
                Let's Talk
              </a>
            </div>
            
            <div className="contact-links fade-in delay-400">
              <a href="tel:03145315196" className="contact-link" title="Call me directly">
                <span className="phone-icon">📞</span>
                03145315196
              </a>
              <a href="mailto:mrfaizmalik609@gmail.com" className="contact-link" title="Send me an email">
                <span className="email-icon">✉️</span>
                Email Me
              </a>
              <a href="https://github.com/mrfaizmalik609-dotcom" target="_blank" className="contact-link" title="Check my GitHub">
                <span className="github-icon">🐱</span>
                GitHub
              </a>
            </div>
          </div>
          
          <div className="fade-in delay-500">
            <div className="hero-card">
              <div className="neon-border">
                <div className="card-content">
                  <div className="card-header">
                    <div className="status">
                      <div className="status-dot"></div>
                      Professional Developer
                    </div>
                    <div className="location">Pakistan • Remote Worldwide</div>
                  </div>
                  
                  <h3 className="card-title">Full‑Stack Expertise</h3>
                  
                  <p className="card-description">
                    Specializing in modern web technologies with a focus on performance, 
                    scalability, and exceptional user experience. Ready to bring your vision to life.
                  </p>
                  
                  <div className="tech-grid">
                    <div className="tech-item">React</div>
                    <div className="tech-item">Node.js</div>
                    <div className="tech-item">Next.js</div>
                    <div className="tech-item">TypeScript</div>
                    <div className="tech-item">MongoDB</div>
                    <div className="tech-item">Firebase</div>
                  </div>
                  
                  <div className="card-actions">
                    <a href="https://wa.me/923145315196?text=Hi Faiz! I'd like to hire you for a project." target="_blank" className="card-primary-btn">
                      <span className="whatsapp-icon">💬</span> Hire Me Now
                    </a>
                    <a href="mailto:mrfaizmalik609@gmail.com?subject=Resume Request&body=Hi Faiz! I'd like to request your resume." className="card-secondary-btn">
                      <span className="download-icon">📥</span>
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title"><span className="gradient-text">About Me</span></h2>
            <p className="section-description">Passionate about creating exceptional digital experiences</p>
          </div>
          
          <div className="about-grid">
            <div className="about-content fade-in">
              <h3>Professional Full-Stack Developer</h3>
              <p className="about-text">
                With over 3 years of experience in modern web development, I specialize in creating 
                high-performance applications using cutting-edge technologies like React, Node.js, and TypeScript.
              </p>
              <p className="about-text">
                I'm passionate about writing clean, maintainable code and delivering projects that not only 
                meet technical requirements but also provide exceptional user experiences that drive business growth.
              </p>
              <p className="about-text">
                Based in Pakistan and available for remote work worldwide, I've successfully delivered multiple projects 
                ranging from e-commerce platforms to educational websites and interactive web applications.
              </p>
              
              <div className="social-links">
                <a href="https://www.linkedin.com/in/faiz-malik-2909b8287/" target="_blank" className="social-link">
                  <span className="linkedin-icon">🔗</span>
                  LinkedIn
                </a>
                <a href="https://github.com/mrfaizmalik609-dotcom" target="_blank" className="social-link github-link">
                  <span className="github-icon">🐱</span>
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="skills-container fade-in delay-100">
              <h4>Technical Skills</h4>
              
              <div className="skill">
                <div className="skill-header">
                  <span className="skill-name">React.js</span>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "95%" }}></div>
                </div>
              </div>
              
              <div className="skill">
                <div className="skill-header">
                  <span className="skill-name">Next.js</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "90%" }}></div>
                </div>
              </div>
              
              <div className="skill">
                <div className="skill-header">
                  <span className="skill-name">TypeScript</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "85%" }}></div>
                </div>
              </div>
              
              <div className="skill">
                <div className="skill-header">
                  <span className="skill-name">Tailwind CSS</span>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "95%" }}></div>
                </div>
              </div>
              
              <div className="skill">
                <div className="skill-header">
                  <span className="skill-name">Node.js</span>
                  <span className="skill-percentage">88%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "88%" }}></div>
                </div>
              </div>
              
              <div className="skill">
                <div className="skill-header">
                  <span className="skill-name">Firebase</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title"><span className="gradient-text">Professional Achievements</span></h2>
            <p className="section-description">Delivering exceptional web solutions with measurable results</p>
          </div>
          
          <div className="achievements-grid">
            <div className="achievement-card fade-in">
              <div className="achievement-icon">
                <span className="check-icon">✅</span>
              </div>
              <div className="achievement-number">5+</div>
              <h3 className="achievement-title">Projects Completed</h3>
              <p className="achievement-description">Successfully delivered web applications</p>
            </div>
            
            <div className="achievement-card fade-in delay-100">
              <div className="achievement-icon">
                <span className="users-icon">👥</span>
              </div>
              <div className="achievement-number">100%</div>
              <h3 className="achievement-title">Client Satisfaction</h3>
              <p className="achievement-description">Delivering quality solutions</p>
            </div>
            
            <div className="achievement-card fade-in delay-200">
              <div className="achievement-icon">
                <span className="bolt-icon">⚡</span>
              </div>
              <div className="achievement-number">24/7</div>
              <h3 className="achievement-title">Support Available</h3>
              <p className="achievement-description">Dedicated to project success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title"><span className="gradient-text">Professional Services</span></h2>
            <p className="section-description">Comprehensive web development solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card neon-border fade-in">
              <div className="service-icon">
                <span className="code-icon">💻</span>
              </div>
              
              <div className="service-header">
                <h3 className="service-title">Frontend Development</h3>
              </div>
              
              <p className="service-description">Modern, responsive user interfaces that engage and convert users.</p>
              
              <div className="service-features">
                <div className="service-feature">React & Next.js</div>
                <div className="service-feature">TypeScript</div>
                <div className="service-feature">Tailwind CSS</div>
                <div className="service-feature">Performance Optimization</div>
              </div>
              
              <a href="https://wa.me/923145315196?text=Hi Faiz! I'm interested in Frontend Development services." target="_blank" className="service-button">
                <span className="whatsapp-icon">💬</span> Get Quote
              </a>
            </div>
            
            <div className="service-card neon-border fade-in delay-100">
              <div className="service-icon">
                <span className="network-icon">🌐</span>
              </div>
              
              <div className="service-header">
                <h3 className="service-title">Backend Development</h3>
              </div>
              
              <p className="service-description">Scalable server-side solutions with robust API architecture.</p>
              
              <div className="service-features">
                <div className="service-feature">Node.js & Express</div>
                <div className="service-feature">Database Design</div>
                <div className="service-feature">Authentication</div>
                <div className="service-feature">Cloud Deployment</div>
              </div>
              
              <a href="https://wa.me/923145315196?text=Hi Faiz! I'm interested in Backend Development services." target="_blank" className="service-button">
                <span className="whatsapp-icon">💬</span> Get Quote
              </a>
            </div>
            
            <div className="service-card neon-border fade-in delay-200">
              <div className="service-icon">
                <span className="globe-icon">🌍</span>
              </div>
              
              <div className="service-header">
                <h3 className="service-title">Full-Stack Solutions</h3>
              </div>
              
              <p className="service-description">Complete web applications from concept to deployment.</p>
              
              <div className="service-features">
                <div className="service-feature">End-to-end Development</div>
                <div className="service-feature">Database Integration</div>
                <div className="service-feature">Third-party APIs</div>
                <div className="service-feature">Maintenance</div>
              </div>
              
              <a href="https://wa.me/923145315196?text=Hi Faiz! I'm interested in Full-Stack Solutions." target="_blank" className="service-button">
                <span className="whatsapp-icon">💬</span> Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title"><span className="gradient-text">Featured Projects</span></h2>
            <p className="section-description">Real-world applications showcasing modern web development expertise</p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card neon-border fade-in">
              <div className="card-content">
                <div className="project-header">
                  <div>
                    <div className="project-category">E-commerce</div>
                    <h3 className="project-title">Bagverse</h3>
                    <p className="project-subtitle">E‑commerce Platform (Bags)</p>
                  </div>
                  <span className="project-status status-live">
                    <div className="status-dot"></div>
                    LIVE
                  </span>
                </div>
                
                <p className="project-description">
                  A fully responsive e‑commerce platform with advanced product search, shopping cart, secure checkout, and wishlist functionality.
                </p>
                
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Context API</span>
                  <span className="tech-tag">Tailwind CSS</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">Stripe</span>
                </div>
                
                <div className="project-footer">
                  <a href="https://bagverse-mu.vercel.app/" target="_blank" className="project-link">
                    Visit Live Site
                    <span className="external-icon">↗</span>
                  </a>
                  <a href="https://wa.me/923145315196?text=Hi Faiz! I'm interested in the Bagverse project. Can we discuss similar work?" target="_blank" className="project-discuss">
                    <span className="whatsapp-icon">💬</span> Discuss
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-card neon-border fade-in delay-100">
              <div className="card-content">
                <div className="project-header">
                  <div>
                    <div className="project-category">E-commerce</div>
                    <h3 className="project-title">Tech Nova</h3>
                    <p className="project-subtitle">Electronics E-commerce</p>
                  </div>
                  <span className="project-status status-live">
                    <div className="status-dot"></div>
                    LIVE
                  </span>
                </div>
                
                <p className="project-description">
                  Modern laptop storefront featuring advanced filtering, real-time inventory, and seamless user experience.
                </p>
                
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Vite</span>
                  <span className="tech-tag">Tailwind CSS</span>
                  <span className="tech-tag">TypeScript</span>
                </div>
                
                <div className="project-footer">
                  <a href="https://novatech-ten-eta.vercel.app/" target="_blank" className="project-link">
                    Visit Live Site
                    <span className="external-icon">↗</span>
                  </a>
                  <a href="https://wa.me/923145315196?text=Hi Faiz! I'm interested in the Tech Nova project. Can we discuss similar work?" target="_blank" className="project-discuss">
                    <span className="whatsapp-icon">💬</span> Discuss
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-card neon-border fade-in delay-200">
              <div className="card-content">
                <div className="project-header">
                  <div>
                    <div className="project-category">Management</div>
                    <h3 className="project-title">TaskFlow Pro</h3>
                    <p className="project-subtitle">Project Management System</p>
                  </div>
                  <span className="project-status status-in-progress">
                    <div className="status-dot"></div>
                    IN PROGRESS
                  </span>
                </div>
                
                <p className="project-description">
                  Comprehensive project management tool with team collaboration, task tracking, and real-time updates.
                </p>
                
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Socket.io</span>
                </div>
                
                <div className="project-footer">
                  <a href="#" className="project-link">
                    Coming Soon
                    <span className="clock-icon">⏰</span>
                  </a>
                  <a href="https://wa.me/923145315196?text=Hi Faiz! I'm interested in the TaskFlow Pro project. Can we discuss similar work?" target="_blank" className="project-discuss">
                    <span className="whatsapp-icon">💬</span> Discuss
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-card neon-border fade-in delay-300">
              <div className="card-content">
                <div className="project-header">
                  <div>
                    <div className="project-category">Business Website</div>
                    <h3 className="project-title">Barista Coffee Shop</h3>
                    <p className="project-subtitle">Restaurant Website</p>
                  </div>
                  <span className="project-status status-live">
                    <div className="status-dot"></div>
                    LIVE
                  </span>
                </div>
                
                <p className="project-description">
                  Elegant café website with interactive menu, online reservations, and responsive design.
                </p>
                
                <div className="project-tech">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">GSAP</span>
                </div>
                
                <div className="project-footer">
                  <a href="https://coffeeshop1-one.vercel.app/" target="_blank" className="project-link">
                    Visit Live Site
                    <span className="external-icon">↗</span>
                  </a>
                  <a href="https://wa.me/923145315196?text=Hi Faiz! I'm interested in the Barista Coffee Shop project. Can we discuss similar work?" target="_blank" className="project-discuss">
                    <span className="whatsapp-icon">💬</span> Discuss
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-card neon-border fade-in delay-400">
              <div className="card-content">
                <div className="project-header">
                  <div>
                    <div className="project-category">Educational</div>
                    <h3 className="project-title">Ski New Generation</h3>
                    <p className="project-subtitle">Ski School Website</p>
                  </div>
                  <span className="project-status status-live">
                    <div className="status-dot"></div>
                    LIVE
                  </span>
                </div>
                
                <p className="project-description">
                  Professional ski school website built with TypeScript, featuring course booking, schedules, and instructor profiles.
                </p>
                
                <div className="project-tech">
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">Tailwind CSS</span>
                </div>
                
                <div className="project-footer">
                  <a href="https://skinewgen.com/" target="_blank" className="project-link">
                    Visit Live Site
                    <span className="external-icon">↗</span>
                  </a>
                  <a href="https://wa.me/923145315196?text=Hi Faiz! I'm interested in the Ski New Generation project. Can we discuss similar work?" target="_blank" className="project-discuss">
                    <span className="whatsapp-icon">💬</span> Discuss
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-card neon-border fade-in delay-500">
              <div className="card-content">
                <div className="project-header">
                  <div>
                    <div className="project-category">Gaming</div>
                    <h3 className="project-title">JavaScript Game</h3>
                    <p className="project-subtitle">Interactive Web Game</p>
                  </div>
                  <span className="project-status status-live">
                    <div className="status-dot"></div>
                    LIVE
                  </span>
                </div>
                
                <p className="project-description">
                  Interactive browser-based game built with vanilla JavaScript, featuring engaging gameplay and responsive controls.
                </p>
                
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">Canvas API</span>
                </div>
                
                <div className="project-footer">
                  <a href="https://game1-ruddy.vercel.app/" target="_blank" className="project-link">
                    Visit Live Site
                    <span className="external-icon">↗</span>
                  </a>
                  <a href="https://wa.me/923145315196?text=Hi Faiz! I'm interested in the JavaScript Game project. Can we discuss similar work?" target="_blank" className="project-discuss">
                    <span className="whatsapp-icon">💬</span> Discuss
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 fade-in delay-600">
            <a href="https://github.com/mrfaizmalik609-dotcom" target="_blank" className="github-button">
              <span className="github-icon">🐱</span>
              View All Projects on GitHub
              <span className="arrow-icon">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title"><span className="gradient-text">Let's Build Something Amazing</span></h2>
            <p className="section-description">
              Ready to transform your ideas into exceptional digital experiences? 
              I'm here to help you create fast, scalable, and beautiful web applications 
              that drive real business results.
            </p>
          </div>
          
          <div className="contact-grid">
            <a href="https://wa.me/923145315196?text=Hi Faiz! I'd like to discuss a project with you." target="_blank" className="contact-card neon-border fade-in">
              <div className="contact-icon whatsapp-icon">
                <span className="whatsapp-icon">💬</span>
              </div>
              <h3>WhatsApp</h3>
              <p>Quick response guaranteed</p>
              <div className="contact-info whatsapp-info">+92 3145315196</div>
            </a>
            
            <a href="mailto:mrfaizmalik609@gmail.com?subject=Project Inquiry&body=Hi Faiz! I'm interested in discussing a project with you." className="contact-card neon-border fade-in delay-100">
              <div className="contact-icon email-icon">
                <span className="email-icon">✉️</span>
              </div>
              <h3>Email</h3>
              <p>Detailed discussions</p>
              <div className="contact-info email-info">mrfaizmalik609@gmail.com</div>
            </a>
            
            <a href="https://www.linkedin.com/in/faiz-malik-2909b8287/" target="_blank" className="contact-card neon-border fade-in delay-200">
              <div className="contact-icon linkedin-icon">
                <span className="linkedin-icon">🔗</span>
              </div>
              <h3>LinkedIn</h3>
              <p>Professional network</p>
              <div className="contact-info linkedin-info">Faiz Malik</div>
            </a>
            
            <a href="https://github.com/mrfaizmalik609-dotcom" target="_blank" className="contact-card neon-border fade-in delay-300">
              <div className="contact-icon github-icon">
                <span className="github-icon">🐱</span>
              </div>
              <h3>GitHub</h3>
              <p>View my code</p>
              <div className="contact-info github-info">mrfaizmalik609-dotcom</div>
            </a>
          </div>
          
          <div className="cta-card fade-in delay-400">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-description">
              Let's discuss your requirements and turn your vision into reality. 
              I'm available for both short-term projects and long-term collaborations.
            </p>
            
            <div className="cta-buttons">
              <a href="https://wa.me/923145315196?text=Hi Faiz! I have a project in mind and would like to get a quote." target="_blank" className="primary-btn">
                <span className="whatsapp-icon">💬</span> Get Free Quote
              </a>
              <a href="mailto:mrfaizmalik609@gmail.com?subject=Project Discussion&body=Hi Faiz! I'd like to schedule a call to discuss my project requirements." className="secondary-btn">
                <span className="email-icon">✉️</span> Schedule Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <a href="#" className="footer-logo">
              <div className="footer-icon">FM</div>
              <div className="footer-text">
                <div className="footer-name">Faiz Malik</div>
                <div className="footer-title">Full‑Stack Developer</div>
              </div>
            </a>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Faiz Malik. All rights reserved. Built with HTML, CSS & JavaScript.</p>
            <p>Available for freelance work worldwide • Based in Pakistan</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        :root {
          --indigo-500: #6366f1;
          --purple-500: #8b5cf6;
          --fuchsia-500: #d946ef;
          --slate-950: #020617;
          --slate-900: #0f172a;
          --slate-800: #1e293b;
          --slate-700: #334155;
          --slate-600: #475569;
          --slate-500: #64748b;
          --slate-400: #94a3b8;
          --slate-300: #cbd5e1;
          --slate-200: #e2e8f0;
          --slate-100: #f1f5f9;
          --slate-50: #f8fafc;
          --emerald-500: #10b981;
          --blue-500: #3b82f6;
          --cyan-500: #06b6d4;
          --teal-500: #14b8a6;
          --amber-500: #f59e0b;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: var(--slate-950);
          color: var(--slate-100);
          line-height: 1.6;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Header Styles */
        header {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(2, 6, 23, 0.9);
          backdrop-filter: blur(20px);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          display: flex;
          height: 3rem;
          width: 3rem;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          background: linear-gradient(135deg, var(--indigo-500), var(--purple-500), var(--fuchsia-500));
          color: white;
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.4), 0 0 60px rgba(99, 102, 241, 0.2);
          animation: glow 4s ease-in-out infinite;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-name {
          font-size: 1.125rem;
          font-weight: bold;
          color: white;
        }

        .logo-title {
          font-size: 0.75rem;
          color: var(--slate-400);
        }

        nav {
          display: none;
          gap: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        @media (min-width: 768px) {
          nav {
            display: flex;
          }
        }

        nav a {
          color: var(--slate-300);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        nav a:hover {
          color: white;
          transform: scale(1.05);
        }

        nav a::after {
          content: '';
          position: absolute;
          bottom: -0.25rem;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, var(--indigo-500), var(--purple-500));
          transition: width 0.3s ease;
        }

        nav a:hover::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
        }

        .whatsapp-btn {
          display: flex;
          padding: 0.75rem;
          border-radius: 0.75rem;
          background-color: var(--emerald-500);
          color: white;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .whatsapp-btn:hover {
          background-color: #0da271;
          transform: scale(1.1);
        }

        .hire-btn {
          display: none;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          background: linear-gradient(to right, var(--indigo-500), var(--purple-500));
          color: white;
          font-size: 0.875rem;
          font-weight: bold;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        @media (min-width: 768px) {
          .hire-btn {
            display: inline-flex;
          }
        }

        .hire-btn:hover {
          transform: scale(1.05);
        }

        /* Hero Section */
        .hero {
          position: relative;
          padding: 5rem 0;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .hero {
            padding: 8rem 0;
          }
        }

        .hero-grid {
          display: grid;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 4rem;
          }
        }

        .availability {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          background: linear-gradient(to right, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          color: var(--indigo-300);
          font-size: 0.875rem;
          border: 1px solid rgba(99, 102, 241, 0.3);
          backdrop-filter: blur(8px);
          margin-bottom: 2rem;
        }

        .availability-dot {
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 9999px;
          background-color: var(--emerald-400);
          animation: pulse 2s ease-in-out infinite;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 4.5rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 5.5rem;
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--indigo-500), var(--purple-500), var(--fuchsia-500));
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
        }

        .gradient-text::after {
          content: '';
          position: absolute;
          bottom: -0.75rem;
          left: 0;
          right: 0;
          height: 0.5rem;
          background: linear-gradient(to right, var(--indigo-400), var(--purple-400), var(--fuchsia-400));
          opacity: 0.6;
          filter: blur(0.25rem);
          border-radius: 0.25rem;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--slate-300);
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        @media (min-width: 768px) {
          .hero-description {
            font-size: 1.5rem;
          }
        }

        .hero-description strong {
          font-weight: bold;
          background: linear-gradient(135deg, var(--indigo-500), var(--purple-500), var(--fuchsia-500));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 1.5rem;
          background: linear-gradient(to right, var(--indigo-500), var(--purple-500), var(--fuchsia-500));
          color: white;
          font-size: 1.125rem;
          font-weight: bold;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.25);
          transition: all 0.3s ease;
        }

        .primary-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
        }

        .secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 1.125rem;
          font-weight: bold;
          text-decoration: none;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }

        .contact-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px極端32px rgba(0, 0, 0, 0.3);
          color: var(--slate-300);
          font-size: 0.875rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          color: white;
          transform: scale(1.05);
        }

        /* Hero Card */
        .hero-card {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          animation: float 6s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .hero-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
        }

        .neon-border {
          position: relative;
          border: 2px solid transparent;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9));
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
        }

        .neon-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          padding: 2px;
          background: linear-gradient(45deg, var(--indigo-500), var(--purple-500), var(--fuchsia-500), var(--amber-500), var(--emerald-500));
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
          z-index: -1;
          animation: gradient 3s ease infinite;
          background-size: 300% 300%;
        }

        .card-content {
          position: relative;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--emerald-300);
          font-size: 0.875rem;
          font-weight: 600;
        }

        .status-dot {
          height: 0.75rem;
          width: 0.75rem;
          border-radius: 9999px;
          background-color: var(--emerald-400);
          animation: pulse 2s ease-in-out infinite;
        }

        .location {
          font-size: 0.75rem;
          color: var(--slate-400);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
        }

        .card-description {
          color: var(--slate-300);
          line-height: 1.7;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .tech-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .tech-item {
          padding: 0.75rem;
          border-radius: 0.5rem;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--slate-300);
          transition: all 極端0.3s ease;
        }

        .tech-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
          color: white;
        }

        .card-actions {
          display: flex;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-primary-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border-radius: 0.75rem;
          background: linear-gradient(to right, var(--indigo-500), var(--purple-500));
          color: white;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .card-primary-btn:hover {
          transform: scale(1.05);
        }

        .card-secondary-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: rgba(15, 23, 42, 極端0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .card-secondary-btn:hover {
          transform: scale(1.05);
        }

        /* Section Styles */
        section {
          padding: 5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        section:hover {
          background: rgba(2, 6, 23, 0.5);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.25rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }

        @極端media (min-width: 768px) {
          .section-title {
            font-size: 3.75rem;
          }
        }

        .section-description {
          font-size: 1.25rem;
          color: var(--slate-300);
          max-width: 56rem;
          margin: 0 auto;
        }

        /* About Section */
        .about-grid {
          display: grid;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 4rem;
          }
        }

        .about-content h3 {
          font-size: 1.875rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1.5rem;
        }

        .about-text {
          color: var(--slate-300);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          background: var(--blue-500);
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          transform: scale(1.05);
        }

        .github-link {
          background: var(--slate-700);
        }

        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skills-container h4 {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
        }

        .skill {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          color: var(--slate-300);
          font-weight: 500;
        }

        .skill-percentage {
          color: var(--slate-400);
          font-size: 0.875rem;
        }

        .skill-bar {
          height: 0.5rem;
          background-color: var(--slate-800);
          border-radius: 9999px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(to right, var(--indigo-500), var(--purple-500));
          border-radius: 9999px;
          animation: slideIn 1.5s ease-out forwards;
        }

        /* Achievements Section */
        .achievements-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .achievements-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .achievement-card {
          border-radius: 1.5rem;
          padding: 2rem;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(20極端px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 極端0 8px 32px rgba(0, 0, 0, 0.3);
          text-align: center;
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(99, 102, 241, 0.5);
        }

        .achievement-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 1rem;
          background: linear-gradient(to bottom right, var(--indigo-500), var(--purple-500));
          color: white;
          margin-bottom: 1rem;
        }

        .achievement-number {
          font-size: 2.25rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, var(--indigo-500), var(--purple-500), var(--fuchsia-500));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (min-width: 768px) {
          .achievement-number {
            font-size: 3極端rem;
          }
        }

        .achievement-title {
          font-size: 1.125rem;
         極端font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
        }

        .achievement-description {
          color: var(--slate-400);
          font-size: 0.875rem;
        }

        /* Services Section */
        .services-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .services極端-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .service-card {
          border-radius: 1.5rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .service-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 1rem;
          background: linear-gradient(to bottom right, var(--indigo-500), var(--purple-500));
          color: white;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
        }

        .service-description {
          color: var(--slate-300);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .service-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .service-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: var(--slate-400);
        }

        .service-feature::before {
          content: '';
          display: block;
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 9999px;
          background-color: var(--indigo-400);
        }

        .service-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.75rem;
          background: linear-gradient(to right, var(--indigo-500), var(--purple-500));
          color: white;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .service-button:hover {
          transform: scale(1.05);
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
極端      }
        }

        .project-card {
          border-radius: 1.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px) scale(極端1.02);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .project-category {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--indigo-400);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.25rem;
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: var(--indigo-300);
        }

        .project-subtitle {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--極端slate-400);
        }

        .project-status {
          display: inline-flex;
          align-items: center;
          gap: 極端0.375rem;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: bold;
          flex-shrink: 0;
        }

        .status-live {
          background-color: rgba(16, 185, 129, 0.2);
          color: var(--emerald-300);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .status-in-progress {
          background-color: rgba(245, 158, 11, 0.2);
          color: var(--amber-300);
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .status-coming-soon {
          background-color: rgba(100, 116, 139, 0.2);
          color: var(--slate-300);
          border: 1px solid rgba(100, 116, 139, 0.3);
        }

        .status-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 9999px;
        }

        .status-live .status-dot {
          background-color: var(--emerald-400);
          animation: pulse 2s ease-in-out infinite;
        }

        .status-in-progress .status-dot {
          background-color: var(--amber-400);
        }

        .status-coming-soon .status極端-dot {
          background-color: var(--slate-400);
        }

        .project-description {
          color: var(--slate-300);
          font-size: 0.875rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          border-radius: 0.5rem;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--slate-300);
        }

        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--indigo-300);
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .極端project-link:hover {
          color: var(--indigo-200);
          transform: scale(1.05);
        }

        .project-discuss {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--slate-200);
          font-size: 0.875rem;
          font-weight: 600;
         極端text-decoration: none;
          transition: all 0.3s ease;
        }

        .project-discuss:hover {
          color: white;
          transform: scale(1.05);
        }

        .github-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          background: rgba極端(255, 255, 255, 0.05);
          color: white;
          font-size: 極端1.125rem;
          font-weight: bold;
          text-decoration: none;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
          margin: 3rem auto 0;
        }

        .github-button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }

        /* Contact Section */
        .contact-grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024極端px) {
          .contact-grid {
            grid-template-columns: repeat(4, 1極端fr);
          }
        }

        .contact-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: scale(1.05);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 1rem;
          color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: glow 4s ease-in-out infinite;
        }

        .whatsapp-icon {
          background: linear-gradient(to bottom right, var(--emerald-500), var(--teal-600));
        }

        .email-icon {
          background: linear-gradient(to bottom right, var(--blue-500), var(--cyan-600));
          animation-delay: 1s;
        }

        .linkedin-icon {
          background: linear-gradient(to bottom right, var(--blue-600), var(--indigo-700));
          animation-delay: 2s;
        }

        .github-icon {
          background: linear-gradient(to bottom right, var(--slate-700), var(--slate-900));
          animation-delay: 3s;
        }

        .contact-card h3 {
          font-size: 1.125rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
        }

        .contact-card p {
          color: var(--slate-400);
          font-size: 0.875rem;
        }

        .contact-info {
          font-size: 0.875rem;
          font-weight: 500;
        }

        .whatsapp-info {
          color: var(--emerald-300);
        }

        .email-info {
          color: var(--blue-300);
        }

        .linkedin-info {
          color: var(--blue-300);
        }

        .github-info {
          color: var(--slate-300);
        }

        .cta-card {
          border-radius: 1.5rem;
          padding: 3rem;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          text-align: center;
          max-width: 50rem;
          margin: 0 auto;
          .cta-buttons {
  display: flex;        /* fix: valid flex display */
  flex-wrap: wrap;      /* optional for smaller screens */
  gap: 2rem;            /* spacing between buttons */
  justify-content: center;
}

        }

        @media (min-width: 768px) {
          .cta-card {
            padding: 1rem;
          }
        }

        .cta-title {
          font-size: 1.875rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.125rem;
          color: var(--slate-300);
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display:極端 flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
        }

        /* Footer */
        footer {
          padding: 3rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .footer-content {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: inherit;
        }

        .footer-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.5rem;
          width: 2.5rem;
          border-radius: 0.75rem;
          background: linear-gradient(to bottom right, var(--indigo-500), var(--purple-500), var(--fuchsia-500));
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .footer-text {
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-text {
            text-align: left;
          }
        }

        .footer-name {
          font-weight: bold;
          color: white;
        }

        .footer-title {
          font-size: 0.875rem;
          color: var(--slate-400);
        }

極端        .footer-social {
          display: flex;
          gap: 5rem;
        }

        .footer-social a {
          color: var(--slate-400);
          transition: all 0.3s ease;
        }

        .footer-social a:hover {
          color: white;
          transform: scale(1.1);
        }

        .footer-bottom {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          font-size: 0.875rem;
          color: var(--slate-400);
        }

        .footer-bottom p {
          margin-bottom: 0.5rem;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
              opacity: 0;
              transform: translateY(2rem);
          }
          to {
              opacity: 1;
              transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
              transform: translateY(0px) rotate(0deg);
          }
          25% {
              transform: translateY(-10px) rotate(1deg);
          }
          50% {
              transform: translateY(-20px) rotate(0極端deg);
          }
          75% {
              transform: translateY(-10px) rotate(-1deg);
          }
        }

        @keyframes glow {
          0%, 100% {
              box-shadow: 0 0 30px rgba(99, 102, 241, 0.4), 0 0 60px rgba(99, 102, 241, 0.2);
          }
          50% {
              box-shadow: 0 0 50px rgba(99, 102, 241, 0.6), 極端0 0 80px rgba(99, 102, 241, 0.3);
          }
        }

        @keyframes gradient {
          0%, 100% {
              background-position: 0% 50%;
          }
          50% {
              background-position: 100% 50%;
          }
        }

        @keyframes slideIn {
          from {
              width: 0;
          }
          to {
              width: var(--skill-level);
          }
        }

        @keyframes pulse {
          0%, 100% {
              opacity: 1;
          }
          50% {
              opacity: 0.5;
          }
        }

        /* Utility Classes */
        .text-center {
          text-align: center;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .mt-8 {
          margin-top: 2rem;
        }

        .mb-6 {
          margin-bottom: 1.5rem;
        }

        /* Fade In Animation for Elements */
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .hero-title {
              font-size: 2.5rem;
          }
          
          .hero-description {
              font-size: 1.125rem;
          }
          
          .section-title {
              font-size: 2.5rem;
          }
          
          .primary-btn,
          .secondary-btn {
              padding: 0.875rem 1.5rem;
              font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Portfolio;