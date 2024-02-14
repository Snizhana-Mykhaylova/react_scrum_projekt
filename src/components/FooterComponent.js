import React from "react";

const FooterComponent = () => {
  return (
    <div>
      <footer>
        <footer className="bg-dark text-center text-white">
          <div className="container p-4">
            <section className="mb-4">
              <p>
                Talentschmiede CBM Unser Ziel – Ihre persönliche
                Weiterentwicklung und berufliche Selbstverwirklichung!
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
