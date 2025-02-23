import Image from "next/image";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const DashboardFooter = () => {
  // This is the footer in the user dashboard
  return (
    <div>
      <footer className="footer flex justify-between items-center bg-[#F9F9F9] text-gray-800 p-10 md:px-12">
        <aside>
          <Image src="/logo.png" alt="logo" width={65} height={65} />
        </aside>
        <nav>
          <h6 className="footer-title">Socials</h6>
          <div className="grid grid-flow-col gap-4">
            <FaXTwitter size={25} />
            <FaInstagram size={25} />
            <FaYoutube size={25} />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default DashboardFooter;
