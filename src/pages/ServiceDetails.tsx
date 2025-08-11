import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const ServiceDetails: React.FC = () => {
  const renderLink = (href: string, text: React.ReactNode, extraClass?: string) => {
    if (href.startsWith("#")) {
      return (
        <ScrollLink
          to={href.replace("#", "")}
          smooth={true}
          duration={500}
          offset={-70}
          className={extraClass}
        >
          {text}
        </ScrollLink>
      );
    }
    if (!href.startsWith("http") && !href.startsWith("https")) {
      return (
        <Link to={href} className={extraClass}>
          {text}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={extraClass}>
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
          <h1>Service Details</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
            quibusdam quia assumenda numquam molestias.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>{renderLink("/", "Home")}</li>
              <li className="current">Service Details</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* End Page Title */}

      {/* Service Details Section */}
      <section id="service-details" className="service-details section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="services-list">
                {renderLink("#", "Web Design", "active")}
                {renderLink("#", "Software Development")}
                {renderLink("#", "Product Management")}
                {renderLink("#", "Graphic Design")}
                {renderLink("#", "Marketing")}
              </div>
              <h4>Enim qui eos rerum in delectus</h4>
              <p>
                Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut
                quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore
                corrupti sed eum reiciendis. Maxime modi rerum.
              </p>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay={200}>
              <img
                src="assets/img/services.jpg"
                alt=""
                className="img-fluid services-img"
              />
              <h3>
                Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas
                dolorem ut voluptas
              </h3>
              <p>
                Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate
                non consequatur et doloremque consequuntur. Accusantium labore
                reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui
                omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>Aut eum totam accusantium voluptatem.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>Assumenda et porro nisi nihil nesciunt voluptatibus.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>Ullamco laboris nisi ut aliquip ex ea</span>
                </li>
              </ul>
              <p>
                Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo.
                Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque
                nesciunt fuga.
              </p>
              <p>
                Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut
                consequuntur recusandae mollitia doloremque est architecto cupiditate
                ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit
                sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel
                voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia
                dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut
                pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit
                dolore alias explicabo ea.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* /Service Details Section */}
    </main>
  );
};

export default ServiceDetails;
