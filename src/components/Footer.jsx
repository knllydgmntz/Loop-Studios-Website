import imgLogo from "../assets/images/logo.svg";
import imgFacebook from "../assets/images/icon-facebook.svg";
import imgTwitter from "../assets/images/icon-twitter.svg";
import imgPinterest from "../assets/images/icon-pinterest.svg";
import imgInstagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* Container */}
      <div className="container max-w-6xl py-10 mx-auto">
        {/* Footer Flex Container */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* Menu and Logo Container */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* Logo */}
            <div className="h-8">
              <img src={imgLogo} alt="Logo svg" className="w-44 md:ml-3" />
            </div>
            {/* Menu Container */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* Item 1 */}
              <div className="h-10 group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* Item 2 */}
              <div className="h-10 group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* Item 3 */}
              <div className="h-10 group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* Item 4 */}
              <div className="h-10 group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* Item 5 */}
              <div className="h-10 group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>

          {/* Social and Copyright Container */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* Icons Container */}
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              {/* Icon 1 */}
              <div className="h-8 group">
                <a href="#">
                  <img src={imgFacebook} alt="Facebook logo" className="h-6" />
                </a>
              </div>
              {/* Icon 2 */}
              <div className="h-8 group">
                <a href="#">
                  <img src={imgTwitter} alt="Twitter logo" className="h-6" />
                </a>
              </div>
              {/* Icon 3 */}
              <div className="h-8 group">
                <a href="#">
                  <img
                    src={imgPinterest}
                    alt="Pinterest logo"
                    className="h-6"
                  />
                </a>
              </div>
              {/* Icon 4 */}
              <div className="h-8 group">
                <a href="#">
                  <img
                    src={imgInstagram}
                    alt="Instagram logo"
                    className="h-6"
                  />
                </a>
              </div>
            </div>

            {/* Copyright */}

            <div className="font-bold">
              &copy; 2024 Loopstudios. All Rights Reserved By Keen
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
