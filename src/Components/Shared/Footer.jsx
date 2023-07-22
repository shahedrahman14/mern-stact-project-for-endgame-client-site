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
          <img src="https://rb.gy/mvpzc" className="w-12" alt="" />
          <p>
            ToyCarShop Ltd. <br />
            NewYork, USA
            <br />
             &copy; All right reserve for ToyCarShop since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.youtube.com/@ToyForKids1">
              {" "}
              <FaYoutube className="w-7 h-7"></FaYoutube>
            </a>
  
            <a href="https://twitter.com/cartoys?lang=en">
              {" "}
              <FaTwitter className="w-7 h-7"></FaTwitter>
            </a>
  
            <a href="https://web.facebook.com/toystoreforkids/">
              {" "}
              <FaFacebook className="w-7 h-7"></FaFacebook>
            </a>
            <a href="mailto: contactusonline@cartoys.com">
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
  