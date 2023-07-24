import img from '../../assets/pngtree-admission-open-tag-abstract-shape-png-png-image_4566492.png'
import {
    FaYoutube,
    FaTwitter,
    FaFacebook,
    FaMailBulk,
    FaPhone,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <img src={img} className="w-12" alt="" />
          <p>
            Admission. <br />
            All University & college of USA
            <br />
             &copy; All right reserve for Admission 
          </p>
        </div>
        <div>
          <span className="footer-title">Social & contract</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.youtube.com/duadmissions">
              {" "}
              <FaYoutube className="w-7 h-7"></FaYoutube>
            </a>
  
            <a href="https://twitter.com/ElonAdmissions">
              {" "}
              <FaTwitter className="w-7 h-7"></FaTwitter>
            </a>
  
            <a href="https://www.facebook.com/admission.acd/">
              {" "}
              <FaFacebook className="w-7 h-7"></FaFacebook>
            </a>
            <a href="mailto: admission@du.com">
              {" "}
              <FaMailBulk className="w-7 h-7"></FaMailBulk>
            </a>
            <a href="tel:+888 227-8697">
              {" "}
              <FaPhone className="w-7 h-7"></FaPhone>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  