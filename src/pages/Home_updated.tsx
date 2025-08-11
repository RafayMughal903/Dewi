import { Link } from "react-router-dom";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { SiBlockchaindotcom } from "react-icons/si";

const Home: React.FC = () => {
  return (
    <div>
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
          <div className="container d-flex flex-column align-items-center">
            <h2 data-aos="fade-up" data-aos-delay={100}>
              INNOVATE. BUILD. SCALE.
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay={200}
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                maxWidth: "600px",
                margin: "0 auto",
                textAlign: "center",
                color: "#fff" // heading se match karta hua softer blue-gray
              }}
            >
              At <strong>XYTRA Labs</strong>, we craft cutting-edge digital solutions —
              from stunning websites to powerful applications — helping businesses grow in the modern world.
            </p>



            <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay={300}>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn-get-started"
              >
                Get Started
              </ScrollLink>

              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" target="_blank" rel="noopener noreferrer"
                className="glightbox btn-watch-video d-flex align-items-center"
                target="_blank"
                rel="noopener noreferrer"
              ><i className="bi bi-play-circle" />
                <span>Watch Video</span></a>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="about section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <h3>Shaping the Future with Innovative Digital Solutions</h3>
                <img
                  src="assets/img/about.jpg"
                  className="img-fluid rounded-4 mb-4"
                  alt="About XYTRA Labs"
                />
                <p>
                  At <strong>XYTRA Labs</strong>, we specialize in crafting modern, high-performance websites and applications
                  that help businesses grow and succeed in today’s competitive digital world. Our team of talented designers,
                  developers, and strategists work together to turn your vision into impactful, user-friendly solutions.
                </p>
                <p>
                  From concept to launch, we focus on innovation, quality, and precision. Whether it’s a sleek corporate website,
                  a powerful e-commerce platform, or a custom web application, we deliver results that drive engagement and growth.
                  At XYTRA Labs, your success is our mission.
                </p>

              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={250}>
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    At <strong>XYTRA Labs</strong>, we believe in turning ideas into impactful digital experiences.
                    With a passion for innovation and excellence, we deliver solutions that empower businesses to grow in the modern era.
                  </p>

                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill" />
                      <span>Custom-designed websites that are fast, responsive, and visually stunning.</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" />
                      <span>Powerful web applications tailored to your unique business needs.</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" />
                      <span>End-to-end digital solutions — from concept and design to development and launch —
                        ensuring your brand stands out online.</span>
                    </li>
                  </ul>

                  <p>
                    Our mission is simple — to help your business innovate, build, and scale with confidence.
                    With a dedicated team and cutting-edge technology, <strong>XYTRA Labs</strong> is your trusted
                    partner in digital transformation.
                  </p>

                  <div className="position-relative mt-4">
                    <img src="assets/img/about-2.jpg" className="img-fluid rounded-4" alt="" />
                    <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" target="_blank" rel="noopener noreferrer" className="glightbox pulsating-play-btn" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* /About Section */}
        {/* Stats Section */}
        <section id="stats" className="stats section light-background">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-emoji-smile color-blue flex-shrink-0" />
                  <div>
                    <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>{/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-journal-richtext color-orange flex-shrink-0" />
                  <div>
                    <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                    <p>Projects</p>
                  </div>
                </div>
              </div>{/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-headset color-green flex-shrink-0" />
                  <div>
                    <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>{/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-people color-pink flex-shrink-0" />
                  <div>
                    <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>{/* End Stats Item */}
            </div>
          </div>
        </section>{/* /Stats Section */}
        {/* Services Section */}
        <section id="services" className="services section">
          {/* Section Title */}
          <div
  className="container section-title"
  data-aos="fade-up"
  style={{ textAlign: "center" }}
>
  <h2>Services</h2>
  <p>Featured Services<br /></p>
</div>

          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-5">

              {/* Box 1 - Web Development */}
              <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay={200}>
                <div className="service-item flex-fill">
                  <div className="img">
                    <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?q=80&semt=ais_hybrid&w=740" className="img-fluid" alt="Web Development" />
                  </div>
                  <div className="details position-relative">
                    <div className="icon">
                      <i className="bi bi-code-slash" />
                    </div>
                    <a href="service-details" className="stretched-link">
                      <h3>Web Development</h3>
                    </a>
                    <p>
                      At <strong>XYTRA Labs</strong>, we create modern, responsive, and high-performance websites
                      tailored to your business needs. Our web development process focuses on speed, security,
                      and seamless user experience — helping your brand stand out in the digital world.
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 2 - Blockchain Development */}
              <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay={300}>
                <div className="service-item flex-fill">
                  <div className="img">
                    <img src="https://static.vecteezy.com/system/resources/previews/008/895/466/non_2x/blockchain-development-illustration-concept-vector.jpg" className="img-fluid" alt="Blockchain Development" />
                  </div>
                  <div className="details position-relative">
                    <div className="icon">
                      <i className="bi bi-diagram-3" />
                    </div>
                    <a href="service-details" className="stretched-link">
                      <h3>Blockchain Development</h3>
                    </a>
                    <p>
                      At <strong>XYTRA Labs</strong>, we build secure and scalable blockchain solutions
                      that empower businesses for the decentralized future. Our focus is on transparency,
                      efficiency, and innovation — from smart contracts to decentralized applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 3 - Digital Marketing */}
              <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay={400}>
                <div className="service-item flex-fill">
                  <div className="img">
                    <img src="https://img.freepik.com/premium-vector/low-code-development-concept-illustration_114360-7294.jpg?semt=ais_hybrid&w=740" className="img-fluid" alt="Digital Marketing" />
                  </div>
                  <div className="details position-relative">
                    <div className="icon">
                      <i className="bi bi-megaphone" />
                    </div>
                    <a href="service-details" className="stretched-link">
                      <h3>Digital Marketing</h3>
                    </a>
                    <p>
                      At <strong>XYTRA Labs</strong>, our digital marketing strategies are designed to
                      boost your brand visibility, engage your audience, and drive conversions.
                      From SEO and social media to targeted ad campaigns, we help you achieve
                      measurable results and sustainable growth.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </section>{/* /Services Section */}
        {/* Clients Section */}
        <section id="clients" className="clients section light-background">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-xl-2 col-md-3 col-6 client-logo">
                <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
              </div>{/* End Client Item */}
              <div className="col-xl-2 col-md-3 col-6 client-logo">
                <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
              </div>{/* End Client Item */}
              <div className="col-xl-2 col-md-3 col-6 client-logo">
                <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
              </div>{/* End Client Item */}
              <div className="col-xl-2 col-md-3 col-6 client-logo">
                <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
              </div>{/* End Client Item */}
              <div className="col-xl-2 col-md-3 col-6 client-logo">
                <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
              </div>{/* End Client Item */}
              <div className="col-xl-2 col-md-3 col-6 client-logo">
                <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
              </div>{/* End Client Item */}
            </div>
          </div>
        </section>{/* /Clients Section */}
        {/* Features Section */}
        <section id="features" className="features section">
          <div className="container">
            <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay={100}>
              <li className="nav-item col-3">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                  <i className="bi bi-binoculars" />
                  <h4 className="d-none d-lg-block">About Xytra Labs</h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                  <i className="bi bi-box-seam" />
                  <h4 className="d-none d-lg-block">Our Services</h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                  <i className="bi bi-brightness-high" />
                  <h4 className="d-none d-lg-block">Our Vision</h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4">
                  <i className="bi bi-command" />
                  <h4 className="d-none d-lg-block">Why Choose Us</h4>
                </a>
              </li>
            </ul>

            <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>

              {/* Tab 1: About Xytra Labs */}
              <div className="tab-pane fade active show" id="features-tab-1">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Innovating the Future with Technology</h3>
                    <p className="fst-italic">
                      Xytra Labs is a cutting-edge technology company specializing in web development, blockchain solutions, and digital marketing.
                      Our mission is to empower businesses with modern, scalable, and efficient digital solutions.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all" /> <span>Expert team of developers and strategists.</span></li>
                      <li><i className="bi bi-check2-all" /> <span>Customized solutions tailored to client needs.</span></li>
                      <li><i className="bi bi-check2-all" /> <span>Focus on innovation, scalability, and user experience.</span></li>
                    </ul>
                    <p>
                      Whether you’re a startup or an enterprise, Xytra Labs ensures your digital presence stands out in an ever-evolving market.
                    </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="assets/img/working-1.jpg" alt="Xytra Labs" className="img-fluid" />
                  </div>
                </div>
              </div>

              {/* Tab 2: Our Services */}
              <div className="tab-pane fade" id="features-tab-2">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Comprehensive Digital Solutions</h3>
                    <p>
                      We offer a complete range of digital services including:
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all" /> <span>Custom Web Development</span></li>
                      <li><i className="bi bi-check2-all" /> <span>Blockchain Development & Smart Contracts</span></li>
                      <li><i className="bi bi-check2-all" /> <span>Search Engine Optimization & Digital Marketing</span></li>
                      <li><i className="bi bi-check2-all" /> <span>UI/UX Design & Branding</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="assets/img/working-2.jpg" alt="Our Services" className="img-fluid" />
                  </div>
                </div>
              </div>

              {/* Tab 3: Our Vision */}
              <div className="tab-pane fade" id="features-tab-3">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Driving Innovation Globally</h3>
                    <p>
                      Our vision is to become a global leader in delivering high-tech, future-ready solutions that drive growth and transformation for our clients.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all" /> <span>Constant innovation to stay ahead of trends.</span></li>
                      <li><i className="bi bi-check2-all" /> <span>Creating impact through technology.</span></li>
                      <li><i className="bi bi-check2-all" /> <span>Building sustainable, scalable digital ecosystems.</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="assets/img/working-3.jpg" alt="Our Vision" className="img-fluid" />
                  </div>
                </div>
              </div>

              {/* Tab 4: Why Choose Us */}
              <div className="tab-pane fade" id="features-tab-4">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Partnering for Success</h3>
                    <p>
                      We believe in long-term partnerships built on trust, innovation, and measurable results.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all" /> <span>Proven track record of successful projects.</span></li>
                      <li><i className="bi bi-check2-all" /> <span>Client-centric approach for tailored results.</span></li>
                      <li><i className="bi bi-check2-all" /> <span>Commitment to delivering on time and within budget.</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="assets/img/working-4.jpg" alt="Why Choose Us" className="img-fluid" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services 2 Section */}
        <section id="services-2" className="services-2 section light-background">
          {/* Section Title */}
          <div
  className="container section-title"
  data-aos="fade-up"
  style={{ textAlign: "center" }}
