import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const StarterPage: React.FC = () => {
  const renderLink = (href: string, text: React.ReactNode) => {
    if (href.startsWith("#")) {
      return (
        <ScrollLink
          to={href.replace("#", "")}
          smooth={true}
          duration={500}
          offset={-70}
        >
          {text}
        </ScrollLink>
      );
    }
    if (!href.startsWith("http") && !href.startsWith("https")) {
      return <Link to={href}>{text}</Link>;
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  };

  return (
    <main className="main">
      {/* Page Title */}
      <div
        className="page-title dark-background"
        data-aos="fade"
        style={{ backgroundImage: "url(assets/img/page-title-bg.webp)" }}
      >
        <div className="container position-relative">
          <h1>Starter Page</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
            quibusdam quia assumenda numquam molestias.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>{renderLink("/", "Home")}</li>
              <li className="current">Starter Page</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* End Page Title */}

      {/* Starter Section Section */}
      <section id="starter-section" className="starter-section section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Starter Section</h2>
          <p>
            Starter Section Title
            <br />
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up">
          <p>Use this page as a starter for your own custom pages.</p>
        </div>
      </section>
      {/* /Starter Section Section */}
    </main>
  );
};

export default StarterPage;
