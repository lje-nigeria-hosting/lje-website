import React from "react";

const Footer: React.FC = () => {
  // This is th footer in the login and signup pages
  return (
    <>
      <footer className="footer footer-center text-base-content p-4">
        <aside>
          <p className="text-[13px]">
            Copyright © {new Date().getFullYear()} - All right reserved by LJE
            Nigeria
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