>
  <h2>Services</h2>
  <p>CHECK OUR SERVICES</p>
</div>

          <div className="container">
            <div className="row gy-4">

              {/* 1 - Web Development */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="service-item d-flex position-relative h-100">
                  <i className="bi bi-code-slash icon flex-shrink-0" />
                  <div>
                    <h4 className="title">
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} className="stretched-link">
                        Web Development
                      </ScrollLink>
                    </h4>
                    <p className="description">
                      At <strong>XYTRA Labs</strong>, we design and develop responsive, fast, and secure websites
                      tailored to your business needs. From e-commerce to custom web apps, we ensure your online
                      presence is strong and impactful.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2 - Blockchain Development */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="service-item d-flex position-relative h-100">
                  <SiBlockchaindotcom className="icon flex-shrink-0" style={{ fontSize: "40px" }} />
                  <div>
                    <h4 className="title">
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} className="stretched-link">
                        Blockchain Development
                      </ScrollLink>
                    </h4>
                    <p className="description">
                      We build secure, scalable blockchain solutions including smart contracts, decentralized apps,
                      and crypto integrations — empowering your business with transparency and innovation.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 - Digital Marketing */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="service-item d-flex position-relative h-100">
                  <i className="bi bi-megaphone icon flex-shrink-0" />
                  <div>
                    <h4 className="title">
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} className="stretched-link">
                        Digital Marketing
                      </ScrollLink>
                    </h4>
                    <p className="description">
                      From SEO and social media campaigns to targeted ads, we create strategies that boost brand
                      awareness, attract leads, and increase conversions for sustainable business growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 - SEO */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="service-item d-flex position-relative h-100">
                  <i className="bi bi-graph-up-arrow icon flex-shrink-0" />
                  <div>
                    <h4 className="title">
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} className="stretched-link">
                        SEO Optimization
                      </ScrollLink>
                    </h4>
                    <p className="description">
                      Our SEO services help your website rank higher in search results, driving more traffic and
                      ensuring your content reaches the right audience organically.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5 - AI Integration */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={500}>
                <div className="service-item d-flex position-relative h-100">
                  <i className="bi bi-cpu icon flex-shrink-0" />
                  <div>
                    <h4 className="title">
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} className="stretched-link">
                        AI Integration
                      </ScrollLink>
                    </h4>
                    <p className="description">
                      We integrate advanced AI tools and automation into your business processes — from chatbots
                      to predictive analytics — making operations smarter and faster.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6 - Cyber Security */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={600}>
                <div className="service-item d-flex position-relative h-100">
                  <i className="bi bi-shield-lock icon flex-shrink-0" />
                  <div>
                    <h4 className="title">
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} className="stretched-link">
                        Cyber Security
                      </ScrollLink>
                    </h4>
                    <p className="description">
                      Protect your digital assets with our robust cybersecurity solutions, including threat detection,
                      vulnerability assessments, and real-time monitoring.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>{/* /Services 2 Section */}
        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section dark-background">
          <img src="assets/img/testimonials-bg.jpg" className="testimonials-bg" alt="" />
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="swiper init-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                        Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram
                        malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis
                        minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim
                        velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum
                        veniam.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim
                        culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
                        quid.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>{/* /Testimonials Section */}
        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section">
          {/* Section Title */}
          <div
  className="container section-title"
  data-aos="fade-up"
  style={{ textAlign: "center" }}
