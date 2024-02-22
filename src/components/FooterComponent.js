import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container">
        <section className="footer_section text-center">
          <p>
            Weiterbildung-ComKollege GmbH <br />
            Vertreten durch Khairalla, Tarik (Geschäftsführung) <br />
            Hobbitweg 42 <br />
            01337 Auenland <br />
            USt.-ID: DE424201337
          </p>
        </section>
      </div>

      <div className="text-center p-3">
        © 2024 CBM Projektmanagement GmbH:{" "}
        <a
          className="text-white"
          href="https://cbm-projektmanagement.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          cbm-projektmanagement.de
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
