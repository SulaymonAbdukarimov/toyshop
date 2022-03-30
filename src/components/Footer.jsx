import React from "react";

function Footer() {
  return (
    <footer className="page-footer">
      <div class="footer-copyright">
        <div class="container">
          © {new Date().getFullYear()} Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">
            REPO
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
