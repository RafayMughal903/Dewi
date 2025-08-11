import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const PortfolioDetails: React.FC = () => {
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
          <h1>Portfolio Details</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
            quibusdam quia assumenda numquam molestias.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>{renderLink("/", "Home")}</li>
              <li className="current">Portfolio Details</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* End Page Title */}

      {/* Portfolio Details Section */}
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper init-swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src="assets/img/portfolio/app-1.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/portfolio/product-1.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/portfolio/branding-1.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/portfolio/books-1.jpg" alt="" />
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="portfolio-info"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    {renderLink("https://www.example.com", "www.example.com")}
                  </li>
                </ul>
              </div>
              <div
                className="portfolio-description"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h2>Exercitationem repudiandae officiis neque suscipit</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Portfolio Details Section */}
    </main>
  );
};

export default PortfolioDetails;
