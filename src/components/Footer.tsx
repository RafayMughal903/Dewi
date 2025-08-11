import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
  const renderLink = (href: string, text: React.ReactNode, className = "") => {
    if (href.startsWith("#")) {
      return (
        <ScrollLink
          to={href.replace("#", "")}
          smooth={true}
          duration={500}
          offset={-70}
          className={className}
        >
          {text}
        </ScrollLink>
      );
    }
    if (!href.startsWith("http") && !href.startsWith("https")) {
      return (
        <Link to={href} className={className}>
          {text}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {text}
      </a>
    );
  };

  return (
    <footer id="footer" className="footer dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            {renderLink("/", <span className="sitename">Dewi</span>, "logo d-flex align-items-center")}
            <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              {renderLink("/twitter", <i className="bi bi-twitter-x"></i>)}
              {renderLink("/facebook", <i className="bi bi-facebook"></i>)}
              {renderLink("/instagram", <i className="bi bi-instagram"></i>)}
              {renderLink("/linkedin", <i className="bi bi-linkedin"></i>)}
            </div>
          </div>

          {/* <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> {renderLink("/", "Home")}</li>
              <li><i className="bi bi-chevron-right"></i> {renderLink("#about", "About us")}</li>
              <li><i className="bi bi-chevron-right"></i> {renderLink("#services", "Services")}</li>
              <li><i className="bi bi-chevron-right"></i> {renderLink("#terms", "Terms of service")}</li>
              <li><i className="bi bi-chevron-right"></i> {renderLink("#privacy", "Privacy policy")}</li>
            </ul>
          </div> */}

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> {renderLink("#web-design", "Web Design")}</li>
              <li><i className="bi bi-chevron-right"></i> {renderLink("#web-development", "Web Development")}</li>
              <li><i className="bi bi-chevron-right"></i> {renderLink("#product-management", "Product Management")}</li>
              <li><i className="bi bi-chevron-right"></i> {renderLink("#marketing", "Marketing")}</li>
              <li><i className="bi bi-chevron-right"></i> {renderLink("#graphic-design", "Graphic Design")}</li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Subscribe to our newsletter and receive the latest news about our products and services!
            </p>
            <form action="forms/newsletter.php" method="post" className="php-email-form">
              <div className="newsletter-form">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your subscription request has been sent. Thank you!
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Dewi</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by {renderLink("https://bootstrapmade.com/", "BootstrapMade")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