>
  <h2>Portfolio</h2>
  <p>CHECK OUR PORTFOLIO</p>
</div>

          <div className="container">
            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
              <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay={100}>
              </ul>{/* End Portfolio Filters */}
              <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay={200}>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <img
  src="assets/img/zyacom.png"
  alt="Embedded"
  style={{ width: "100%", height: "250px", objectFit: "cover" }}
/>




                    <div className="portfolio-info">
                      <h4>Zyacom</h4>
<p>Advanced IT solutions and innovative digital services</p>

                      <Link to="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
                      <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
                    </div>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <img
  src="assets/img/nokar.png"
  alt="Embedded"
  style={{ width: "100%", height: "250px", objectFit: "cover" }}
/>

                    <div className="portfolio-info">
<h4>Workforce App</h4>
<p>Connecting teams and boosting workplace productivity</p>


                      <Link to="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
                      <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
                    </div>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <img
  src="assets/img/orain.png"
  alt="Embedded"
  style={{ width: "100%", height: "250px", objectFit: "cover" }}
/>

                    <div className="portfolio-info">
                      <h4>Orain Solutions</h4>
<p>Innovative automation tools for smarter business operations</p>

                      <Link to="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
                      <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
                    </div>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <img
  src="assets/img/braig.png"
  alt="Embedded"
  style={{ width: "100%", height: "250px", objectFit: "cover" }}
