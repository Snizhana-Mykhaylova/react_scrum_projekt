import React from "react";

const FooterComponent = () => {
  return (
    <div>
      <footer>
        <footer className="bg-dark text-center text-white">
          <div className="container">
            <section className="footer_section">
              <p>
                Weiterbildung-ComKollege GmbH
                <br></br>
                Vertreten durch Khairalla, Tarik (Geschäftsführung)
                <br></br>
                Hobbitweg 42
                <br></br>
                01337 Auenland
                <br></br>
                USt.-ID: DE424201337
              </p>
            </section>
          </div>

          <div className="text-center p-3">
            © 2024 CBM Projektmanagement GmbH:
            <a className="text-white" href="https://cbm-projektmanagement.de/">
              cbm-projektmanagement.de
            </a>
          </div>
        </footer>
      </footer>
    </div>
  );
};

export default FooterComponent;
