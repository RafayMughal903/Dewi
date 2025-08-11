import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLink = (href: string, text: string, className = "") => (
    <ScrollLink
      to={href.replace("#", "")}
      smooth={true}
      duration={500}
      offset={-70}
      className={className}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {text}
    </ScrollLink>
  );

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${
        isScrolled ? "scrolled" : ""
      }`}
      style={{
        background: isScrolled ? "#fff" : "transparent",
        transition: "0.3s",
        boxShadow: isScrolled ? "0px 2px 10px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
 <img
    src="assets/img/xytra.png.png"
    alt="Dewi Logo"
    className="sitename"
    style={{ height: "90px", width: "auto" }} // yahan size control hoga
  />

        </a>

        {/* Desktop Menu */}
        <nav
          id="navmenu"
          className="navmenu d-none d-xl-block"
          style={{
            display: isMobileMenuOpen ? "none" : "block",
          }}
        >
          <ul style={{ display: "flex", gap: "20px", margin: 0 }}>
            <li>{renderLink("#hero", "Home", "active")}</li>
            <li>{renderLink("#about", "About")}</li>
            <li>{renderLink("#services", "Services")}</li>
            <li>{renderLink("#portfolio", "Portfolio")}</li>
            <li>{renderLink("#team", "Team")}</li>
            <li>{renderLink("#contact", "Contact")}</li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        

        {/* Desktop Get Started */}
        {renderLink("#about", "Get Started", "cta-btn d-xl-block")}
        <i
          className={`mobile-nav-toggle d-xl-none bi ${
            isMobileMenuOpen ? "bi-x" : "bi-list"
          }`}
          style={{
            fontSize: "28px",
            cursor: "pointer",
            zIndex: 1001,
            color: "black",
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        ></i>

        {/* Mobile Full-Screen Menu */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#fff",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            {renderLink("#hero", "Home")}
            {renderLink("#about", "About")}
            {renderLink("#services", "Services")}
            {renderLink("#portfolio", "Portfolio")}
            {renderLink("#team", "Team")}
            {renderLink("#contact", "Contact")}

            {/* Get Started button for mobile */}
            {renderLink("#about", "Get Started", "cta-btn")}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