/>

                    <div className="portfolio-info">
                      <h4>Braig Branding</h4>
<p>Innovative brand identity solutions that leave a lasting impression</p>

                      <Link to="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
                      <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
                    </div>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <img
  src="assets/img/employee.png"
  alt="Embedded"
  style={{ width: "100%", height: "250px", objectFit: "cover" }}
/>

                    <div className="portfolio-info">
                      <h4>Employee Hub</h4>
<p>Streamlined tools and resources to empower your workforce</p>

                      <Link to="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
                      <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
                    </div>
                  </div>
                </div>{/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <img
  src="assets/img/eye.jpg"
  alt="Embedded"
  style={{ width: "100%", height: "250px", objectFit: "cover" }}
/>

                    <div className="portfolio-info">
                      <h4>Vision AI</h4>
<p>Smart image recognition and real-time visual analytics</p>

                      <Link to="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
                      <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
                    </div>
                  </div>
                </div>{/* End Portfolio Item */}
              </div>{/* End Portfolio Container */}
            </div>
          </div>
        </section>{/* /Portfolio Section */}
        {/* Team Section */}
        <section id="team" className="team section light-background">
          {/* Section Title */}
          <div
  className="container section-title"
  data-aos="fade-up"
  style={{ textAlign: "center" }}
>
  <h2>Team</h2>
  <p>CHECK OUR TEAM</p>
</div>

          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="member">
                  <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Walt=""er White</h4>
                    <span>Chief Executive Officer</span>
                    <div className="social">
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} ><i className="bi bi-twitter-x" /></ScrollLink>
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} ><i className="bi bi-facebook" /></ScrollLink>
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} ><i className="bi bi-instagram" /></ScrollLink>
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} ><i className="bi bi-linkedin" /></ScrollLink>
                    </div>
                  </div>
                </div>
              </div>{/* End Team Member */}
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="member">
                  <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} ><i className="bi bi-twitter-x" /></ScrollLink>
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} ><i className="bi bi-facebook" /></ScrollLink>
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} ><i className="bi bi-instagram" /></ScrollLink>
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} ><i className="bi bi-linkedin" /></ScrollLink>
                    </div>
                  </div>
                </div>
              </div>{/* End Team Member */}
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="member">
                  <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <div className="social">
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} ><i className="bi bi-twitter-x" /></ScrollLink>
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} ><i className="bi bi-facebook" /></ScrollLink>
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} ><i className="bi bi-instagram" /></ScrollLink>
                      <ScrollLink to="" smooth={true} duration={500} offset={-70} ><i className="bi bi-linkedin" /></ScrollLink>
                    </div>
                  </div>
                </div>
              </div>{/* End Team Member */}
            </div>
          </div>
        </section>{/* /Team Section */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div
  className="container section-title"
  data-aos="fade-up"
  style={{ textAlign: "center" }}
>
  <h2>Contact</h2>
  <p>Contact Xytra Labs today for expert assistance and cutting-edge services</p>
</div>

          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-6 ">
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay={200}>
                      <i className="bi bi-geo-" />
                      <h3>Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="col-md-6">
                    <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay={300}>
                      <i className="bi bi-telephone" />
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="col-md-6">
                    <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay={400}>
                      <i className="bi bi-envelope" />
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>{/* End Info Item */}
                </div>
              </div>
              <div className="col-lg-6">
                <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay={500}>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 ">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="col-md-12">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows={4} placeholder="Message" required defaultValue={""} />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>{/* End Contact Form */}
            </div>
          </div>
        </section>{/* /Contact Section */}
      </main>
    </div>
  );
};

export default Home;
